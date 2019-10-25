import isInViewport from "./isInViewport";
import "./vendor/prebid";

// Maximum amount of time to wait for response to header bidding requests
const PREBID_TIMEOUT = 700;

// Auto-refresh visible ads at this interval (can be overwritten by config in BBGMAds constructor)
const AUTO_REFRESH_INTERVAL = 60 * 1000;

// Skip refreshing ads if the last refresh happened more recently than this (can be overwritten by config in BBGMAds constructor)
const MIN_REFRESH_INTERVAL = 1 * 1000;

const isActive = (codes, adUnit) => {
  if (!codes.includes(adUnit.code)) {
    return false;
  }

  // Check window size
  if (
    adUnit.hasOwnProperty("maxViewportWidth") &&
    window.innerWidth > adUnit.maxViewportWidth
  ) {
    return false;
  }
  if (
    adUnit.hasOwnProperty("minViewportWidth") &&
    window.innerWidth < adUnit.minViewportWidth
  ) {
    return false;
  }

  return true;
};

const getSlot = adUnit => {
  if (adUnit.sizes) {
    return window.googletag
      .defineSlot(adUnit.path, adUnit.sizes, adUnit.code)
      .addService(window.googletag.pubads());
  } else {
    return window.googletag
      .defineOutOfPageSlot(adUnit.path, adUnit.code)
      .addService(window.googletag.pubads());
  }
};

const refreshSlots = (adUnits, onlyInViewport) => {
  if (adUnits.length === 0) {
    return;
  }

  for (const adUnit of adUnits) {
    if (!adUnit.div && !adUnit.displayed) {
      adUnit.div = document.getElementById(adUnit.code);
      if (adUnit.div) {
        window.googletag.display(adUnit.code);
        adUnit.displayed = true;
      }
    }
  }

  // Even if not onlyInViewport, still check display:none
  const adUnitsFiltered = onlyInViewport
    ? adUnits.filter(adUnit => isInViewport(adUnit.div))
    : adUnits.filter(
        adUnit => adUnit.div && adUnit.div.style.display !== "none"
      );

  if (adUnitsFiltered.length > 0) {
    for (const adUnit of adUnitsFiltered) {
      adUnit.lastRefreshTime = Date.now();
    }

    window.googletag
      .pubads()
      .refresh(adUnitsFiltered.map(adUnit => adUnit.slot));
  }
};

class BBGMAds {
  constructor(queue, config) {
    // 0: init not called yet
    // 1: init called, not done yet
    // 2: init done
    this.status = 0;

    this.adUnits = config.adUnits;
    this.priceGranularity = config.priceGranularity;
    this.autoRefreshInterval =
      config.autoRefreshInterval !== undefined
        ? config.autoRefreshInterval
        : AUTO_REFRESH_INTERVAL;
    this.minRefreshInterval =
      config.minRefreshInterval !== undefined
        ? config.minRefreshInterval
        : MIN_REFRESH_INTERVAL;
    this.pubwiseSite = config.pubwiseSite;
    this.dfpCurrency = config.dfpCurrency;
    this.sizeConfig = config.sizeConfig;

    this.cmd = {
      push(fn) {
        // For consistency with functions pushed before bbgmAds is loaded, this is always async.
        setTimeout(() => {
          fn();
        });
      }
    };

    // Async, so queued functions run after the new bbgmAds.cmd.push is set up.
    setTimeout(() => {
      // Run queued functions. If any refresh comes, it will do nothing due to this.status check, even if it's
      // after init because init is async and refresh's this.status check is sync. If multiple inits come, all but
      // the first will do nothing for the same reason.
      for (const fn of queue) {
        fn();
      }
    });
  }

  loadAdUnits(codes, codesLazy) {
    const allAdUnitCodes = this.adUnits.map(adUnit => adUnit.code);
    const mergedCodes = codes.concat(codesLazy);
    for (const code of mergedCodes) {
      if (!allAdUnitCodes.includes(code)) {
        // eslint-disable-next-line no-console
        console.log(
          `bbgm-ads warning: requested code "${code}" not found in ad units`
        );
      }
    }

    for (const adUnit of this.adUnits) {
      // isActive uses codes, rather than mergedCodes, because lazy units aren't active yet
      adUnit.active = isActive(codes, adUnit);
      adUnit.lazy = isActive(codesLazy, adUnit);
      adUnit.prebid = !!adUnit.bids;
      adUnit.div = document.getElementById(adUnit.code);
      adUnit.displayed = false;
      adUnit.lastRefreshTime = 0;
    }
  }

  prebidConfig() {
    window.pbjs.aliasBidder("appnexus", "districtm");

    // pbjs.que not needed because pbjs is guaranteed to be loaded at this point (imported in this file).
    const prebidConfig = {
      consentManagement: {
        cmpApi: "iab",
        allowAuctionWithoutConsent: true
      },
      priceGranularity: this.priceGranularity,

      // RTK/aardvark asked for this
      userSync: {
        filterSettings: {
          iframe: {
            bidders: "*",
            filter: "include"
          }
        }
      }
    };
    if (this.sizeConfig !== undefined) {
      // Set it this way, otherwise Prebid treats it as being set with a value of undefined, rather than not being set
      prebidConfig.sizeConfig = this.sizeConfig;
    }
    window.pbjs.setConfig(prebidConfig);

    window.pbjs.addAdUnits(
      this.adUnits
        .filter(adUnit => (adUnit.active || adUnit.lazy) && adUnit.prebid)
        .map(adUnit => {
          return {
            bids: adUnit.bids,
            code: adUnit.code,
            mediaTypes: {
              banner: {
                sizes: adUnit.sizes
              }
            },
            sizes: adUnit.sizes
          };
        })
    );

    if (this.pubwiseSite) {
      window.pbjs.enableAnalytics([
        {
          provider: "pubwise",
          options: {
            site: this.pubwiseSite,
            endpoint: "https://api.pubwise.io/api/v4/event/add/"
          }
        }
      ]);
    }

    const USD_TO_CAD = 1.34; // Because Austin's DFP (including AdSense fallback) uses CAD but all bids are in USD.
    const OPTIMAL_FACTOR = 0.9; // For networks we get access to through Optimal, we need to give them a 10% cut.

    // Mitigating risk
    const INDEX_FACTOR =
      "SITE_TO_REPLACE" === "bbgm" || "SITE_TO_REPLACE" === "zengm" // eslint-disable-line no-constant-condition
        ? 0.5
        : 1;

    let currencyFactor;
    if (this.dfpCurrency === "USD") {
      currencyFactor = 1;
    } else if (this.dfpCurrency === "CAD") {
      currencyFactor = USD_TO_CAD;
    } else {
      throw new Error(`Invalid dfpCurrency: "${this.dfpCurrency}"`);
    }

    // Output of each function should be the same unit as used in DFP (for Austin, that's CAD)
    window.pbjs.bidderSettings = {
      standard: {
        // Divide rather than multiply for OPTIMAL_FACTOR, because we want to bump up bids relative to Optimal's AdExchange (this will cancel out with the aol and openx adjustments above)
        bidCpmAdjustment: bidCpm => (bidCpm * currencyFactor) / OPTIMAL_FACTOR
      },

      // standard is not run when an override is applied, so stuff from standard needs to be here too!
      aol: {
        // No OPTIMAL_FACTOR because these come from Optimal too
        bidCpmAdjustment: bidCpm => bidCpm * currencyFactor
      },
      openx: {
        // No OPTIMAL_FACTOR because these come from Optimal too
        bidCpmAdjustment: bidCpm => bidCpm * currencyFactor
      },
      ix: {
        bidCpmAdjustment: bidCpm =>
          (bidCpm * currencyFactor * INDEX_FACTOR) / OPTIMAL_FACTOR
      },
      aardvark: {
        // Bids are gross, we get 85%
        bidCpmAdjustment: bidCpm =>
          (bidCpm * currencyFactor * 0.85) / OPTIMAL_FACTOR
      }
    };
  }

  startAutoRefreshTimer() {
    clearTimeout(this.autoRefreshTimeoutID);
    if (this.autoRefreshInterval !== undefined) {
      this.autoRefreshTimeoutID = setTimeout(() => {
        this.refresh(undefined, true, true);
      }, this.autoRefreshInterval);
    }
  }

  // codes (ad div IDs) are needed because there could be more ad units configured here than currently in use (if site
  // is adding/removing ad codes, or if we want to keep old codes that might be cached in browsers).
  init(codes, codesLazy = []) {
    return new Promise(resolve => {
      // This is synchronous, to prevent a race condition if called twice immediately.
      if (this.status !== 0) {
        resolve(false);
        return;
      }
      this.status = 1;

      this.loadAdUnits(codes, codesLazy);

      this.prebidConfig();

      window.googletag.cmd.push(() => {
        window.googletag.pubads().setForceSafeFrame(true);
        window.googletag.pubads().setSafeFrameConfig({
          allowOverlayExpansion: false,
          allowPushExpansion: false,
          sandbox: true
        });

        for (const adUnit of this.adUnits) {
          if (adUnit.active || adUnit.lazy) {
            adUnit.slot = getSlot(adUnit);
          }
        }

        window.googletag.pubads().enableSingleRequest();
        window.googletag.pubads().disableInitialLoad();
        window.googletag.enableServices();

        for (const adUnit of this.adUnits) {
          if (adUnit.div) {
            window.googletag.display(adUnit.code);
            adUnit.displayed = true;
          }
        }

        // Show non-Prebid ads immediately
        refreshSlots(
          this.adUnits.filter(adUnit => adUnit.active && !adUnit.prebid),
          false
        );
      });

      // Request initial pageview bids ASAP, even if googletag stuff is not done yet
      const adUnitsPrebid = this.adUnits.filter(
        adUnit => adUnit.active && adUnit.prebid
      );
      window.pbjs.requestBids({
        adUnits: adUnitsPrebid,
        timeout: PREBID_TIMEOUT,
        bidsBackHandler: () => {
          window.googletag.cmd.push(() => {
            window.pbjs.setTargetingForGPTAsync();

            refreshSlots(adUnitsPrebid, false);

            this.status = 2;
            this.startAutoRefreshTimer();
            resolve(true);
          });
        }
      });
    });
  }

  refresh(codes, onlyInViewport = false, autoRefresh = false) {
    return new Promise(resolve => {
      // Handle old API where onlyInViewport was only arg
      if (typeof codes === "boolean") {
        onlyInViewport = codes;
        codes = undefined;
      }

      // Check if this refresh is too soon after the previous one
      const currentTime = Date.now();
      const adUnitsToRefresh = this.adUnits.filter(adUnit => {
        if (codes && !codes.includes(adUnit.code)) {
          return false;
        }

        // Different cutoffs for different scenarios!

        // Auto refresh
        if (autoRefresh) {
          return (
            currentTime - adUnit.lastRefreshTime >= this.autoRefreshInterval
          );
        }

        // Manual refresh, already loaded ad
        if (adUnit.active) {
          return (
            currentTime - adUnit.lastRefreshTime >= this.minRefreshInterval
          );
        }

        // Manual refresh, new lazy loaded ad
        if (codes && codes.includes(adUnit.code)) {
          adUnit.active = true;
          return true;
        }
      });

      // Cancel pending auto-refresh immediately, don't wait for bids.
      if (autoRefresh) {
        clearTimeout(this.autoRefreshTimeoutID);
      }

      if (this.status === 2) {
        // Non-prebid refresh
        refreshSlots(
          adUnitsToRefresh.filter(adUnit => adUnit.active && !adUnit.prebid),
          onlyInViewport
        );

        const adUnitsPrebid = adUnitsToRefresh.filter(
          adUnit => adUnit.active && adUnit.prebid
        );
        if (adUnitsPrebid.length === 0) {
          this.startAutoRefreshTimer();
          resolve(true);
        } else {
          // Prebid refresh
          window.pbjs.requestBids({
            adUnits: adUnitsPrebid,
            timeout: PREBID_TIMEOUT,
            bidsBackHandler: () => {
              window.pbjs.setTargetingForGPTAsync();
              refreshSlots(adUnitsPrebid, onlyInViewport);

              if (autoRefresh) {
                this.startAutoRefreshTimer();
              }
              resolve(true);
            }
          });
        }
      } else {
        resolve(false);
      }
    });
  }
}

export default BBGMAds;

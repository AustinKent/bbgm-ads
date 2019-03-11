import isInViewport from "./isInViewport";
import "./vendor/prebid";

// Maximum amount of time to wait for response to header bidding requests
const PREBID_TIMEOUT = 700;

// Auto-refresh visible ads at this interval (can be overwritten by config in BBGMAds constructor)
const AUTO_REFRESH_INTERVAL = 60 * 1000;

// Skip refreshing ads if the last refresh happened more recently than this (can be overwritten by config in BBGMAds constructor)
const MIN_REFRESH_INTERVAL = 1 * 1000;

const refreshSlots = (slots, divs, onlyInViewport) => {
  if (slots.length === 0) {
    return;
  }

  if (onlyInViewport) {
    const slotsFiltered = slots.filter((slot, i) => {
      return isInViewport(divs[i]);
    });
    window.googletag.pubads().refresh(slotsFiltered);
  } else {
    // Only check display: none, not if it's in viewport too
    const slotsFiltered = slots.filter((slot, i) => {
      return divs[i] && divs[i].style.display !== "none";
    });
    window.googletag.pubads().refresh(slotsFiltered);
  }
};

class BBGMAds {
  constructor(queue, config) {
    // 0: init not called yet
    // 1: init called, not done yet
    // 2: init done
    this.status = 0;

    this.lastRefreshTime = 0;

    this.adUnitsAll = config.adUnits;
    this.priceGranularity = config.priceGranularity;
    this.autoRefreshInterval =
      config.autoRefreshInterval !== undefined
        ? config.autoRefreshInterval
        : AUTO_REFRESH_INTERVAL;
    this.minRefreshInterval =
      config.minRefreshInterval !== undefined
        ? config.minRefreshInterval
        : MIN_REFRESH_INTERVAL;
    this.prebidTimeout =
      config.prebidTimeout !== undefined
        ? config.prebidTimeout
        : PREBID_TIMEOUT;
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

  loadAdUnits(codes) {
    this.adUnits = this.adUnitsAll.filter(adUnit => {
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
    });
    this.adUnitsPrebid = this.adUnits.filter(adUnit => adUnit.bids);
    this.adUnitsOther = this.adUnits.filter(adUnit => !adUnit.bids);

    this.adUnitCodesPrebid = this.adUnitsPrebid.map(adUnit => adUnit.code);
    this.adUnitCodesOther = this.adUnitsOther.map(adUnit => adUnit.code);

    this.adUnitDivsPrebid = this.adUnitCodesPrebid.map(code =>
      document.getElementById(code)
    );
    this.adUnitDivsOther = this.adUnitCodesOther.map(code =>
      document.getElementById(code)
    );

    const allCodes = this.adUnitsAll.map(adUnit => adUnit.code);
    for (const code of codes) {
      if (!allCodes.includes(code)) {
        // eslint-disable-next-line no-console
        console.log(
          `bbgm-ads warning: requested code "${code}" not found in ad units`
        );
      }
    }
  }

  startAutoRefreshTimer() {
    clearTimeout(this.autoRefreshTimeoutID);
    if (this.autoRefreshInterval !== undefined) {
      this.autoRefreshTimeoutID = setTimeout(() => {
        this.refresh(true);
      }, this.autoRefreshInterval);
    }
  }

  // codes (ad div IDs) are needed because there could be more ad units configured here than currently in use (if site
  // is adding/removing ad codes, or if we want to keep old codes that might be cached in browsers).
  init(codes) {
    return new Promise(resolve => {
      // This is synchronous, to prevent a race condition if called twice immediately.
      if (this.status !== 0) {
        resolve(false);
        return;
      }
      this.status = 1;

      this.loadAdUnits(codes);

      window.pbjs.aliasBidder("appnexus", "districtm");

      // pbjs.que not needed because pbjs is guaranteed to be loaded at this point (imported in this file).
      const prebidConfig = {
        consentManagement: {
          cmpApi: "iab",
          allowAuctionWithoutConsent: true
        },
        priceGranularity: this.priceGranularity
      };
      if (this.sizeConfig !== undefined) {
        // Set it this way, otherwise Prebid treats it as being set with a value of undefined, rather than not being set
        prebidConfig.sizeConfig = this.sizeConfig;
      }
      window.pbjs.setConfig(prebidConfig);

      window.pbjs.addAdUnits(
        this.adUnitsPrebid.map(adUnit => {
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

      const USD_TO_CAD = 1.33; // Because Austin's DFP (including AdSense fallback) uses CAD but all bids are in USD.
      const OPTIMAL_FACTOR = 0.9; // For networks we get access to through Optimal, we need to give them a 10% cut.

      let currencyFactor;
      if (this.dfpCurrency === "USD") {
        currencyFactor = 1;
      } else if (this.dfpCurrency === "CAD") {
        currencyFactor = USD_TO_CAD;
      } else {
        throw new Error(`Invalid dfpCurrency: "${this.dfpCurrency}"`);
      }

      window.pbjs.bidderSettings = {
        aol: {
          bidCpmAdjustment: bidCpm => bidCpm * OPTIMAL_FACTOR
        },
        openx: {
          bidCpmAdjustment: bidCpm => bidCpm * OPTIMAL_FACTOR
        },
        standard: {
          // Divide rather than multiply for OPTIMAL_FACTOR, because we want to bump up bids relative to Optimal's AdExchange (this will cancel out with the aol and openx adjustments above)
          bidCpmAdjustment: bidCpm => {
            (bidCpm * currencyFactor) / OPTIMAL_FACTOR;
          }
        }
      };

      window.googletag.cmd.push(() => {
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

        this.slotsPrebid = this.adUnitsPrebid.map(getSlot);
        this.slotsOther = this.adUnitsOther.map(getSlot);

        window.googletag.pubads().enableSingleRequest();
        window.googletag.pubads().disableInitialLoad();
        window.googletag.enableServices();

        for (const adUnitCode of this.adUnitCodesPrebid) {
          window.googletag.display(adUnitCode);
        }
        for (const adUnitCode of this.adUnitCodesOther) {
          window.googletag.display(adUnitCode);
        }

        // Show non-Prebid ads immediately
        refreshSlots(this.slotsOther, this.adUnitDivsOther, false);
      });

      // Request initial pageview bids ASAP, even if googletag stuff is not done yet
      window.pbjs.requestBids({
        timeout: this.prebidTimeout,
        bidsBackHandler: () => {
          window.googletag.cmd.push(() => {
            this.lastRefreshTime = Date.now();

            window.pbjs.setTargetingForGPTAsync();

            // Only Prebid ads here, non-Prebid ones were already refreshed
            refreshSlots(this.slotsPrebid, this.adUnitDivsPrebid, false);

            this.status = 2;
            this.startAutoRefreshTimer();
            resolve(true);
          });
        }
      });
    });
  }

  refresh(onlyInViewport = false) {
    return new Promise(resolve => {
      // Check if this refresh is too soon after the previous one
      const currentTime = Date.now();
      if (currentTime - this.lastRefreshTime < this.minRefreshInterval) {
        resolve(false);
        return;
      }

      // Cancel pending auto-refresh immediately, don't wait for bids.
      clearTimeout(this.autoRefreshTimeoutID);

      if (this.status === 2) {
        this.lastRefreshTime = currentTime;

        // Non-prebid refresh
        refreshSlots(this.slotsOther, this.adUnitDivsOther, onlyInViewport);

        if (this.slotsPrebid.length === 0) {
          this.startAutoRefreshTimer();
          resolve(true);
        } else {
          // Prebid refresh
          window.pbjs.requestBids({
            timeout: this.prebidTimeout,
            bidsBackHandler: () => {
              window.pbjs.setTargetingForGPTAsync();
              refreshSlots(
                this.slotsPrebid,
                this.adUnitDivsPrebid,
                onlyInViewport
              );

              this.startAutoRefreshTimer();
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

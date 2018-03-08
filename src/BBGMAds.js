import isInViewport from "./isInViewport";
import "./vendor/prebid";

const PREBID_TIMEOUT = 700;
const AUTO_REFRESH_INTERVAL = 60 * 1000;

const sendAdserverRequest = () => {
  if (window.pbjs.adserverRequestSent) {
    return;
  }
  window.pbjs.adserverRequestSent = true;

  window.googletag.cmd.push(() => {
    window.pbjs.setTargetingForGPTAsync();
    window.googletag.pubads().refresh();
  });
};

class BBGMAds {
  constructor(queue, adUnitsAll) {
    // 0: init not called yet
    // 1: init called, not done yet
    // 2: init done
    this.status = 0;

    this.adUnitsAll = adUnitsAll;

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
    this.adUnits = this.adUnitsAll.filter(adUnit =>
      codes.includes(adUnit.code)
    );
    this.adUnitCodes = this.adUnits.map(adUnit => adUnit.code);
    this.adUnitDivs = this.adUnitCodes.map(code =>
      document.getElementById(code)
    );

    if (codes.length !== this.adUnits) {
      for (const code of codes) {
        if (!this.adUnitCodes.includes(code)) {
          // eslint-disable-next-line no-console
          console.log(
            `bbgm-ads warning: requested code "${code}" not found in ad units`
          );
        }
      }
    }
  }

  startAutoRefreshTimer() {
    clearTimeout(this.autoRefreshTimeoutID);
    this.autoRefreshTimeoutID = setTimeout(() => {
      this.refresh(true);
    }, AUTO_REFRESH_INTERVAL);
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

      // pbjs.que not needed because pbjs is guaranteed to be loaded at this point (imported in this file).
      window.pbjs.setConfig({ priceGranularity: "high" });
      window.pbjs.addAdUnits(
        this.adUnits.map(adUnit => {
          return {
            code: adUnit.code,
            sizes: adUnit.sizes,
            bids: adUnit.bids
          };
        })
      );
      window.pbjs.bidderSettings = {
        standard: {
          // USD to CAD, because Austin's DFP (including AdSense fallback) uses CAD but all bids are in USD.
          bidCpmAdjustment: bidCpm => bidCpm * 1.29
        }
      };
      window.pbjs.requestBids({
        bidsBackHandler: sendAdserverRequest
      });

      setTimeout(sendAdserverRequest, PREBID_TIMEOUT);

      window.googletag.cmd.push(() => {
        this.slots = this.adUnits.map(adUnit => {
          // If any ad divs are hidden, show them
          const div = document.getElementById(adUnit.code);
          if (div && div.style.display === "none") {
            div.style.display = "block";
          }

          return window.googletag
            .defineSlot(adUnit.path, adUnit.sizes, adUnit.code)
            .addService(window.googletag.pubads());
        });

        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();

        for (const adUnitCode of this.adUnitCodes) {
          window.googletag.display(adUnitCode);
        }
        this.status = 2;
        this.startAutoRefreshTimer();
        resolve(true);
      });
    });
  }

  refresh(onlyInViewport = false) {
    return new Promise(resolve => {
      // Cancel pending auto-refresh immediately, don't wait for bids.
      clearTimeout(this.autoRefreshTimeoutID);

      if (this.status === 2) {
        window.pbjs.requestBids({
          timeout: PREBID_TIMEOUT,
          adUnitCodes: this.adUnitCodes,
          bidsBackHandler: () => {
            window.pbjs.setTargetingForGPTAsync(this.adUnitCodes);

            if (onlyInViewport) {
              const slots = this.slots.filter((slot, i) => {
                return isInViewport(this.adUnitDivs[i]);
              });
              window.googletag.pubads().refresh(slots);
            } else {
              window.googletag.pubads().refresh();
            }

            this.startAutoRefreshTimer();
            resolve(true);
          }
        });
      } else {
        resolve(false);
      }
    });
  }
}

export default BBGMAds;

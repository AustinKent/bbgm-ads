import adUnits from "./adUnits";
import "./vendor/prebid";

const PREBID_TIMEOUT = 700;

const sendAdserverRequest = () => {
    if (window.pbjs.adserverRequestSent) {
        return;
    }
    window.pbjs.adserverRequestSent = true;

    window.googletag.cmd.push(() => {
        window.pbjs.que.push(() => {
            window.pbjs.setTargetingForGPTAsync();
            window.googletag.pubads().refresh();
        });
    });
};

class BBGMAds {
    constructor(queue) {
        // 0: init not called yet
        // 1: init called, not done yet
        // 2: init done
        this.status = 0;

        this.cmd = {
            push(fn) {
                // For consistency with functions pushed before bbgmAds is loaded, this is always async.
                setTimeout(() => {
                    fn();
                });
            },
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

    init() {
        // This is synchronous, to prevent a race condition if called twice immediately.
        this.status = 1;

        return new Promise(resolve => {
            this.adUnitCodes = adUnits.map(adUnit => adUnit.code)

            window.pbjs.setConfig({ priceGranularity: "high" });
            window.pbjs.addAdUnits(adUnits.map(adUnit => {
                return {
                    code: adUnit.code,
                    sizes: adUnit.sizes,
                    bids: adUnit.bids,
                }
            }));
            window.pbjs.bidderSettings = {
                standard: {
                    // USD to CAD, because Austin's DFP (including AdSense fallback) uses CAD but all bids are in USD.
                    bidCpmAdjustment: bidCpm => bidCpm * 1.29,
                },
            };
            window.pbjs.requestBids({
                bidsBackHandler: sendAdserverRequest,
            });

            setTimeout(sendAdserverRequest, PREBID_TIMEOUT);

            window.googletag.cmd.push(() => {
                for (const adUnit of adUnits) {
                    // If any ad divs are hidden, show them
                    const div = document.getElementById(adUnit.code);
                    if (div && div.style.display === "none") {
                        div.style.display = "block";
                    }

                    window.googletag
                        .defineSlot(
                            adUnit.path,
                            adUnit.sizes,
                            adUnit.code,
                        )
                        .addService(window.googletag.pubads());
                }
                window.googletag.pubads().enableSingleRequest();
                window.googletag.enableServices();

                let count = 0;
                for (const adUnitCode of adUnitCodes) {
                    window.googletag.cmd.push(() => {
                        window.googletag.display(adUnitCode);
                        count += 1;
                        if (count >= adUnits.length) {
                            this.status = 2;

                            resolve();
                        }
                    });
                }
            });
        });
    }

    refresh() {
console.log("refresh", this.status);
        if (this.status === 2) {
            window.pbjs.que.push(() => {
                window.pbjs.requestBids({
                    timeout: PREBID_TIMEOUT,
                    adUnitCodes: this.adUnitCodes,
                    bidsBackHandler: () => {
                        window.pbjs.setTargetingForGPTAsync(this.adUnitCodes);
                        window.googletag.pubads().refresh();
                    },
                });
            });
        }
    }
}

const queue = window.bbgmAds && Array.isArray(window.bbgmAds) ? window.bbgmAds : [];

const bbgmAds = new BBGMAds(queue);

export default bbgmAds;

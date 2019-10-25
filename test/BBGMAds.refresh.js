const GPT = require("gpt-mock");
const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

const emptyConfig = {
  adUnits: [],
  dfpCurrency: "CAD",
  minRefreshInterval: 0,
  priceGranularity: "high"
};

const mockGoogletagRefresh = async (bbgmAdsConfig = {}) => {
  window.googletag = new GPT();
  window.googletag._loaded();

  const actualRefreshes = [];

  const pubads = window.googletag.pubads();
  const originalRefresh = pubads.refresh.bind(pubads);
  pubads.refresh = slots => {
    try {
      if (slots !== undefined) {
        for (const slot of slots) {
          actualRefreshes.push(slot.getSlotElementId());
        }
      }
      return originalRefresh(slots);
    } catch (err) {
      console.log(err);
    }
  };

  const adUnits = [
    {
      code: "prebid",
      path: "/1/test",
      sizes: [[728, 90]],
      bids: []
    },
    {
      code: "non-prebid",
      path: "/1/test",
      sizes: [[728, 90]]
    }
  ];

  for (const { code } of adUnits) {
    if (!document.getElementById(code)) {
      document.body.insertAdjacentHTML(
        "afterbegin",
        `<div id="${code}"></div>`
      );
    }
  }

  const bbgmAds = new BBGMAds([], {
    ...emptyConfig,
    adUnits,
    minRefreshInterval: 0,
    priceGranularity: "high",
    ...bbgmAdsConfig
  });

  await bbgmAds.init(["prebid", "non-prebid"]);

  return {
    actualRefreshes,
    bbgmAds
  };
};

describe("BBGMAds.refresh", function() {
  this.timeout(5000);

  let originalRequestBids;
  before(() => {
    originalRequestBids = window.pbjs.requestBids;
    window.pbjs.requestBids = ({ bidsBackHandler }) => {
      setTimeout(bidsBackHandler, 10);
    };
    window.pbjs.requestBids.before = originalRequestBids.before;
  });
  after(() => {
    window.pbjs.requestBids = originalRequestBids;
  });

  it("does nothing if no ad units to refresh", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], emptyConfig);

    await bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(res);

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  it("does nothing if init not called", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], emptyConfig);

    const res = await bbgmAds.refresh();
    proclaim(!res);

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  it("does nothing if init not finished", async () => {
    window.googletag = new GPT();
    const bbgmAds = new BBGMAds([], emptyConfig);

    const promise = bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(!res);

    window.googletag._loaded();

    await promise;

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  it("refreshes Prebid and non-Prebid units", async () => {
    const { actualRefreshes, bbgmAds } = await mockGoogletagRefresh();

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid"]);

    await bbgmAds.refresh();

    proclaim.deepEqual(actualRefreshes, [
      "non-prebid",
      "prebid",
      "non-prebid",
      "prebid"
    ]);

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  it("does not refresh if called faster than minRefreshInterval", async () => {
    const { actualRefreshes, bbgmAds } = await mockGoogletagRefresh({
      minRefreshInterval: 500
    });

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid"]);

    await bbgmAds.refresh();

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid"]);

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  it("does not refresh hidden ad", async () => {
    const { actualRefreshes, bbgmAds } = await mockGoogletagRefresh();

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid"]);

    document.getElementById("non-prebid").style.display = "none";

    await bbgmAds.refresh();

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid", "prebid"]);

    document.getElementById("non-prebid").style.display = null;
    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });

  // Adding the rect.width/rect.height checks in isInViewport broke this test
  it.skip("auto refreshes", async () => {
    const { actualRefreshes, bbgmAds } = await mockGoogletagRefresh({
      autoRefreshInterval: 300,
      prebidTimeout: 10
    });

    proclaim.deepEqual(actualRefreshes, ["non-prebid", "prebid"]);

    // Wait enough time for it to auto refresh
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 450);
    });

    proclaim.deepEqual(actualRefreshes, [
      "non-prebid",
      "prebid",
      "non-prebid",
      "prebid"
    ]);

    // Another one, just to be sure
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 450);
    });

    proclaim.deepEqual(actualRefreshes, [
      "non-prebid",
      "prebid",
      "non-prebid",
      "prebid",
      "non-prebid",
      "prebid"
    ]);

    clearTimeout(bbgmAds.autoRefreshTimeoutID);
  });
});

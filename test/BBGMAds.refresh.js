const GPT = require("gpt-mock");
const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

const emptyConfig = {
  adUnits: [],
  priceGranularity: "high"
};

describe("BBGMAds.refresh", () => {
  it("runs", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], emptyConfig);

    await bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(res);
  });

  it("does nothing if init not called", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], emptyConfig);

    const res = await bbgmAds.refresh();
    proclaim(!res);
  });

  it("does nothing if init not finished", async () => {
    window.googletag = new GPT();
    const bbgmAds = new BBGMAds([], emptyConfig);

    const promise = bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(!res);

    window.googletag._loaded();

    await promise;
  });

  it("refreshes Prebid and non-Prebid units separately", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();

    const actualRefreshes = [];

    const pubads = window.googletag.pubads();
    const originalRefresh = pubads.refresh.bind(pubads);
    pubads.refresh = slots => {
      try {
        if (slots !== undefined) {
          actualRefreshes.push(slots[0].getSlotElementId());
        } else {
          actualRefreshes.push(undefined);
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

    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div id="prebid"></div><div id="non-prebid"></div>'
    );

    const bbgmAds = new BBGMAds([], {
      adUnits,
      priceGranularity: "high"
    });

    await bbgmAds.init(["prebid", "non-prebid"]);
    await bbgmAds.refresh();

    const expectedRefreshes = [undefined, "non-prebid", "prebid"];
    proclaim.deepEqual(actualRefreshes, expectedRefreshes);
  });

  it("auto refreshes after 60 seconds");
});

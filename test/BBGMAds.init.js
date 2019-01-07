const GPT = require("gpt-mock");
const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

const emptyConfig = {
  adUnits: [],
  dfpCurrency: "USD",
  priceGranularity: "high"
};

describe("BBGMAds.init", () => {
  describe("GPT is loaded before BBGMAds", () => {
    beforeEach(() => {
      window.googletag = new GPT();
      window.googletag._loaded();
    });

    it("runs", async () => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      proclaim.equal(bbgmAds.status, 0);
      await bbgmAds.init([]);
      proclaim.equal(bbgmAds.status, 2);

      clearTimeout(bbgmAds.autoRefreshTimeoutID);
    });

    it("ignores any calls after the first", async () => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      let res = await bbgmAds.init([]);
      proclaim(res);

      res = await bbgmAds.init([]);
      proclaim(!res);

      res = await bbgmAds.init([]);
      proclaim(!res);

      clearTimeout(bbgmAds.autoRefreshTimeoutID);
    });

    it("fails for invalid currency", async () => {
      const bbgmAds = new BBGMAds([], {
        ...emptyConfig,
        dfpCurrency: "Fake"
      });

      let err;
      try {
        await bbgmAds.init([]);
      } catch (err2) {
        err = err2;
      }

      proclaim(err);
      proclaim.equal(err.message, 'Invalid dfpCurrency: "Fake"');

      clearTimeout(bbgmAds.autoRefreshTimeoutID);
    });
  });

  describe("GPT is loaded after BBGMAds", () => {
    beforeEach(() => {
      window.googletag = new GPT();
    });

    it("runs", async () => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      proclaim.equal(bbgmAds.status, 0);
      const promise = bbgmAds.init([]).then(() => {
        proclaim.equal(bbgmAds.status, 2);
      });
      proclaim.equal(bbgmAds.status, 1);

      window.googletag._loaded();

      await promise;

      clearTimeout(bbgmAds.autoRefreshTimeoutID);
    });

    it("ignores any calls after the first", async () => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      const promises = [
        bbgmAds.init([]).then(res => {
          proclaim(res);
        }),
        bbgmAds.init([]).then(res => {
          proclaim(!res);
        }),
        bbgmAds.init([]).then(res => {
          proclaim(!res);
        })
      ];

      window.googletag._loaded();

      await promises;

      clearTimeout(bbgmAds.autoRefreshTimeoutID);
    });
  });
});

const GPT = require("gpt-mock");
const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

describe("BBGMAds.init", () => {
  describe("GPT is loaded before BBGMAds", () => {
    beforeEach(() => {
      window.googletag = new GPT();
      window.googletag._loaded();
    });

    it("runs", async () => {
      const bbgmAds = new BBGMAds([], []);

      proclaim.equal(bbgmAds.status, 0);
      await bbgmAds.init([]);
      proclaim.equal(bbgmAds.status, 2);
    });

    it("ignores any calls after the first", async () => {
      const bbgmAds = new BBGMAds([], []);

      let res = await bbgmAds.init([]);
      proclaim(res);

      res = await bbgmAds.init([]);
      proclaim(!res);

      res = await bbgmAds.init([]);
      proclaim(!res);
    });
  });

  describe("GPT is loaded after BBGMAds", () => {
    beforeEach(() => {
      window.googletag = new GPT();
    });

    it("runs", async () => {
      const bbgmAds = new BBGMAds([], []);

      proclaim.equal(bbgmAds.status, 0);
      const promise = bbgmAds.init([]).then(() => {
        proclaim.equal(bbgmAds.status, 2);
      });
      proclaim.equal(bbgmAds.status, 1);

      window.googletag._loaded();

      await promise;
    });

    it("ignores any calls after the first", async () => {
      const bbgmAds = new BBGMAds([], []);

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
    });
  });
});

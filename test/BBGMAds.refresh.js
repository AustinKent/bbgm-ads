const GPT = require("gpt-mock");
const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

describe("BBGMAds.refresh", () => {
  it("runs", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], []);

    await bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(res);
  });

  it("does nothing if init not called", async () => {
    window.googletag = new GPT();
    window.googletag._loaded();
    const bbgmAds = new BBGMAds([], []);

    const res = await bbgmAds.refresh();
    proclaim(!res);
  });

  it("does nothing if init not finished", async () => {
    window.googletag = new GPT();
    const bbgmAds = new BBGMAds([], []);

    const promise = bbgmAds.init([]);
    const res = await bbgmAds.refresh();
    proclaim(!res);

    window.googletag._loaded();

    await promise;
  });
});

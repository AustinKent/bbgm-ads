const assert = require("assert");

describe("bbgm.cmd after module is loaded", () => {
  const bbgmAds = require("../dist/test");

  it("works", (done) => {
    bbgmAds.cmd.push(() => {
      done();
    });
  });

  it("is async", (done) => {
    let val = false;
    bbgmAds.cmd.push(() => {
      assert(val);
      done();
    });
    val = true;
  });
});

describe("bbgm.cmd before module is loaded", () => {

});

const proclaim = require("proclaim");
const bbgmAds = require("../dist/test");

describe("bbgm.cmd after module is loaded", () => {
  it("works", (done) => {
    bbgmAds.cmd.push(() => {
      done();
    });
  });

  it("is async", (done) => {
    let val = false;
    bbgmAds.cmd.push(() => {
      proclaim(val);
      done();
    });
    val = true;
  });
});

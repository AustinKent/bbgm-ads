const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

const emptyConfig = {
  adUnits: [],
  priceGranularity: "high"
};

describe("BBGMAds.cmd", () => {
  describe("after module is loaded", () => {
    it("works", done => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      bbgmAds.cmd.push(() => {
        done();
      });
    });

    it("is async", done => {
      const bbgmAds = new BBGMAds([], emptyConfig);

      let val = false;
      bbgmAds.cmd.push(() => {
        proclaim(val);
        done();
      });
      val = true;
    });
  });

  describe("before module is loaded", () => {
    it("works", done => {
      new BBGMAds(
        [
          () => {
            done();
          }
        ],
        emptyConfig
      );
    });

    it("is async", done => {
      let val = false;
      new BBGMAds(
        [
          () => {
            proclaim(val);
            done();
          }
        ],
        emptyConfig
      );
      val = true;
    });
  });
});

const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

describe("BBGMAds.cmd", () => {
  describe("after module is loaded", () => {
    it("works", done => {
      const bbgmAds = new BBGMAds([], []);

      bbgmAds.cmd.push(() => {
        done();
      });
    });

    it("is async", done => {
      const bbgmAds = new BBGMAds([], []);

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
        []
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
        []
      );
      val = true;
    });
  });
});

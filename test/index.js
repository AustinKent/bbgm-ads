const proclaim = require("proclaim");
const bbgmAds = require("../dist/test");

it("arrays are equal", () => {
  console.log(bbgmAds);
  proclaim.deepEqual([1, 2], [1, 2]);
});

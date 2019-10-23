const proclaim = require("proclaim");
const BBGMAds = require("../src/BBGMAds");

describe("BBGMAds.loadAdUnits", () => {
  it("uses a subset of available ad units", () => {
    const adUnits = [
      {
        code: "test-code-1",
        path: "/1/test1",
        sizes: [[728, 90]],
        bids: []
      },
      {
        code: "test-code-2",
        path: "/1/test2",
        sizes: [[728, 90]],
        bids: []
      },
      {
        code: "test-code-3",
        path: "/1/test3",
        sizes: [[728, 90]],
        bids: []
      }
    ];

    const bbgmAds = new BBGMAds([], {
      adUnits,
      priceGranularity: "high"
    });
    bbgmAds.loadAdUnits(["test-code-1", "test-code-3"]);

    const adUnitsPrebid = bbgmAds.adUnits.filter(
      adUnit => adUnit.active && adUnit.prebid
    );
    proclaim.equal(adUnitsPrebid.length, 2);
    proclaim.deepEqual(adUnitsPrebid.map(adUnit => adUnit.code), [
      "test-code-1",
      "test-code-3"
    ]);
  });

  it("warns about invalid codes", () => {
    const adUnits = [
      {
        code: "test-code",
        path: "/1/test",
        sizes: [[728, 90]],
        bids: []
      }
    ];

    const bbgmAds = new BBGMAds([], {
      adUnits,
      priceGranularity: "high"
    });

    const realLog = console.log;
    console.log = text => {
      proclaim.equal(
        text,
        'bbgm-ads warning: requested code "invalid-code" not found in ad units'
      );
    };
    bbgmAds.loadAdUnits(["invalid-code"]);
    console.log = realLog;
  });

  it("separates Prebid and non-Prebid units", () => {
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

    const bbgmAds = new BBGMAds([], {
      adUnits,
      priceGranularity: "high"
    });

    bbgmAds.loadAdUnits(["prebid", "non-prebid"]);

    proclaim.equal(bbgmAds.adUnits.length, 2);

    const adUnitsPrebid = bbgmAds.adUnits.filter(adUnit => adUnit.prebid);
    const adUnitsOther = bbgmAds.adUnits.filter(adUnit => !adUnit.prebid);

    proclaim.equal(adUnitsPrebid.length, 1);
    proclaim.equal(adUnitsOther.length, 1);

    proclaim.equal(adUnitsPrebid[0].code, "prebid");
    proclaim.equal(adUnitsOther[0].code, "non-prebid");
  });
});

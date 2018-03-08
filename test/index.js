const GPT = require("gpt-mock");
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

    const bbgmAds = new BBGMAds([], adUnits);
    bbgmAds.loadAdUnits(["test-code-1", "test-code-3"]);

    proclaim.equal(bbgmAds.adUnits.length, 2);
    proclaim.deepEqual(bbgmAds.adUnitCodes, ["test-code-1", "test-code-3"]);
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

    const bbgmAds = new BBGMAds([], adUnits);

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
});

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

const adUnits = [
  {
    code: "div-gpt-ad-1516424492164-4",
    path: "/21680050242/slam_hp_lb",
    sizes: [[728, 90], [320, 50]],
    bids: [
      {
        bidder: "appnexus",
        labelAny: ["desktop"],
        params: {
          placementId: "14693280"
        }
      },
      {
        bidder: "appnexus",
        labelAny: ["mobile"],
        params: {
          placementId: "14693287"
        }
      },
      {
        bidder: "sovrn",
        labelAny: ["desktop"],
        params: { tagid: "597371" }
      },
      {
        bidder: "sovrn",
        labelAny: ["mobile"],
        params: { tagid: "597376" }
      },
      {
        bidder: "districtm",
        labelAny: ["desktop"],
        params: {
          placementId: "14708373"
        }
      },
      {
        bidder: "districtm",
        labelAny: ["mobile"],
        params: {
          placementId: "14708378"
        }
      },
      {
        bidder: "openx",
        labelAny: ["desktop"],
        params: {
          unit: "540562167",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "openx",
        labelAny: ["mobile"],
        params: {
          unit: "540562171",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        labelAny: ["desktop"],
        params: {
          placement: "5034561",
          network: "11455.1"
        }
      },
      {
        bidder: "aol",
        labelAny: ["mobile"],
        params: {
          placement: "5034564",
          network: "11455.1"
        }
      }
    ]
  },
  {
    code: "div-gpt-ad-1516424492164-2",
    path: "/21680050242/slam_hp_box",
    sizes: [[300, 250]],
    labelAny: ["desktop", "mobile"],
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: "14693282"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "597373" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "14708375"
        }
      },
      {
        bidder: "openx",
        params: {
          unit: "540562165",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "5034559",
          network: "11455.1"
        }
      }
    ]
  },

  // Because the previous ad unit is desktop and mobile at 300x250 but this one is mobile only, we need to split up this ad unit into two, otherwise it has no way to know that the 300x250 is mobile only. Then set minViewportWidth and maxViewportWidth to be adjacent, so only one of these is ever used
  {
    code: "div-gpt-ad-1516424492164-5",
    path: "/21680050242/slam_hp_tower",
    sizes: [[160, 600]],
    minViewportWidth: 641,
    labelAny: ["desktop"],
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: "14693285"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "597377" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "14708377"
        }
      },
      {
        bidder: "openx",
        params: {
          unit: "540562166",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "5034560",
          network: "11455.1"
        }
      }
    ]
  },
  {
    code: "div-gpt-ad-1516424492164-5",
    path: "/21680050242/slam_hp_tower",
    sizes: [[300, 250]],
    maxViewportWidth: 640,
    labelAny: ["mobile"],
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: "14693283"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "597374" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "14708376"
        }
      },
      {
        bidder: "openx",
        params: {
          unit: "540562169",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "5034563",
          network: "11455.1"
        }
      }
    ]
  }
];

const dfpCurrency = "USD";

const priceGranularity = "high";

const publisherName = "SLAM";

const pubwiseSite = undefined;

const sizeConfig = [
  {
    mediaQuery: "(min-width: 641px)",
    sizesSupported: [[728, 90], [970, 250], [160, 600], [300, 600]],
    labels: ["desktop"]
  },
  {
    mediaQuery: "(max-width: 640px)",
    sizesSupported: [[320, 100], [320, 50], [300, 250]],
    labels: ["mobile"]
  }
];

export {
  adUnits,
  dfpCurrency,
  priceGranularity,
  publisherName,
  pubwiseSite,
  sizeConfig
};

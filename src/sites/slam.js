const getAdUnits = type => {
  let codes;
  let paths;
  if (type === "home") {
    codes = {
      lp: "div-gpt-ad-1516424492164-4",
      box: "div-gpt-ad-1516424492164-2",
      tower: "div-gpt-ad-1516424492164-5",
      sticky: "div-gpt-ad-1516424492164-13"
    };
    paths = {
      lp: "/21680050242/slam_hp_lb",
      box: "/21680050242/slam_hp_box",
      tower: "/21680050242/slam_hp_tower",
      sticky: "/21680050242/slam_hp_sticky"
    };
  } else if (type === "interior") {
    codes = {
      lp: "div-gpt-ad-1516424492164-10",
      box: "div-gpt-ad-1516424492164-8",
      tower: "div-gpt-ad-1516424492164-11",
      sticky: "div-gpt-ad-1516424492164-14"
    };
    paths = {
      lp: "/21680050242/slam_interior_lb",
      box: "/21680050242/slam_interior_box",
      tower: "/21680050242/slam_interior_tower",
      sticky: "/21680050242/slam_interior_sticky"
    };
  } else {
    throw new Error(`Invalid type: "${type}"`);
  }

  return [
    // In theory this ad unit should be able to be configured just once, but for some reason I don't consistently get the size mapping to work, ugh.
    {
      code: codes.lp,
      path: paths.lp,
      sizes: [[728, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop"],
      bids: [
        {
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693280"
          }
        },
        {
          bidder: "sovrn",
          params: { tagid: "597371" }
        },
        {
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562167",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5034561",
            network: "11455.1"
          }
        }
      ]
    },
    {
      code: codes.lp,
      path: paths.lp,
      sizes: [[320, 50]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693287"
          }
        },
        {
          bidder: "sovrn",
          params: { tagid: "597376" }
        },
        {
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562171",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5034564",
            network: "11455.1"
          }
        }
      ]
    },
    {
      code: codes.sticky,
      path: paths.sticky,
      sizes: [[728, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop"],
      bids: [
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
          }
        },*/
        {
          bidder: "appnexus",
          params: {
            placementId: "15382505"
          }
        },
        {
          bidder: "sovrn",
          params: { tagid: "603725" }
        },
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562167",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5034561",
            network: "11455.1"
          }
        },*/
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        }
      ]
    },
    {
      code: codes.sticky,
      path: paths.sticky,
      sizes: [[320, 50]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
          }
        },*/
        {
          bidder: "appnexus",
          params: {
            placementId: "15382442"
          }
        },
        {
          bidder: "sovrn",
          params: { tagid: "603724" }
        },
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562171",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5034564",
            network: "11455.1"
          }
        }*/
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        }
      ]
    },
    {
      code: codes.box,
      path: paths.box,
      sizes: [[300, 250]],
      labelAny: ["desktop", "mobile"],
      bids: [
        {
          bidder: "ix",
          params: {
            siteId: "334668",
            size: [300, 250]
          }
        },
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
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
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
      code: codes.tower,
      path: paths.tower,
      sizes: [[160, 600]],
      minViewportWidth: 641,
      labelAny: ["desktop"],
      bids: [
        {
          bidder: "ix",
          params: {
            siteId: "334669",
            size: [160, 600]
          }
        },
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
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
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
      code: codes.tower,
      path: paths.tower,
      sizes: [[300, 250]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "ix",
          params: {
            siteId: "334671",
            size: [160, 600]
          }
        },
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
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
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
};

const adUnits = [
  ...getAdUnits("home"),
  ...getAdUnits("interior"),
  {
    code: "div-gpt-ad-1516424492164-0",
    path: "/21680050242/slam_hp_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-1",
    path: "/21680050242/slam_hp_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-6",
    path: "/21680050242/slam_interior_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-7",
    path: "/21680050242/slam_interior_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop"]
  }
];

const dfpCurrency = "USD";

const priceGranularity = "high";

const publisherName = "SLAM";

const pubwiseSite = undefined;

const sizeConfig = [
  {
    mediaQuery: "(min-width: 641px)",
    sizesSupported: [[728, 90], [970, 250], [160, 600], [300, 600], [300, 250]],
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

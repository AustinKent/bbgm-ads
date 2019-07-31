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
  } else if (type === "news") {
    codes = {
      lp: "div-gpt-ad-1516424492164-15",
      box: "div-gpt-ad-1516424492164-16",
      tower: "div-gpt-ad-1516424492164-17",
      sticky: "div-gpt-ad-1516424492164-18"
    };
    paths = {
      lp: "/21680050242/slam_news_lb",
      box: "/21680050242/slam_news_box",
      tower: "/21680050242/slam_news_tower",
      sticky: "/21680050242/slam_news_sticky"
    };
  } else if (type === "test") {
    codes = {
      lp: "div-gpt-ad-1516424492164-21",
      box: "div-gpt-ad-1516424492164-22",
      tower: "div-gpt-ad-1516424492164-23",
      sticky: "div-gpt-ad-1516424492164-24"
    };
    paths = {
      lp: "/21680050242/slam_test_lb",
      box: "/21680050242/slam_test_box",
      tower: "/21680050242/slam_test_tower",
      sticky: "/21680050242/slam_test_sticky"
    };
  } else {
    throw new Error(`Invalid type: "${type}"`);
  }

  return [
    // In theory this ad unit should be able to be configured just once, but for some reason I don't consistently get the size mapping (for mobile and desktop) to work, ugh.
    {
      code: codes.lp,
      path: paths.lp,
      sizes: [[970, 250], [728, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
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
            placementId: "14693280"
          }
        },
        {
          bidder: "appnexus",
          labelAny: ["max-desktop"],
          params: {
            placementId: "15712100"
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "5acbbc1c4351c23f0ffc"
          }
        }
      ]
    },
    {
      code: codes.lp,
      path: paths.lp,
      sizes: [[320, 50], [320, 100]],
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "97bd12da72d40df45313"
          }
        }
      ]
    },
    {
      code: codes.sticky,
      path: paths.sticky,
      sizes: [[728, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        /*{
          bidder: "ix",
          params: {
            siteId: "334672",
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
        {
          bidder: "districtm",
          params: {
            placementId: "14708379"
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562168",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5034562",
            network: "11455.1"
          }
        },
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "cbVwWml6Sr6AuJaKkGJozW",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "ce7d32e4c68cc4ed5a35"
          }
        }
      ]
    },
    {
      code: codes.sticky,
      path: paths.sticky,
      sizes: [[320, 50], [320, 100]],
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "dgjigml6Sr6ykzaKkv7mNO",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "6f91b9073c0f40854c9d"
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
        /*{
          bidder: "ix",
          params: {
            siteId: "334668",
            size: [300, 250]
          }
        },*/
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "cjTHCql6Sr6ykzaKkv7mNO",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "d2c77d1d830a95608411"
          }
        }
      ]
    },

    // Because the previous ad unit is desktop and mobile at 300x250 but this one is mobile only, we need to split up this ad unit into two, otherwise it has no way to know that the 300x250 is mobile only. Then set minViewportWidth and maxViewportWidth to be adjacent, so only one of these is ever used
    {
      code: codes.tower,
      path: paths.tower,
      sizes: [[160, 600], [300, 600]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        /*{
          bidder: "ix",
          params: {
            siteId: "334669",
            size: [160, 600]
          }
        },*/
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "cJAPlUl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "b2ce9ba6302152dcef29"
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
        /*{
          bidder: "ix",
          params: {
            siteId: "334671",
            size: [300, 250]
          }
        },*/
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
        },
        /*{
           bidder: "33across",
           params: {
             siteId: "crL_bil6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },*/
        {
          bidder: "sonobi",
          params: {
            placement_id: "706afdc18e921796f7f3"
          }
        }
      ]
    }
  ];
};

const adUnits = [
  ...getAdUnits("home"),
  ...getAdUnits("interior"),
  ...getAdUnits("news"),
  {
    code: "div-gpt-ad-1516424492164-0",
    path: "/21680050242/slam_hp_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-1",
    path: "/21680050242/slam_hp_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-6",
    path: "/21680050242/slam_interior_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-7",
    path: "/21680050242/slam_interior_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-19",
    path: "/21680050242/slam_news_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-20",
    path: "/21680050242/slam_news_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-25",
    path: "/21680050242/slam_test_1x1",
    sizes: [[1, 1]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  },
  {
    code: "div-gpt-ad-1516424492164-26",
    path: "/21680050242/slam_test_2x2",
    sizes: [[2, 2]],
    labelAny: ["mobile", "desktop", "max-desktop"]
  }
];

const dfpCurrency = "USD";

const priceGranularity = "high";

const publisherName = "SLAM";

const pubwiseSite = undefined;

const sizeConfig = [
  {
    mediaQuery: "(min-width: 883px)",
    sizesSupported: [[728, 90], [970, 250], [160, 600], [300, 600], [300, 250]],
    labels: ["max-desktop"]
  },
  {
    mediaQuery: "(min-width: 641px) and (max-width: 882px)",
    sizesSupported: [[728, 90], [160, 600], [300, 600], [300, 250]],
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

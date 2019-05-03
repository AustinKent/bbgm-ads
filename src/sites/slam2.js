const getAdUnits = type => {
  const codePrefix = "div-gpt-ad-1516424492164-";
  const pathPrefix = `/21680050242/slam_${type}_`;

  let codes;
  if (type === "online") {
    codes = {
      1: "11",
      2: "12",
      3: "13",
      4: "14",
      5: "15",
      6: "16",
      7: "17",
      8: "18",
      9: "19"
    };
  } else if (type === "newswire") {
    codes = {
      1: "21",
      2: "22",
      3: "23",
      4: "24",
      5: "25",
      6: "26",
      7: "27",
      8: "28",
      9: "29"
    };
  } else {
    throw new Error(`Invalid type: "${type}"`);
  }

  return [
    // In theory this ad unit should be able to be configured just once, but for some reason I don't consistently get the size mapping (for mobile and desktop) to work, ugh.
    {
      code: `${codePrefix}${codes[1]}`,
      path: `${pathPrefix}1`,
      sizes: [[970, 250], [970, 90], [728, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
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
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[1]}`,
      path: `${pathPrefix}1`,
      sizes: [[320, 50], [320, 100]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693287"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[2]}`,
      path: `${pathPrefix}2`,
      sizes: [[728, 90], [300, 250]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693282"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[2]}`,
      path: `${pathPrefix}2`,
      sizes: [[320, 50], [320, 100]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15382442"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[3]}`,
      path: `${pathPrefix}3`,
      sizes: [[300, 600], [160, 600], [300, 250]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693285"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[3]}`,
      path: `${pathPrefix}3`,
      sizes: [[320, 50], [320, 100]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15904670"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[4]}`,
      path: `${pathPrefix}4`,
      sizes: [[300, 600], [160, 600], [300, 250]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15904673"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[4]}`,
      path: `${pathPrefix}4`,
      sizes: [[320, 50], [320, 100], [300, 250]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15904676"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[5]}`,
      path: `${pathPrefix}5`,
      sizes: [[728, 90], [300, 250]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693289"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[5]}`,
      path: `${pathPrefix}5`,
      sizes: [[320, 50], [320, 100], [300, 250]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693283"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[6]}`,
      path: `${pathPrefix}6`,
      sizes: [[320, 50], [320, 100], [300, 250]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "14693291"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[7]}`,
      path: `${pathPrefix}7`,
      sizes: [[728, 90], [970, 90]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15382505"
          }
        },
        {
          bidder: "appnexus",
          labelAny: ["max-desktop"],
          params: {
            placementId: "15712103"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334667",
            size: [728, 90]
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
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "5acbbc1c4351c23f0ffc"
           }
         }*/
      ]
    },
    {
      code: `${codePrefix}${codes[7]}`,
      path: `${pathPrefix}7`,
      sizes: [[320, 50], [320, 100]],
      maxViewportWidth: 640,
      labelAny: ["mobile"],
      bids: [
        {
          bidder: "conversant",
          params: {
            site_id: "122929",
            secure: 1
          }
        },
        {
          bidder: "appnexus",
          params: {
            placementId: "15904851"
          }
        },
        /*{
          bidder: "ix",
          params: {
            siteId: "334670",
            size: [320, 50]
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
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         },
         {
           bidder: "sonobi",
           params: {
             placement_id: "97bd12da72d40df45313"
           }
         }*/
      ]
    },

    {
      code: `${codePrefix}${codes[8]}`,
      path: `${pathPrefix}8`,
      sizes: [[1, 1]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"]
    },
    {
      code: `${codePrefix}${codes[8]}`,
      path: `${pathPrefix}8`,
      sizes: [[1, 1]],
      maxViewportWidth: 640,
      labelAny: ["mobile"]
    },

    {
      code: `${codePrefix}${codes[9]}`,
      path: `${pathPrefix}9`,
      sizes: [[2, 2]],
      minViewportWidth: 641,
      labelAny: ["desktop", "max-desktop"]
    },
    {
      code: `${codePrefix}${codes[9]}`,
      path: `${pathPrefix}9`,
      sizes: [[2, 2]],
      maxViewportWidth: 640,
      labelAny: ["mobile"]
    }
  ];
};

const adUnits = [...getAdUnits("online"), ...getAdUnits("newswire")];

const dfpCurrency = "USD";

const priceGranularity = "high";

const publisherName = "SLAM";

const pubwiseSite = undefined;

const sizeConfig = [
  {
    mediaQuery: "(min-width: 883px)",
    sizesSupported: [
      [728, 90],
      [970, 250],
      [970, 90],
      [160, 600],
      [300, 600],
      [300, 250],
      [1, 1],
      [2, 2]
    ],
    labels: ["max-desktop"]
  },
  {
    mediaQuery: "(min-width: 641px) and (max-width: 882px)",
    sizesSupported: [
      [728, 90],
      [160, 600],
      [300, 600],
      [300, 250],
      [1, 1],
      [2, 2]
    ],
    labels: ["desktop"]
  },
  {
    mediaQuery: "(max-width: 640px)",
    sizesSupported: [[320, 100], [320, 50], [300, 250], [1, 1], [2, 2]],
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

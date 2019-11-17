const codePrefix = "div-gpt-ad-1516424492164-";
const getAdUnits = type => {
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
        {
          bidder: "sovrn",
          labelAny: ["max-desktop"],
          params: { tagid: "632141" }
        },
        {
          bidder: "sovrn",
          labelAny: ["max-desktop"],
          params: { tagid: "632143" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "597371" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "30fd88b63fd862384a65"
          }
        },
        {
          bidder: "sonobi",
          labelAny: ["max-desktop"],
          params: {
            placement_id: "cb5107b0bd29c8ae61e4"
          }
        },
        {
          bidder: "sonobi",
          labelAny: ["max-desktop"],
          params: {
            placement_id: "316d59f32afec78861cb"
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
          labelAny: ["max-desktop"],
          params: {
            placement: "5034560",
            network: "11455.1"
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
          bidder: "aol",
          labelAny: ["max-desktop"],
          params: {
            placement: "5034562",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408544",
            size: [728, 90]
          }
        },
        {
          bidder: "ix",
          labelAny: ["max-desktop"],
          params: {
            siteId: "408550",
            size: [970, 250]
          }
        },
        {
          bidder: "ix",
          labelAny: ["max-desktop"],
          params: {
            siteId: "408548",
            size: [970, 90]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "sM8A"
          }
        },
        {
          bidder: "aardvark",
          labelAny: ["max-desktop"],
          params: {
            ai: "uFC5",
            sc: "aAhy"
          }
        },
        {
          bidder: "aardvark",
          labelAny: ["max-desktop"],
          params: {
            ai: "uFC5",
            sc: "A2Bu"
          }
        }
        /*
        {
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
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
        {
          bidder: "sovrn",
          params: { tagid: "597376" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "52450873b48eeebe52e1"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "e4daae63840f9746d7e5"
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
            placement: "5072076",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5072077",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408565",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408558",
            size: [320, 100]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "fe8A"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "67hj"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "597373" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "597372" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "03e24de0e81082d815fa"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "fdf975e43b93977772f7"
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
        {
          bidder: "aol",
          params: {
            placement: "5134692",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408551",
            size: [300, 250]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408545",
            size: [728, 90]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "3jj2"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "VMYq"
          }
        }
        /* {
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "603724" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "51eb87631bd1673047a1"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "805d36447e0c198ec754"
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
            placement: "5072075",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134700",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408566",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408559",
            size: [320, 100]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "Zlhg"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "aG7g"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "597374" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "597377" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632169" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "1875c4772917ea4b427f"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "312a8daec74b24f4da9a"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "c413e7d50b8d4e9cad06"
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
            placement: "5134694",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134686",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134685",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408572",
            size: [160, 600]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408574",
            size: [300, 600]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408552",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "i8Fz"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "N5Wx"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "misS"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632162" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "1fa79c6444a95cb3306e"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "2c3afe74fda62cfdd06b"
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
            placement: "5134704",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134695",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408567",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408560",
            size: [320, 100]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "kjmy"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "ts4q"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "597375" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632167" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632170" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "14f6918fe6531447b3ac"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "437d6c4055e311db94e0"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "00739c00e73f5d469acb"
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
            placement: "5134691",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134688",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134693",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408573",
            size: [160, 600]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408575",
            size: [300, 600]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408553",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "VWHj"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "y5GV"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "QO8q"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632146" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632163" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "86a4f5646fdf218319bd"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "386da7ac9ecb6204f58b"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "f7dac5f442802aa70b55"
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
            placement: "5134698",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134702",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134699",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408568",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408561",
            size: [320, 100]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408554",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "2kp5"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "me39"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "EGYb"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632147" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "603725" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "0d216f85646bc292e384"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "ffdc2bf90777dacbefb9"
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562172",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134703",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134687",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408546",
            size: [728, 90]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408555",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "uWgx"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "ibKX"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         },
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632148" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632164" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "29c10e8493b6c1c491b4"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "31520037e81e0926c710"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "52ddf28c0996fc25eb24"
          }
        },
        {
          bidder: "openx",
          params: {
            unit: "540562172",
            delDomain: "ortolani-d.openx.net"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134701",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134697",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134696",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408569",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408562",
            size: [320, 100]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408556",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "ZBB4"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "A4hN"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "zBnu"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632165" }
        },
        {
          bidder: "sovrn",
          params: { tagid: "632149" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "e8cc808f431367412c55"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "3c54391ea508911d33b2"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "689bdf8b6d4c29eea9d4"
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
            placement: "5134707",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134708",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134709",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408570",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408563",
            size: [320, 100]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408557",
            size: [300, 250]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "T9SK"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "j9vl"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "JM9M"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632139" }
        },
        {
          bidder: "sovrn",
          labelAny: ["max-desktop"],
          params: { tagid: "632142" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "f9549481d34d96215229"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "2212c1cdec85c7ec2c93"
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
            placement: "5134689",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          labelAny: ["max-desktop"],
          params: {
            placement: "5134690",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408547",
            size: [728, 90]
          }
        },
        {
          bidder: "ix",
          labelAny: ["max-desktop"],
          params: {
            siteId: "408549",
            size: [970, 90]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "SChu"
          }
        },
        {
          bidder: "aardvark",
          labelAny: ["max-desktop"],
          params: {
            ai: "uFC5",
            sc: "vd0e"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708373"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "b6k38Kl6Sr6ATXaKkGJozW",
             productId: "siab"
           }
         }
         */
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
        {
          bidder: "sovrn",
          params: { tagid: "632166" }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "26f33c72502fe8db884f"
          }
        },
        {
          bidder: "sonobi",
          params: {
            placement_id: "1078f818be7fe4e48e28"
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
            placement: "5134705",
            network: "11455.1"
          }
        },
        {
          bidder: "aol",
          params: {
            placement: "5134706",
            network: "11455.1"
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408571",
            size: [320, 50]
          }
        },
        {
          bidder: "ix",
          params: {
            siteId: "408564",
            size: [320, 100]
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "CkGp"
          }
        },
        {
          bidder: "aardvark",
          params: {
            ai: "uFC5",
            sc: "R7Kr"
          }
        }
        /*{
          bidder: "districtm",
          params: {
            placementId: "14708378"
          }
        },
         {
           bidder: "33across",
           params: {
             siteId: "c64Z4Ml6Sr6ykiaKlId8sQ",
             productId: "siab"
           }
         }
         */
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

const adUnits = [
  ...getAdUnits("online"),
  ...getAdUnits("newswire"),

  // Special - same ad unit on both sites
  {
    code: `${codePrefix}31`,
    path: "/21680050242/slam_scoreboard_1",
    sizes: [[728, 90], [468, 60]],
    minViewportWidth: 641,
    labelAny: ["desktop", "max-desktop"],
    bids: [
      {
          bidder: "appnexus",
          params: {
            placementId: "17829474"
          }
        }
    ]
  },
  {
    code: `${codePrefix}31`,
    path: "/21680050242/slam_scoreboard_1",
    sizes: [[320, 50], [320, 100]],
    maxViewportWidth: 640,
    labelAny: ["mobile"],
    bids: [
          {
          bidder: "appnexus",
          params: {
            placementId: "17829473"
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
    mediaQuery: "(min-width: 883px)",
    sizesSupported: [
      [728, 90],
      [970, 250],
      [970, 90],
      [468, 60],
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
      [468, 60],
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

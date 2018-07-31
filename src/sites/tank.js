const adUnits = [
  {
    code: "tank-mobile1",
    path: "/42283434/2018-Tank-Mobile1",
    sizes: [[320, 50]],
    maxViewportWidth: 700,
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "288437",
          size: [320, 50]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "13753769"
        }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "13659327"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "119999",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "320X50",
          cp: 558539,
          ct: 652964
        }
      }
    ]
  },
  {
    code: "tank-mobile3",
    path: "/42283434/2018-Tank-Mobile3",
    sizes: [[320, 50]],
    maxViewportWidth: 700,
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "288438",
          size: [320, 50]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "13753774"
        }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "13659328"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "119999",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "320X50",
          cp: 558539,
          ct: 652966
        }
      }
    ]
  },
  {
    code: "tank-billboard1",
    path: "/42283434/2018-Tank-Billboard1",
    sizes: [[728, 90]],
    minViewportWidth: 701,
    maxViewportWidth: 1360,
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "288431",
          size: [728, 90]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "13753749"
        }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "13659306"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "119999",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "728X90",
          cp: 558539,
          ct: 652961
        }
      }
    ]
  },

  {
    code: "tank-skyscraper1",
    path: "/42283434/2018-Tank-Skyscraper1",
    sizes: [[160, 600]],
    minViewportWidth: 1361,
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "288435",
          size: [160, 600]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "13753756"
        }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "13659308"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "119999",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "160X600",
          cp: 558539,
          ct: 652962
        }
      }
    ]
  },
  {
    code: "tank-skyscraper2",
    path: "/42283434/2018-Tank-Skyscraper2",
    sizes: [[160, 600]],
    minViewportWidth: 1361,
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "288436",
          size: [160, 600]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "13753764"
        }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "13081453"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "119999",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "160X600",
          cp: 558539,
          ct: 652963
        }
      }
    ]
  }
];

const priceGranularity = "high";

export { adUnits, priceGranularity };
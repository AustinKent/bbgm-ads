const adUnits = [
  {
    code: "bbgm-ads-top",
    path: "/42283434/2018-ZenGM-Billboard1",
    sizes: [[728, 90]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteID: "259620",
          size: [728, 90]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12962305"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "556973" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "12964319"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "117853",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "728X90",
          cp: 558539,
          ct: 638480
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4801246",
          network: "10394.1"
        }
      }
    ]
  },
  {
    code: "bbgm-ads-bottom1",
    path: "/42283434/2018-ZenGM-Rectangle1",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteID: "259621",
          size: [300, 250]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12962306"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "556974" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "12964316"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "117853",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 638481
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4801244",
          network: "10394.1"
        }
      }
    ]
  },
  {
    code: "bbgm-ads-bottom2",
    path: "/42283434/2018-ZenGM-Rectangle2",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteID: "259622",
          size: [300, 250]
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12962307"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "556975" }
      },
      {
        bidder: "districtm",
        params: {
          placementId: "12964318"
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "117853",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 638482
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4801245",
          network: "10394.1"
        }
      }
    ]
  },
  {
    code: "bbgm-ads-oop",
    path: "/42283434/2018-BBGM-OOP",
    sizes: [[1, 1]]
  }
];

const priceGranularity = "high";

export { adUnits, priceGranularity };

const adUnits = [
  {
    code: "bbgm-ads-top",
    path: "/42283434/2018-ZenGM-Billboard1",
    sizes: [[728, 90]],
    bids: [
      {
        bidder: "indexExchange",
        params: {
          siteID: "259620",
          id: "04"
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
        bidder: "districtmDMX",
        params: {
          id: 201232
        }
      },
      /*{
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },*/
      {
        bidder: "pulsepoint",
        params: {
          cf: "728X90",
          cp: 558539,
          ct: 638480
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
        bidder: "indexExchange",
        params: {
          siteID: "259621",
          id: "05"
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
        bidder: "districtmDMX",
        params: {
          id: 201230
        }
      },
      /*{
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },*/
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 638481
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
        bidder: "indexExchange",
        params: {
          siteID: "259622",
          id: "06"
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
        bidder: "districtmDMX",
        params: {
          id: 201231
        }
      },
      /*{
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },*/
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 638482
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

const priceGranularity = "medium";

export { adUnits, priceGranularity };

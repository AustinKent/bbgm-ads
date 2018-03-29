const adUnits = [
  {
    code: "bbgm-ads-top",
    path: "/42283434/2018-BBGM-Billboard1",
    sizes: [[728, 90]],
    bids: [
      {
        bidder: "indexExchange",
        params: {
          siteID: "248523",
          id: "01"
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12941329"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "547545" }
      },
      {
        bidder: "districtmDMX",
        params: {
          id: 198708
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "728X90",
          cp: 558539,
          ct: 633385
        }
      }
    ]
  },
  {
    code: "bbgm-ads-bottom1",
    path: "/42283434/2018-BBGM-Rectangle1",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "indexExchange",
        params: {
          siteID: "248524",
          id: "02"
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12941330"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "547546" }
      },
      {
        bidder: "districtmDMX",
        params: {
          id: 198706
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 633386
        }
      }
    ]
  },
  {
    code: "bbgm-ads-bottom2",
    path: "/42283434/2018-BBGM-Rectangle2",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "indexExchange",
        params: {
          siteID: "248525",
          id: "03"
        }
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "12941331"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "547547" }
      },
      {
        bidder: "districtmDMX",
        params: {
          id: 198707
        }
      },
      {
        bidder: "conversant",
        params: {
          site_id: "116969",
          secure: 1
        }
      },
      {
        bidder: "pulsepoint",
        params: {
          cf: "300X250",
          cp: 558539,
          ct: 633387
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

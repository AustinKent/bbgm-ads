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
      },
      {
        bidder: "openx",
        params: {
          unit: "539662201",
          delDomain: "optimalmediagroup-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4731380",
          network: "10394.1"
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
      },
      {
        bidder: "openx",
        params: {
          unit: "539662199",
          delDomain: "optimalmediagroup-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4731386",
          network: "10394.1"
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
      },
      {
        bidder: "openx",
        params: {
          unit: "539662200",
          delDomain: "optimalmediagroup-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4731383",
          network: "10394.1"
        }
      }
    ]
  },
  {
    code: "bbgm-ads-skyscraper",
    path: "/42283434/2018-BBGM-Skyscraper1",
    sizes: [[160, 600]],
    bids: [
      /*{
        bidder: "indexExchange",
        params: {
          siteID: "248523",
          id: "01"
        }
      },*/
      {
        bidder: "appnexus",
        params: {
          placementId: "13350681"
        }
      },
      {
        bidder: "sovrn",
        params: { tagid: "566843" }
      },
      {
        bidder: "districtmDMX",
        params: {
          id: 214877
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
          cf: "160x600",
          cp: 558539,
          ct: 645417
        }
      }
      /*{
        bidder: "openx",
        params: {
          unit: "539662201",
          delDomain: "optimalmediagroup-d.openx.net"
        }
      },*/
      /*{
        bidder: "aol",
        params: {
          placement: "4731380",
          network: "10394.1"
        }
      }*/
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

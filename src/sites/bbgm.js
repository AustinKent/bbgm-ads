const adUnits = [
  {
    code: "bbgm-ads-top",
    path: "/42283434/2018-BBGM-Billboard1",
    sizes: [[728, 90]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "248523",
          size: [728, 90]
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
        bidder: "districtm",
        params: {
          placementId: "12861126"
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
          ct: 657114
        }
      }
      /*{
        bidder: "openx",
        params: {
          unit: "540271653",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4933983",
          network: "11455.1"
        }
      }*/
    ]
  },
  {
    code: "bbgm-ads-bottom1",
    path: "/42283434/2018-BBGM-Rectangle1",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "248524",
          size: [300, 250]
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
        bidder: "districtm",
        params: {
          placementId: "12861124"
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
          ct: 657115
        }
      }
      /*{
        bidder: "openx",
        params: {
          unit: "540271655",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4933982",
          network: "11455.1"
        }
      }*/
    ]
  },
  {
    code: "bbgm-ads-bottom2",
    path: "/42283434/2018-BBGM-Rectangle2",
    sizes: [[300, 250]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "248525",
          size: [300, 250]
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
        bidder: "districtm",
        params: {
          placementId: "12861125"
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
          ct: 657116
        }
      }
      /*{
        bidder: "openx",
        params: {
          unit: "540271656",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4933984",
          network: "11455.1"
        }
      }*/
    ]
  },
  {
    code: "bbgm-ads-skyscraper",
    path: "/42283434/2018-BBGM-Skyscraper1",
    sizes: [[160, 600]],
    bids: [
      {
        bidder: "ix",
        params: {
          siteId: "272588",
          size: [160, 600]
        }
      },
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
        bidder: "districtm",
        params: {
          placementId: "13350683"
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
          cf: "160X600",
          cp: 558539,
          ct: 657117
        }
      }
      /*{
        bidder: "openx",
        params: {
          unit: "540271658",
          delDomain: "ortolani-d.openx.net"
        }
      },
      {
        bidder: "aol",
        params: {
          placement: "4933985",
          network: "11455.1"
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

const pubwiseSite = undefined;

export { adUnits, priceGranularity, pubwiseSite };

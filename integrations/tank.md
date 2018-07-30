# Integration guide for Tankathon

## Load async bbgm-ads script

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/tank.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

## Set up banner ad wrappers

Create empty divs to hold the ads.

    <div id="tank-mobile1"></div>

    <div id="tank-mobile3"></div>

    <div id="tank-billboard1"></div>

    <div id="tank-skyscraper1"></div>

    <div id="tank-skyscraper2"></div>

## Display ads

Run this code to display ads in your divs. This must come after all your last ad div is rendered.

Use this code for mobile:

    bbgmAds.cmd.push(function () {
      bbgmAds.init(["tank-mobile1", "tank-mobile3", "tank-billboard1", "tank-skyscraper1", "tank-skyscraper2"]);
    });

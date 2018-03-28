# Integration guide for nba-sws

## Load async bbgm-ads script

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/nba-sws.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

## Set up banner ad wrappers

Create empty divs to hold the ads.

    <div id="sws-mobile1"></div>

    <div id="sws-mobile2"></div>

    <div id="sws-mobile3"></div>

    <div id="sws-mobile4"></div>

    <div id="sws-billboard1"></div>

    <div id="sws-billboard2"></div>

    <div id="sws-rectangle1"></div>

    <div id="sws-rectangle2"></div>

## Display ads

Run this code to display ads in your divs. This must come after all your last ad div. Since you are detecting mobile/non-mobile already, you can do something similar here.

Use this code for mobile:

    <script type="text/javascript">
      bbgmAds.cmd.push(function () {
        bbgmAds.init(["sws-mobile1", "sws-mobile2", "sws-mobile3", "sws-mobile4"]);
      });
    </script>

And this for non-mobile:

    <script type="text/javascript">
      bbgmAds.cmd.push(function () {
        bbgmAds.init(["sws-billboard1", "sws-billboard2", "sws-rectangle1", "sws-rectangle2"]);
      });
    </script>

## ads.txt

I assume you already have ads.txt handled :)

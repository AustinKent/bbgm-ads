# Integration guide for SLAM

## Load async bbgm-ads script

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/slam.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

## Set up banner ad wrappers

Create empty divs to hold the ads.

728x90 on desktop, 320x50 on mobile:

    <div id="div-gpt-ad-1516424492164-4"></div>

300x250 on desktop and mobile:

    <div id="div-gpt-ad-1516424492164-2"></div>

160x600 on desktop, 300x250 on mobile:

    <div id="div-gpt-ad-1516424492164-5"></div>

Pixels:

    <div id="div-gpt-ad-1516424492164-0" style="height:1px; width:1px;position: absolute;"></div>
    <div id="div-gpt-ad-1516424492164-1" style="height:2px; width:2px;position: absolute;"></div>

These are already on your website currently, so really just delete your existing code that you have interacting with them and let our wrapper handle it. Any existing stuff involving `googletag` and `pbjs` - delete it!

## Display ads

Run this JavaScript code to display ads in your divs. This must come after all your last ad div is rendered, for instance at the bottom of the HTML page.

    bbgmAds.cmd.push(function () {
      bbgmAds.init(["div-gpt-ad-1516424492164-0", "div-gpt-ad-1516424492164-1", "div-gpt-ad-1516424492164-2", "div-gpt-ad-1516424492164-4", "div-gpt-ad-1516424492164-5"]);
    });

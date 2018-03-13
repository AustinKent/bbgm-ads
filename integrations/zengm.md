# Integration guide for Zen GM

## Load async bbgm-ads script

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/zengm.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
      });
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

## Set up banner ad wrappers

Find this in index.html:

          <div id="content" data-id-loading="" data-id-loaded="">
            <h1>Loading...</h1>
            <p>This should only take a couple seconds on a fast connection.</p>
          </div>

          <p class="clearfix"></p>
          <hr>

Replace it with this:

          <div id="bbgm-ads-top" style="text-align: center; min-height: 95px; margin-top: 1em"></div>

          <div id="content" data-id-loading="" data-id-loaded="" style="min-height: 300px">
            <h1>Loading...</h1>
            <p>This should only take a couple seconds on a fast connection.</p>
          </div>

          <p class="clearfix"></p>

          <div style="position: relative">
            <div id="bbgm-ads-bottom1" style="text-align: center; height: 250px; position: absolute; top: 5px; left: 0"></div>
            <div id="bbgm-ads-logo" style="height: 250px; margin: 5px 310px 0 310px; align-items: center; display: flex; justify-content: center">
            </div>
            <div id="bbgm-ads-bottom2" style="text-align: center; height: 250px; position: absolute; top: 5px; right: 0"></div>
          </div>

          <div class="clearfix"></div>
          <hr>

## Display ads

In app.js, delete this from the top:

    // Make sure I never accidentally use native promises, because that could fuck with error handling
    (function () {
        "use strict";
        window.Promise = function () { throw new Error("USE BLUEBIRD!"); };
        window.Promise.all = function () { throw new Error("USE BLUEBIRD!"); };
        window.Promise.map = function () { throw new Error("USE BLUEBIRD!"); };
        window.Promise.try = function () { throw new Error("USE BLUEBIRD!"); };
    }());

Then put this after `app.start();` to display the ads on the initial page load, except on mobile or iOS:

            var hideAds = false;

            // Hide ads on mobile, mobile is shitty enough already
            if (window.screen && window.screen.width < 768) {
                hideAds = true;
            }

            // Hide ads on iOS, at least until https://www.wired.com/story/pop-up-mobile-ads-surge-as-sites-scramble-to-stop-them/ is resolved
            // https://stackoverflow.com/a/9039885/786644
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                hideAds = true;
            }

            if (hideAds) {
                var idsToHide = ["bbgm-ads-top", "bbgm-ads-bottom1", "bbgm-ads-logo", "bbgm-ads-bottom2"];
                for (var i = 0; i < idsToHide.length; i++) {
                    const div = document.getElementById(idsToHide[i]);
                    if (div) {
                        div.style.display = "none";
                    }
                }
            } else {
                bbgmAds.cmd.push(function () {
                    bbgmAds.init(["bbgm-ads-top", "bbgm-ads-bottom1", "bbgm-ads-bottom2"]);
                });
            }

## Refresh ads

In the `track` function of davis.google_analytics.js, put this:

          bbgmAds.cmd.push(function () {
            bbgmAds.refresh();
          });

That will refresh the ads every click.

## ads.txt

(This is already done, I'm just putting it here for completeness.)

Copy this text to https://zengm.com/ads.txt

    #AdSense
    google.com, pub-4363509763909140, DIRECT, f08c47fec0942fa0

    #AppNexus
    appnexus.com, 9247, DIRECT

    #Conversant
    conversantmedia.com, 33096, DIRECT, 03113cd04947736d
    appnexus.com, 4052, RESELLER

    #DistrictM
    districtm.io, 101247, DIRECT
    appnexus.com, 1908, RESELLER, f5ab79cb980f11d1
    google.com, pub-9685734445476814, RESELLER, f08c47fec0942fa0

    #Index
    indexexchange.com, 183743, DIRECT

    #PulsePoint
    contextweb.com, 558539, DIRECT

    #Sovrn
    sovrn.com, 258411, DIRECT, fafdf38b16bf6b2b
    lijit.com, 258411, DIRECT, fafdf38b16bf6b2b
    gumgum.com, 11645, RESELLER, ffdef49475d318a9
    openx.com, 537120960, RESELLER
    openx.com, 83499, RESELLER
    openx.com, 538959099, RESELLER
    pubmatic.com, 137711, RESELLER
    pubmatic.com, 156212, RESELLER
    pubmatic.com, 62483, RESELLER

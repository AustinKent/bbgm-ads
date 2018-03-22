# Integration guide for Basketball GM

## Load async bbgm-ads script

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/bbgm.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

## Set up banner ad wrappers

Create divs to hold the ads.

    <div id="bbgm-ads-top" style="display: none; text-align: center; min-height: 95px; margin-top: 1em"></div>
    <div style="position: relative">
      <div id="bbgm-ads-bottom1" style="display: none; text-align: center; height: 250px; position: absolute; top: 5px; left: 0"></div>
      <div style="display: none; height: 250px; margin: 5px 310px 0 310px; align-items: center; justify-content: center">
        <img src="https://basketball-gm.com/files/logo.png" style="max-height: 100%; max-width: 100%">
      </div>
      <div id="bbgm-ads-bottom2" style="display: none; text-align: center; height: 250px; position: absolute; top: 5px; right: 0"></div>
    </div>

If any ad has `display: none`, that will be removed by `bbgmAds.init` below. This is useful if you don't want to display these ads for some users, like if you have an ad-free subscription service. If you never call `bbgmAds.init` for a user, `display: none` will never be removed and they will not see these divs at all.

**These divs can be dynamically created by your JavaScript code, but they need to be created before `bbgmAds.init` is called, and after that they need to remain unaltered in the DOM.** In React, this can be done by putting them in components with `shouldComponentUpdate`s that always return false. But if you can put them right in your raw HTML, that's easier.

## Display ads

Run this code to display ads in your divs. This assumes `window.googletag` and `window.bbgmAds` are present, so it must run after all the above stuff.

    bbgmAds.cmd.push(() => {
      // This initializes the ads and displays the initial banners. It returns a promise
      // which resolves when it's done.
      bbgmAds.init(["bbgm-ads-top", "bbgm-ads-bottom1", "bbgm-ads-bottom2"])
        .then(() => {
          // Show the logo too (it's not an ad so it's not managed by bbgmAds)
          const logo = document.getElementById("bbgm-ads-logo");
          if (logo) {
              logo.style.display = "flex";
          }
        });
    });

`bbgmAds.init` returns a promise that resolves when it's done, in case you want to do something after.

As mentioned above, if there are some users you want to have no ads, just don't call `bbgmAds.init` for those users.

## Refresh ads

To refresh banner ads (such as on subsequent page loads in a single page app):

    bbgmAds.cmd.push(() => {
      bbgmAds.refresh();
    });

`bbgmAds.refresh` will do nothing unless `bbgmAds.init` has finished, so don't worry about keeping track of that.

Visible ads will automatically refresh every 60 seconds, so there is no need for you to trigger ad refreshes based on a time interval.

## ads.txt

Copy this text to https://basketball-gm.com/ads.txt

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

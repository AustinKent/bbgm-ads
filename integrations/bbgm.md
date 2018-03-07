# Integration guide for Basketball GM

Put this in your `<head>`:

    <script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
    <script async="async" src="https://basketball-gm.com/bbgm-ads/bbgm.js"></script>
    <script type="text/javascript">
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
      });
      var bbgmAds = bbgmAds || {};
      bbgmAds.cmd = bbgmAds.cmd || [];
    </script>

Create divs to hold the ads.

    <div id="bbgm-ads-top" style="display: none; text-align: center; min-height: 95px; margin-top: 1em"></div>
    <div style="position: relative">
      <div id="bbgm-ads-bottom1" style="display: none; text-align: center; height: 250px; position: absolute; top: 5px; left: 0"></div>
      <div style="display: none; height: 250px; margin: 5px 310px 0 310px; display:flex; align-items: center; justify-content: center">
        <img src="https://basketball-gm.com/files/logo.png" style="max-height: 100%; max-width: 100%">
      </div>
      <div id="bbgm-ads-bottom2" style="display: none; text-align: center; height: 250px; position: absolute; top: 5px; right: 0"></div>
    </div>

Each div whose id starts with "bbgm-ads" corresponds to one of the entries in `units` below.

`display: none` is set initially to hide ads until initialization, which is used in BBGM to optimize UX for BBGM Gold members. Upon initialization, `display: none` is removed. However if you don't have any ad-free users, then get rid of the `display: none` stuff.

**These divs can be dynamically created by your JavaScript code, but they need to be created before `bbgmAds.init` is called, and after that they need to remain unaltered in the DOM.** In React, this can be done by putting them in components with `shouldComponentUpdate`s that always return false. But if you can put them right in your raw HTML, that's easier.

Initialize bbgm-ads (this assumes `window.googletag` and `bbgmAds` are present, so it must run after all the above stuff):

    bbgmAds.cmd.push(() => {
        // This initializes the ads and displays the initial banners. It returns a promise
        // which resolves when it's done.
        bbgmAds.init()
          .then(() => {
            // Show the logo too (it's not an ad so it's not managed by bbgmAds)
            const logo = document.getElementById("bbgm-ads-logo");
            if (logo) {
                logo.style.display = "block";
            }
          });
    });

To refresh banner ads (such as on subsequent page loads):

    bbgmAds.cmd.push(() => {
      bbgmAds.refresh
    });

This will do nothing if ads are not yet initialized. This means if you have some users you want to have no ads, just don't call `bbgmAds.init` for those users.

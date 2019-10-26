# bbgm-ads

You shouldn't use this. I'm just distributing some internal code via GitHub because why not. Feel free to take some ideas from here, though.

## Install

    $ yarn install

## Build bundles for sites

Different sites can have different ad units (both using Prebid and not using Prebid), bidders, and granularity. This is specified for each site in src/sites. Each site will get a unique, streamlined JS file to include based on that site's particular configuration. To build all of these JS bundles, run

    $ yarn run build

This produces a bundle for each site in the dist folder.

## Adding a new site

Put all the configuration in a new file in src/sites. Run

    $ yarn run build

and observe a new file in the dist folder.

Write an integration guide for the site and put it in the integrations folder.

### Site configuration file format

Each file in src/sites returns an array of "ad units", which are JS objects with the following properties:

`code: string`: id of the div that will contain the ad

`path: string`: Ad unit path, from DFP, like "/42283434/2018-BBGM-Billboard1"

`sizes: Array<[number, number]>`: Sizes for the unit - actually can be [any valid `googletag.GeneralSize`](https://developers.google.com/doubleclick-gpt/reference#googletag.GeneralSize)

`bids?: Array<Bid>`: (Optional, only if using Prebid for this ad unit) - see [the Prebid documentation](http://prebid.org/dev-docs/adunit-reference.html#adunitbids)

## API

### `bbgmAds.cmd(func: () => void): void`

`bbgmAds` is usually loaded from an asynchronous script, which is good because it will not slow down your site or block rendering, but is bad because you can never be sure if it is actually loaded.

To work around this problem, you can use `bbgmAds.cmd` to queue up an interaction with `bbgmAds`:

    bbgmAds.cmd.push(function () {
        bbgmAds.refresh();
    });

If `bbgmAds` is not loaded yet, then `bbgmAds.cmd` is a normal array that will be processed after it loads. If it is loaded, then it will immediately (but asynchronously) run the callback function.

This is very similar to [`googletag.cmd` from the Google Publisher Tag](https://developers.google.com/doubleclick-gpt/reference#googletag.cmd).

### `bbgmAds.init(codes: string[], codesLazy?: string[]): Promise<boolean>`

This function sets up the ad units and displays the initial ads. `codes` is an array of strings. Its values are the ids of the div elements that will contain ads.

The values in `codes` need to correspond to codes in the site configuration (src/adUnits/\*.js). If there are extra values in `codes` that do not appear in the site configuration, no ads will be displayed in those divs and a warning will be logged on the console. However it is perfectly fine for `codes` to be only a subset of the codes in the site configuration, such as if different pages display different ads, you are doing A/B testing, etc.

The second optional argument, `codesLazy` is the same as the first argument except it is for ad units that should not be rendered immediately. They will only be rendered on a subsequent call to `bbgmAds.refresh`.

The return value is a promise that resolves to a boolean. It will resolve to `true` if everything worked normally. It will resolve to `false` when it is already initialized, such as if you erroneously call `bbgmAds.init` multiple times. Nothing bad happens in that case, it just does nothing, so you can probably ignore the return value.

When `bbgm.init` completes, the ads will be set to refresh every 60 seconds as long as they are visible (see `bbgmAds.refresh`).

### `bbgmAds.refresh(codes?: string[], onlyInViewport?: boolean): Promise<boolean>`

This function refreshes the displayed ads. For example, this is very useful if you have a single page app. You can call `bbgmAds.refresh()` every time a user navigates to a new page.

`codes` is an optional paramter. Similar to the arguments to `bbgmAds.init`, it is a list of div ids for the ad units you want to refresh. When not supplied, all active ad units (i.e. the ones initially activated in `bbgmAds.init`, and the lazy ones that have already been activated) will be refreshed. When it is supplied, then only that subset of ads will be refreshed.

This is also how you show an ad specified in `codesLazy` above. For example:

    bbgmAds.cmd.push(function () {
        // Initialization
        bbgmAds.init(["regular-ad-1", "regular-ad-2"], ["lazy-ad"]);

        // Later, when you want to show your lazy ad
        bbgmAds.refresh(["lazy-ad"]);
    });

`onlyInViewport` is an optional boolean parameter determining whether all ads will be refreshed or only ads that are currently on the screen. The default value is `false`, which will refresh all ads.

In total, there are several reasons why an ad will might not refresh after you call `bbgmAds.refresh`:

1. If you manually specify `codes` and the ad unit is not included.

2. If `onlyInViewport` is `true` and the ad is not in the viewport.

3. If there is `style="display: none"` on an ad div, it won't be refreshed even if `onlyInViewport` is `false`. You can use this to quickly enable/disable individual ads ads.

4. If it is under one second since the time it was refreshed, an ad unit will not be refreshed.

The return value is a promise that resolves to a boolean. Similar to the return value of `bbgmAds.init`, it returns `true` if everything worked normally and `false` if the refresh was skipped because `bbgmAds.init` has not yet completed.

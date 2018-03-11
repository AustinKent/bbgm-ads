# bbgm-ads

You shouldn't use this. I'm just distributing some internal code via GitHub because why not. Feel free to take some ideas from here, though.

## Use

    $ yarn install
    $ yarn run update-prebid
    $ yarn run build

## Updating Prebid.js configuration

Edit scripts/update-prebid.sh and run

    $ yarn run update-prebid

Currently one prebid.js bundle is used for every site. If some sites have very different bidders, this should probably be changed to make it site specific.

## Adding a new site

Put all the configuration in a new file in src/sites. Add the site to scripts/build.js. Run

    $ yarn run build

and observe a new file in the dist folder.

Write an integration guide for the site and put it in the integrations folder.

## API

### `bbgmAds.cmd(func: () => void): void`

`bbgmAds` is usually loaded from an asynchronous script, which is good because it will not slow down your site or block rendering, but is bad because you can never be sure if it is actually loaded.

To work around this problem, you can use `bbgmAds.cmd` to queue up an interaction with `bbgmAds`:

    bbgmAds.cmd.push(() => {
        bbgmAds.refresh();
    });

If `bbgmAds` is not loaded yet, then `bbgmAds.cmd` is a normal array that will be processed after it loads. If it is loaded, then it will immediately (but asynchronously) run the callback function.

This is very similar to [`googletag.cmd` from the Google Publisher Tag](https://developers.google.com/doubleclick-gpt/reference#googletag.cmd).

### `bbgmAds.init(codes: string[]): Promise<boolean>`

This function sets up the ad units and displays the initial ads. `codes` is an array of strings. Its values are the ids of the div elements that will contain ads.

The values in `codes` need to correspond to codes in the site configuration (src/adUnits/*.js). If there are extra values in `codes` that do not appear in the site configuration, no ads will be displayed in those divs and a warning will be logged on the console. However it is perfectly fine for `codes` to be only a subset of the codes in the site configuration, such as if different pages display different ads, you are doing A/B testing, etc.

If any of the divs from `codes` have `display: none` in their CSS, it will be changed to `display: block`. This is useful if you want to hide your ads from premium subscribers: make your ad units `display: none`, never call `bbgmAds.init` for those users, and they will never see any ads.

The return value is a promise that resolves to a boolean. It will resolve to `true` if everything worked normally. It will resolve to `false` when it is already initialized, such as if you erroneously call `bbgmAds.init` multiple times. Nothing bad happens in that case, it just does nothing, so you can probably ignore the return value.

When `bbgm.init` completes, the ads will be set to refresh every 60 seconds as long as they are visible (see `bbgmAds.refresh`).

### `bbgmAds.refresh(onlyInViewport: boolean = false): Promise<boolean>`

This function refreshes the displayed ads. For example, this is very useful if you have a single page app. You can call `bbgmAds.refresh` every time a user navigates to a new page.

`onlyInViewport` is an optional boolean parameter determining whether all ads will be refreshed or only ads that are currently on the screen. The default value is `false`, which will refresh all ads.

The return value is a promise that resolves to a boolean. Similar to the return value of `bbgmAds.init`, it returns `true` if everything worked normally and `false` if `bbgmAds.init` has not yet completed. Nothing bad happens in that case. `bbgmAds.refresh` just does nothing if `bbgmAds.init` is not complete, so you can probably ignore the return value.

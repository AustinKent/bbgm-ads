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

Put all the ad units in src/adUnits.js. Add the site to scripts/build.js. Run

    $ yarn run build

and observe a new file in the dist folder.

Write an integration guide for the site and put it in the integrations folder.

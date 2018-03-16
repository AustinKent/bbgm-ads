const fs = require("fs");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const replace = require("rollup-plugin-replace");
const uglify = require("rollup-plugin-uglify");
const buildPrebid = require("./build-prebid");

let sites = fs.readdirSync("src/sites").map(site => site.replace(".js", ""));

// Support calling like `yarn run build foo` to only build for the foo site
if (process.argv.length > 2) {
  sites = process.argv.slice(2);
}

const getBidders = async site => {
  // Ugh, need to transpile ES module so it can be required here in Node
  const bundle = await rollup.rollup({
    input: `src/sites/${site}.js`
  });
  await bundle.write({
    file: `temp/${site}.js`,
    format: "cjs"
  });

  const { adUnits } = require(`../../temp/${site}`);

  const bidders = new Set();
  for (const adUnit of adUnits) {
    if (adUnit.bids) {
      for (const bid of adUnit.bids) {
        bidders.add(bid.bidder);
      }
    }
  }
  const array = Array.from(bidders);

  return array
    .map(bidder => `${bidder}BidAdapter`)
    .sort()
    .join(",");
};

(async () => {
  let bidders = "";

  for (const site of sites) {
    const prevBidders = bidders;
    bidders = await getBidders(site);
    if (bidders !== prevBidders) {
      console.log("Rebuilding prebid.js...\n");
      await buildPrebid(bidders);
    }

    const bundle = await rollup.rollup({
      input: "src/index.js",
      plugins: [
        replace({
          include: "src/index.js",
          SITE_TO_REPLACE: site
        }),
        babel({
          exclude: "src/vendor/**"
        }),
        uglify()
      ]
    });

    const outputFile = `dist/${site}.js`;
    console.log(`Writing ${outputFile}...\n`);

    await bundle.write({
      name: "bbgmAds",
      file: outputFile,
      format: "iife"
    });

    console.log(`Done ${site}!\n`);
  }
})();

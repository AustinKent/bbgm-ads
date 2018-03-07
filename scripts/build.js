const babel = require("rollup-plugin-babel");
const replace = require("rollup-plugin-replace");
const rollup = require("rollup");

let sites = ["bbgm", "test"];

// Support calling like `yarn run build test` to only build for the test site
if (process.argv.length > 2) {
  sites = process.argv.slice(2);
}

(async () => {
  for (const site of sites) {
    const inputOptions = {
      input: "src/index.js",
      plugins: [
        replace({
          include: "src/index.js",
          SITE_TO_REPLACE: site
        }),
        babel({
          exclude: "src/vendor/**"
        })
      ]
    };
    const outputOptions = {
      name: "bbgmAds",
      file: `dist/${site}.js`,
      format: "umd"
    };

    const bundle = await rollup.rollup(inputOptions);
    console.log(`Writing ${outputOptions.file}...`);
    await bundle.write(outputOptions);
  }
})();

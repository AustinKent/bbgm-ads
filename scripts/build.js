const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const replace = require("rollup-plugin-replace");
const uglify = require("rollup-plugin-uglify");

let sites = ["bbgm"];

// Support calling like `yarn run build foo` to only build for the foo site
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
        }),
        uglify()
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

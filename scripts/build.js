const babel = require("rollup-plugin-babel");
const replace = require("rollup-plugin-replace");
const rollup = require("rollup");

const sites = ["bbgm"];

(async () => {
    for (const site of sites) {
        const inputOptions =     {
            input: "src/index.js",
            plugins: [
                replace({
                    include: "src/*",
                    SITE: JSON.stringify(site),
                }),
                babel({
                    exclude: "src/vendor/**",
                }),
            ],
        };
        const outputOptions = {
            name: "bbgmAds",
            file: `dist/${site}.js`,
            format: "umd",
        };

        const bundle = await rollup.rollup(inputOptions);
        console.log(`Writing ${outputOptions.file}...`)
        await bundle.write(outputOptions);
    }
})();

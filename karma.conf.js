const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

module.exports = config => {
  config.set({
    frameworks: ["mocha"],
    files: ["test/**/*.js"],
    preprocessors: {
      "test/**/*.js": ["rollup"]
    },
    rollupPreprocessor: {
      plugins: [resolve(), commonjs()],
      output: {
        format: "iife",
        name: "bbgmAds",
        sourcemap: "inline"
      }
    },
    reporters: ["mocha"],
    autoWatch: false,
    browsers: ["ChromeHeadless", "FirefoxHeadless"],
    singleRun: true
  });
};

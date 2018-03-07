module.exports = (config) => {
  config.set({
    frameworks: ["mocha", "browserify"],
    files: [
      "test/**/*.js"
    ],
    preprocessors: {
      "test/**/*.js": ["browserify"],
    },
    browserify: {
      debug: true
    },
    reporters: ["mocha"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true
  });
};

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const prebidFolder = path.join(__dirname, "../../node_modules/prebid.js");

const install = () => {
  return new Promise((resolve, reject) => {
    const proc = spawn("yarn", ["install"], {
      cwd: prebidFolder
    });
    proc.stdout.on("data", data => {
      process.stdout.write(String(data));
    });
    proc.stderr.on("data", data => {
      process.stderr.write(String(data));
    });
    proc.on("close", code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`yarn install exited with code ${code}`));
      }
    });
  });
};

const build = bidders => {
  console.log("build", bidders);
  return new Promise((resolve, reject) => {
    const proc = spawn(
      "node_modules/.bin/gulp",
      ["build", `--modules=${bidders}`],
      {
        cwd: prebidFolder
      }
    );
    proc.stdout.on("data", data => {
      process.stdout.write(String(data));
    });
    proc.stderr.on("data", data => {
      process.stderr.write(String(data));
    });
    proc.on("close", code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`gulp build exited with code ${code}`));
      }
    });
  });
};

const copy = () => {
  const source = path.join(prebidFolder, "build/dist/prebid.js");
  const destination = path.join(__dirname, "../../src/vendor/prebid.js");
  fs.copyFileSync(source, destination);
};

const buildPrebid = async bidders => {
  console.log("Installing prebid.js dependencies...");
  await install();

  console.log("\nBuilding prebid.js...");
  await build(bidders);

  console.log("\nCopying prebid.js to src/vendor...");
  copy();

  console.log("\nDone building prebid.js\n");
};

module.exports = buildPrebid;

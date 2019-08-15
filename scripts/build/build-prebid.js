const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const prebidFolder = path.join(__dirname, "../../node_modules/prebid.js");

let installed = false;
const install = () => {
  return new Promise((resolve, reject) => {
    // Should be `npm ci` rather than `npm install` but the lockfile in prebid.js 2.27.0 is messed up
    const proc = spawn("npm", ["install"], {
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
        installed = true;
        resolve();
      } else {
        reject(new Error(`npm ci exited with code ${code}`));
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
  if (!installed) {
    console.log("Installing prebid.js dependencies...");
    await install();
  }

  console.log("\nBuilding prebid.js...");
  await build(bidders);

  console.log("\nCopying prebid.js to src/vendor...");
  copy();

  console.log("\nDone building prebid.js\n");
};

module.exports = buildPrebid;

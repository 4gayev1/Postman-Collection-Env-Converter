const checkIsArray = require("../controllers/arrayChecker");
const readFile = require("../controllers/fileReader");
const matchValues = require("../controllers/valueMatcher");
const writeFile = require("../controllers/fileWriter");
const makePath = require("../controllers/pathMaker");
const cliProgress = require("cli-progress");
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic,
);
progressBar.start(100, 0, {
  speed: "N/A",
});
function runner(fileDirectories) {
  try {
    const envDirectories = checkIsArray(fileDirectories[1]);
    const collectionDirectories = checkIsArray(fileDirectories[0]);
    const stepCount = envDirectories.length * collectionDirectories.length;

    for (i in envDirectories) {
      for (j in collectionDirectories) {
        const envJson = readFile(envDirectories[i]);
        const collectionJson = readFile(collectionDirectories[j]);

        const modifiedVariables = matchValues(
          envJson.values,
          collectionJson.variable,
        );
        const modifiedCollectionPath = makePath(
          envDirectories[i],
          collectionDirectories[j],
        );
        writeFile(modifiedCollectionPath, collectionJson, modifiedVariables);
        progressBar.increment(10);
      }
    }
    progressBar.stop();
    console.log("Everything went well");
  } catch (e) {
    console.log("Something went wrong in Runner", e.message);
    progressBar.stop();
  }
}

module.exports = runner;

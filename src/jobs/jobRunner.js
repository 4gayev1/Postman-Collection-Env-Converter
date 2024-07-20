const checkPath = require("../controllers/pathChecker");
const readFile = require("../controllers/fileReader");
const matchValues = require("../controllers/valueMatcher");
const writeFile = require("../controllers/fileWriter");
const makePath = require("../controllers/pathMaker");
const changeCollectionUrls = require("../controllers/urlChanger");

function runner(fileDirs) {
  try {
    const dirs = checkPath(fileDirs);
    const envDirs = dirs.endDirs;
    const collectionDirs = dirs.collectionDirs;

    for (i in envDirs) {
      for (j in collectionDirs) {
        const envJson = readFile(envDirs[i]);
        const collectionJson = readFile(collectionDirs[j]);

        const modifiedJson = matchValues(
          envJson.values,
          collectionJson.variable,
          collectionJson,
        );

        const modifiedCollectionPath = makePath(envDirs[i], collectionDirs[j]);

        const modifiedCollectionJson = changeCollectionUrls(modifiedJson);

        writeFile(modifiedCollectionPath, modifiedCollectionJson);
      }
    }
    console.log("All collections has been converted successfully");
  } catch (e) {
    console.log("Something went wrong in Runner", e.message);
  }
}

module.exports = runner;

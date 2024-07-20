const checkPath = require("../controllers/pathChecker");
const readFile = require("../controllers/fileReader");
const matchValues = require("../controllers/valueMatcher");
const writeFile = require("../controllers/fileWriter");
const makePath = require("../controllers/pathMaker");
const changeCollectionUrls = require("../controllers/urlChanger");

function runner(fileDirectories) {
  try {
    const envDirectories = checkPath(fileDirectories[1]);
    const collectionDirectories = checkPath(fileDirectories[0]);

    for (i in envDirectories) {
      for (j in collectionDirectories) {
        const envJson = readFile(envDirectories[i]);
        const collectionJson = readFile(collectionDirectories[j]);

        const modifiedJson = matchValues(
          envJson.values,
          collectionJson.variable,
          collectionJson,
        );

        const modifiedCollectionPath = makePath(
          envDirectories[i],
          collectionDirectories[j],
        );

        const modifiedCollectionJson = changeCollectionUrls(modifiedJson);

        writeFile(modifiedCollectionPath, modifiedCollectionJson);
      }
    }
    console.log("Everything went well\n");
  } catch (e) {
    console.log("Something went wrong in Runner", e.message);
  }
}

module.exports = runner;

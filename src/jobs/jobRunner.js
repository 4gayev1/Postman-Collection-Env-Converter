const checkPath = require("../controllers/pathChecker");
const readFile = require("../controllers/fileReader");
const matchValues = require("../controllers/valueMatcher");
const writeFile = require("../controllers/fileWriter");
const makePath = require("../controllers/pathMaker");

function runner(fileDirectories) {
  
  try {
    const envDirectories = checkPath(fileDirectories[1]);
    const collectionDirectories = checkPath(fileDirectories[0]);
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
      }
    }
    console.log("Everything went well\n");
  } catch (e) {
    console.log("Something went wrong in Runner", e.message);
  }finally{
    progressBar.stop();
  }
}

module.exports = runner;

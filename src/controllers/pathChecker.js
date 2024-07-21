const readFile = require("./fileReader");
const readPath = require("./pathReader");

function checkPath(fileDirs) {
  try {
    let pathArray = [];
    let envDirs = [];
    let collectionDirs = [];

    function definePath(fileDirs) {
      fileDirs.map((fileDir) => {
        const pathElements = fileDir.split("/");

        if (pathElements[pathElements.length - 1].includes("json")) {
          pathArray.push(fileDir);
        } else {
          const filesPaths = readPath(fileDir);
          filesPaths.map((filePath) =>
            pathArray.push(`${fileDir}/${filePath}`),
          );
        }
      });
      return pathArray;
    }

    function seperatePath(allDir) {
      const allPaths = definePath(allDir);

      allPaths.map((path) => {
        readFile(path).values !== undefined
          ? envDirs.push(path)
          : collectionDirs.push(path);
      });
    }

    seperatePath(fileDirs);

    console.log("Paths are correct");
    return { endDirs: envDirs, collectionDirs: collectionDirs };
  } catch (e) {
    console.log(
      "Something went wrong in pathChecker -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = checkPath;

const fs = require("fs");

function readPath(fileDir) {
  try {
    const filesPaths = fs.readdirSync(fileDir);

    console.log("Directory read successfully");
    return filesPaths;
  } catch (e) {
    console.log(
      "Something went wrong in pathChecker -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = readPath;

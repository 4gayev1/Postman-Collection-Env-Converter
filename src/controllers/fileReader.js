const fs = require("fs");

function readFile(directory) {
  try {
    const jsonData = JSON.parse(fs.readFileSync(directory, "utf8"));

    console.log("File read successfully");
    return jsonData;
  } catch (e) {
    console.log(
      "Something went wrong in fileReader -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = readFile;

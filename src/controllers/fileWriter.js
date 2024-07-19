const fs = require("fs");

function writeFile(directory, collectionJson, variables) {
  try {
    collectionJson.variable = variables;

    fs.writeFileSync(directory, JSON.stringify(collectionJson));

    console.log(
      `Collection json has been written to ${directory} successfully`,
    );
  } catch (e) {
    console.log(
      "Something went wrong in fileWriter -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = writeFile;

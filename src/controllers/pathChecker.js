function checkPath(fileDirectories) {
  try {
    if (!fileDirectories.includes(",")) {
      array = [fileDirectories];
    } else {
      array = fileDirectories.split(",");
    }

    console.log("Path are correct");
    return array;
  } catch (e) {
    console.log(
      "Something went wrong in arrayChecker -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = checkPath;

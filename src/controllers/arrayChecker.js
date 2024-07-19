function checkIsArray(fileDirectories) {
  try {
    if (!fileDirectories.includes(",")) {
      array = [fileDirectories];
    } else {
      array = fileDirectories.split(",");
    }

    console.log("Data types checked successfully");
    return array;
  } catch (e) {
    console.log(
      "Something went wrong in arrayChecker -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = checkIsArray;

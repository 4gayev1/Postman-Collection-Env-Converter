function makePath(envPath, collectionPath) {
  try {
    const collectionPathArray = collectionPath.split("/");
    const envFileName = envPath
      .split("/")
      [envPath.split("/").length - 1].split(".")[0];

    collectionPathArray[collectionPathArray.length - 1] = [
      envFileName,
      collectionPathArray[collectionPathArray.length - 1],
    ].join("_");
    const modifiedPath = collectionPathArray.join("/");

    console.log("Collection path created successfully");
    return modifiedPath;
  } catch (e) {
    console.log(
      "Something went wrong in pathMaker -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = makePath;

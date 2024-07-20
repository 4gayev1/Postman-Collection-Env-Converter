function matchValues(envVal, collectionVar, collectionJson) {
  try {
    for (val of envVal) {
      let found = false;
      for (cvar of collectionVar) {
        if (val.key.toLowerCase() == cvar.key.toLowerCase()) {
          cvar.value = val.value;
          found = true;
          break;
        }
      }
      if (!found) {
        collectionVar.push({
          key: val.key,
          value: val.value,
        });
      }
    }

    collectionJson.variable = collectionVar;

    console.log("Variables and values has been matched successfully");
    return collectionJson;
  } catch (e) {
    console.log(
      "Something went wrong in valueMatcher -->",
      `Error Message: ${e.message}`,
    );
  }
}

module.exports = matchValues;

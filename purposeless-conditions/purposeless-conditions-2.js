function isNotBoolean(test) {
  var retVal = false;
  if (typeof test === "boolean") {
    retVal = false;
  } else {
    retVal = true;
  }
  return retVal;
}

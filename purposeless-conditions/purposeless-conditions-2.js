/* Example # 2 */
function isNotBoolean(test) {
  var retVal = false; //or any other initialization
  if (typeof test === "boolean") {
    retVal = false;
  } else {
    retVal = true;
  }
  return retVal;
}

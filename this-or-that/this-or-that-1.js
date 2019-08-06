/* Example 1*/
function haircut(persons) {
  var that = this;

  persons.forEach(function(person) {
    that.cut(person);
  });
}

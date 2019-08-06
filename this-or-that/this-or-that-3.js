/* Example 1 Alternate*/
function haircut(persons) {
  persons.forEach(function(person) {
    this.cut(person);
  }, this); //hidden param to set context in `forEach`
}

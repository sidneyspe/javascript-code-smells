/* Example 1*/
function haircut(persons) {
  persons.forEach(
    function(person) {
      this.cut(person);
    }.bind(this)
  );
}

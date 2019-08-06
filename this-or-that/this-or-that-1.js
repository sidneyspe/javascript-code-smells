function haircut(persons) {
  var that = this;

  persons.forEach(function(person) {
    that.cut(person);
  });
}

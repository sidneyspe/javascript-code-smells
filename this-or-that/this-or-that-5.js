function Person() {
  this.teeth = [{ clean: false }, { clean: false }, { clean: false }];
}

Person.prototype.brush = function() {
  var that = this;

  this.teeth.forEach(function(tooth) {
    that.clean(tooth);
  });

  console.log("brushed");
};

Person.prototype.clean = function(tooth) {
  tooth.clean = true;
};

var person = new Person();
person.brush();
console.log(person.teeth);

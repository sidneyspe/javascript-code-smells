Person.prototype.brush = function() {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }, this); // 4: Use 2nd parameter of .forEach to change context

  console.log("brushed");
};

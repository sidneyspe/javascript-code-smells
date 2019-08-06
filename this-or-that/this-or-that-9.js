Person.prototype.brush = function() {
  this.teeth.forEach(this.clean); // 2: Use functional programming

  console.log("brushed");
};

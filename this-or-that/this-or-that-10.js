Person.prototype.brush = function() {
  this.teeth.forEach(this.clean.bind(this)); // 2: Bind `this` if clean needs it

  console.log("brushed");
};

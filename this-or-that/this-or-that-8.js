Person.prototype.brush = function() {
  this.teeth.forEach(tooth => {
    // 2: Use ES6 Arrow Function to bind `this`
    this.clean(tooth);
  });

  console.log("brushed");
};

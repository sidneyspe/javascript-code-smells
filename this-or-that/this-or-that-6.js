Person.prototype.brush = function() {
  this.teeth.forEach(
    function(tooth) {
      this.clean(tooth);
    }.bind(this)
  ); // 4: Use .bind() to change context

  console.log("brushed");
};

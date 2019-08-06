var Application = (function() {
  function Application() {
    // kick off your code
  }

  Application.prototype.handleClick = function() {};

  return Application;
})();

// Only include at end of main application...
$(document).ready(function() {
  new Application();
});

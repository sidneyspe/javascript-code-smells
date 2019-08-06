(function(myApp) {
  myApp.init = function() {
    // kick off your code
  };

  myApp.handleClick = function() {}; // etc...
})((window.myApp = window.myApp || {}));

// Only include at end of main application...
$(document).ready(function() {
  window.myApp.init();
});

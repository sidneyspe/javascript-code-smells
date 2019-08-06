// Event Delegation before DOM Ready
$(document).on("mouseenter mouseleave", ".Component", function(e) {
  $(this).toggleClass("Component--over", e.type === "mouseenter");
});

$(document).on("click", ".Component button", function(e) {
  alert("HEY!");
});

$(document).ready(function() {
  $(".Component button").addClass("Component-button--action");
});

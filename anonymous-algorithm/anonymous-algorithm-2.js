var search = document.querySelector(".Autocomplete");

search.addEventListener("input", function matches(e) {
  console.log(e.target.value);
});

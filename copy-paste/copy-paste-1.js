// ... more code ...

var boxes = document.querySelectorAll(".Box");

[].forEach.call(boxes, function(element, index) {
  element.innerText = "Box: " + index;
  element.style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});

// ... more code ...

// ... more code ...

var circles = document.querySelectorAll(".Circle");

[].forEach.call(circles, function(element, index) {
  element.innerText = "Circle: " + index;
  element.style.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});

// ... more code ...

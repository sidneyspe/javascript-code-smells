let randomColor = () => `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
let $$ = selector => [].slice.call(document.querySelectorAll(selector || "*"));

let updateElement = (selector, textPrefix, styleProperty) => {
  $$(selector).forEach((element, index) => {
    element.innerText = textPrefix + ": " + index;
    element.style[styleProperty] = randomColor();
  });
};

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case "Triangle":
      area = 0.5 * options.width * options.height;
      break;

    case "Square":
      area = Math.pow(options.width, 2);
      break;

    case "Rectangle":
      area = options.width * options.height;
      break;

    default:
      throw new Error("Invalid shape: " + shape);
  }

  return area;
}

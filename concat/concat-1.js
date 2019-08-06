var build = function(id, href, text) {
  return $(
    "<div id='tab'><a href='" +
      href +
      "' id='" +
      id +
      "'>" +
      text +
      "</a></div>"
  );
};

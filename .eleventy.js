module.exports = function(eleventyConfigure) {
  // Copy the `css` directory to the output (_site/css)
  eleventyConfigure.addPassthroughCopy("css");
};
module.exports = function (eleventyConfig) {
  // Pass through the folders we actually need
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      output: "docs",
    },
  };
};
export default function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addLayoutAlias('default', 'default.html');
  eleventyConfig.setServerOptions({
    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 3000,
  });
  eleventyConfig.addPassthroughCopy("assets");
}

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {

  let markdownLibrary = markdownIt({ // turn headings into IDs
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy('assets');

  // set input and output folder
  return {
    dir: { 
      input: 'src', 
      includes: 'templates',
      output: 'dist' 
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
}
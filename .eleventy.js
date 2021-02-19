// import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor'

const markdownIt = require("markdown-it");
const markdownItTocAndAnchor = require("markdown-it-toc-and-anchor").default;

module.exports = function (eleventyConfig) {

  let markdownLibrary = markdownIt({ // turn headings into IDs and links with optional TOC
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItTocAndAnchor, {
    tocClassName: null,
    tocFirstLevel: 2,
    anchorClassName: null,
    wrapHeadingTextInAnchor: true    
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
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require('luxon');
const sanitizeHTML = require('sanitize-html');

const markdownIt = require("markdown-it");
const markdownItTocAndAnchor = require("markdown-it-toc-and-anchor").default; // the .default is essential: https://github.com/medfreeman/markdown-it-toc-and-anchor#readme

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setDataDeepMerge(true);

  let markdownLibrary = markdownIt({ // add IDs to headings with links inside. Perfect!
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

  eleventyConfig.addFilter('readableDate', (date, format) => {
      // default to Europe/Vienna Timezone
    const dt = DateTime.fromJSDate(date, { zone: 'UTC+2' })
    if (!format) {
        format =
            dt.hour + dt.minute > 0 ? 'dd LLL yyyy - HH:mm' : 'dd LLL yyyy'
    }
      return dt.toFormat(format)
  })

  eleventyConfig.addFilter('webmentionsForUrl', (webmentions, url) => {
    // thank you: https://github.com/maxboeck/eleventy-webmentions/blob/master/.eleventy.js
    const allowedTypes = ['in-reply-to', 'like-of', 'repost-of', 'bookmark-of', 'mention-of'] 
    const allowedHTML = {
      allowedTags: ['b', 'i', 'em', 'strong', 'a'],
      allowedAttributes: {
        a: ['href']
      }
    }

    const clean = (entry) => {
      const { html, text } = entry.content

      if (html) {
        entry.content.value =
          html.length > 2000
            ? `mentioned this in <a href="${entry['wm-source']}">${entry['wm-source']}</a>`
            : sanitizeHTML(html, allowedHTML)
      } else {
        entry.content.value = sanitizeHTML(text, allowedHTML)
      }
      return entry
    }

    const orderByDate = (a, b) => new Date(b.published) - new Date(a.published)

    const checkRequiredFields = (entry) => {
      const { author, published } = entry
      return !!author && !!author.name && !!published
    }

    return webmentions
      .filter((entry) => entry['wm-target'] === url)
      .filter((entry) => allowedTypes.includes(entry['wm-property']))
      .filter(checkRequiredFields)
      .sort(orderByDate)
      .map(clean)
  })


  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy('assets');

  // set input and output folder
  return {
    dir: { 
      data: 'data',
      input: 'src', 
      includes: 'templates',
      output: 'dist' 
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
}
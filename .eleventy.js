const { DateTime } = require('luxon');

const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItTocAndAnchor = require("markdown-it-toc-and-anchor").default; // the .default is essential: https://github.com/medfreeman/markdown-it-toc-and-anchor#readme

const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")
const configWebmentions = require("./configWebmentions.js")


async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [320, 480, 640, 768, 1114, null],
    urlPath: "/assets/media/",  // set this to make images show up
    outputDir: "./dist/assets/media/",
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebmentions, configWebmentions);
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
  }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addShortcode("contact", function(){

    return `<section class="contact">
      <p><strong>Pick my brain.</strong> Let's work together, address your specific needs and make something great!</p>
      <a class="contact-link" href="/about/#contact">Contact me</a>
    </section>`
  });

  eleventyConfig.addShortcode("discord", function(){
    return `<section class="contact" lang="en">
    <p><strong>Got feedback?</strong> I bet you'd appreciate a group of accessibility experts. Share insights and grow together.</p>
    <a class="contact-link" href="https://discord.gg/FSRZDPDzrQ">Join Discord!</a>
    </section>`  
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('readableDate', (date, format) => {
    const dt = DateTime.fromJSDate(date, { zone: 'UTC+2' })
    if (!format) {
        format =
            dt.hour + dt.minute > 0 ? 'dd LLL yyyy - HH:mm' : 'dd LLL yyyy'
    }
      return dt.toFormat(format)
  });

  eleventyConfig.addFilter('dateToISO', (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
          includeOffset: false,
          suppressMilliseconds: true
    });
  });

  eleventyConfig.addFilter("addNbsp", (str) => {
    if (!str) {
      return;
    }
    let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
    title = title.replace(/"(.*)"/g, '\\"$1\\"');
    return title;
  });


  // set copy asset folder to dist
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateRfc3339);

  eleventyConfig.addPassthroughCopy("src/eu-standard");

  // set input and output folder
  return {
    dir: { 
      data: 'data',
      input: 'src', 
      includes: 'templates',
      output: 'dist' 
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
const { defaults } = require("@chrisburnell/eleventy-cache-webmentions")()

module.exports = Object.assign(defaults, {
	domain: "https://www.erikkroes.nl",
	feed:  "https://webmention.io/api/mentions.json?domain=www.erikkroes.nl&token=tIOJOlY9ntGwwpDjNTtxnw&per-page=9001",
	key: "links",
})
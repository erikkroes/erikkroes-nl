const configWebmentions = require("../../configWebmentions.js")

const { getWebmentions } = require("@chrisburnell/eleventy-cache-webmentions")()

module.exports = {
	eleventyComputed: {
		webmentions: (data) => {
			return getWebmentions(configWebmentions, configWebmentions.domain + data.page.url)
		},
	}
}
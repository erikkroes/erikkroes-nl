---
title: A photographer’s view on alt text
description: Images are visual communication. Consider what you're trying to communicate
  before you do.
date: 2021-08-04
cover: ''
cover_alt: ''
eleventyExcludeFromCollections: true

---
Images are visual communication. Consider what you're trying to communicate before you do.

## What is alt text?

When I say alt text I’m usually talking about the [alt-attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt) for the [img-element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) in HTML. But most of what I say goes for other text alternatives as well. So maybe the question should be, what is a text alternative?

An image says more than a thousand words. But if you can't see an image, well, then it doesn't say much does it? A way to compensate for this is to add a text alternative; a bit of text that serves the same purpose as the image.

## What's the purpose of the image?

This is the big question if you'd ask me. Wether you add an image to an article you're writing, or you're adding it as an icon to a button, you can't avoid this question. What is the purpose? Why are you adding this image? **What are you trying to communicate?**

In the end, an image is "just" a way of getting something across. When you write, you pick certain words. You write your sentences in a certain way. You can be aware of how you're communicating and what you're bringing across. An image isn't much different in my experience.

When you pick an image, ask yourself the same questions. What am I trying to communicate? (Notice this question is very much focussed on the person creating the content and not on what a user wants.)

## What does that mean in practice?

{% image "./src/assets/media/obama.webp", "President Obama speaking from behind a pedestal" %}

Let's take this image as an example. What does it denote? And I'm picking this word because it is one I picked up during my study in photography. The literal meaning of something is its [denotation](https://en.wikipedia.org/wiki/Denotation). In this case it could be something like the pretty generic alt text I added in the code: "President Obama speaking from behind a pedestal". The denotation is also right up the alley of image recognition by artifical intelligence (AI). You literally describe what's in the image. Although you could easily go for an even more literal description here like: "A man in a suit behind a pedestal".

Stating it's President Obama is already more of a [connotation](https://en.wikipedia.org/wiki/Connotation). It's an interpretation of what we see. It's a cultural addition. Other connotations could include mentioning it's the first black president, that it's a former president or that he's talking about Donald Trump here.

And this is where the purpose of the image plays a role. If you're writing an article on the achievements of black people in the USA, you might add Obama as the first black president. If you're writing a course on public speaking, you might add Obama to illustratie that public speaking is very important for presidents.

The denotation has value but the connotation is often why we add an image. When somebody adds a description of an image into the file (like discussed in this [Twitter thread](https://twitter.com/jonsneyers/status/1422646901439086592)), it might be enough to derive a connotation from it. But to really get the message across, write your own text alternative.

## Some more tips

* **Don't include that it's an image.** That only adds noise as it's already clear from the context.
* **Write out text.**
* **Don't stylize text.** Italic and bold text don't change the message (and might not even be communicated). The same goes for anything beyond basic punctuation.

## Why I care

For the past few years, I've been working as a specialist in digital accessibility and inclusive design. In this role I work with WCAG, and the addition of text alternatives is pretty much the [first thing](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) I check in an audit. Through this role, I've formed an opinion on text alternatives.

Before this job, I was a photographer. I had 5 years of formal education in this direction. Visual communication is awesome and I wish the theory had stuck with me even more.

## Resources

* [https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html")
* [https://jakearchibald.com/2021/great-alt-text/](https://jakearchibald.com/2021/great-alt-text/ "https://jakearchibald.com/2021/great-alt-text/")
* [https://www.w3.org/WAI/tutorials/images/decision-tree/](https://www.w3.org/WAI/tutorials/images/decision-tree/ "https://www.w3.org/WAI/tutorials/images/decision-tree/")
* [https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/ "https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/")
* [https://www.youtube.com/watch?v=IxHng2L_-aQ&t=19s&pp=sAQA](https://www.youtube.com/watch?v=IxHng2L_-aQ&t=19s&pp=sAQA "https://www.youtube.com/watch?v=IxHng2L_-aQ&t=19s&pp=sAQA")
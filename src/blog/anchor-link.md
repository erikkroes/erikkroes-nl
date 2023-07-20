---
title: What you should (not) put inside an anchor link
description: >-
  The anchor link is one of the most elemental of HTML-elements. The idea of
  linking things is kind of the core idea of HyperText (the HT in both HTML and
  HTTP). And oh my, do we love to (ab)use links on the web! But what should be
  inside a link?
date: 2023-07-17T22:00:00.000Z
---

The anchor link is one of the most elemental of HTML-elements. The idea of linking things is kind of the core idea of HyperText (the HT in both HTML and HTTP). And oh my, do we love to (ab)use links on the web!

@[toc]

## What's the problem?

What we put inside a link (in between `<a href="#">` and `</a>`) is what becomes clickable and opens the link. That's assuming you're using a mouse.
If you're on a touch screen, it's what becomes touchable. If you're using a keyboard, it's the part you can activate. It's the part that's interactive!
However, what we put inside a link can also be the "accessible name" of the link. W3 has a [lengthy description](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/) on what an accessible name is. MDN has a [less lengthy description](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name). I think MDNs description starts of pretty well:

> An **accessible name** is the name of a user interface element; it is the text associated with an HTML element that provides users of assistive technology with a label for the element.

If somebody visits your website with assistive technology (like a screen reader) then the accessible name is what identifies an element.
If somebody visits your website with assistive technology, all your links are named "click here" and they ask for a list of links, they'll get a list with each item called "click here".
If somebody visits your website with assistive technology, you've got some interactive elements containing images, headings and paragraphs of text, the interactive elements will have a -very- lengthy name.

So there's the problem in a nutshell. What you want to be interactive often determines the accessible name. But what's interactive and a name are often two different things.

## How is the accessible name calculated

W3 has a page named [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.2/) with lots of technical details. It describes how various elements are named. (Because it can vary per element. `<img>` can have  `alt` but `<main>` can not.)
Common ways to name a link, in order of priority:

1. `aria-labelledby`
2. `aria-label`
3. Content

### Aria-labelledby

> Identifies the [element](https://www.w3.org/TR/wai-aria-1.2/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.2/#aria-describedby).

Read more about it in [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/#aria-labelledby).
`aria-labelledby` is an attribute that takes one or multiple "IDs". The accessible names of these elements are concatenated and form the accessible name of the parent element.
A practical use case is adding `aria-labelledby` to an HTML landmark, and making it refer to a relevant heading. This way the heading names the landmark.
But adding `aria-labelledby` is a conscious action,  you might not always have something to refer to and the [First rule of ARIA use](https://www.w3.org/TR/using-aria/#rule1) applies as well:

> If you can use a native HTML element or attribute (...), then do so.

### Aria-label

If there's no suitable `aria-labelledby`, then maybe `aria-label` can be used! It's a bit more straightforward. The value of the attribute becomes the accessible name. Or as described in [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/#aria-label):

> Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.2/#aria-labelledby).

For this attribute, the first rule of ARIA use still applies. It can be useful however when dealing with something like a CMS, and you can't change the content (but you -can- influence the `aria-label`).

### Content

This is the most common situation. The aria-attributes need to be added explicitly but content is usually there. Content is like a default when browsers come up with the accessible name.
This is a common pattern: `Learn more <a href="#">about</a> me`. It creates a link named "about" that refers to a href-value (currently unset).
When you've got a link with lots of content (like a card-pattern), all the content can become the accessible name of the link.

## What we could learn from this

The content of a link often becomes the accessible name of the link.
We want:

* **Descriptive**: the name should describe the target of the link. Especially relevant with paragraphs of text and images with alt text.
* **Unique**: this aligns with being descriptive. If different links have the same name, how do we know which is which?
* **Succinct**: Long names are unpleasant to use and harder to maintain

## Further reading

Besides all the useful links (if you'd ask me), there's more to the subject. For example, what if you want to add something to the accessible name, but not the content? Or the other way around, you want to hide something from the accessible name, but not the content? Scott O'Hara has written about that in his blog: [Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html).
The short version: you can create a CSS-class to hide content visually (first case) and there's `aria-hidden` for things you want to be visual-only (second case)

And what if you want to know the accessible name of something right in your browser? That's also possible. It's available in (at least) [Chrome](https://developer.chrome.com/docs/devtools/accessibility/reference/#aria) and [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility\_inspector/#features-of-the-accessibility-panel).

There's more to the subject of Accessible Names than fits a blog, but if you think something is missing, please let me know!

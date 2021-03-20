---
title: Semantics, what does it mean?
description: When people talk about the quality of HTML code, it is often about semantics.
  But what are semantics? What is semantic HTML, and why should you care about it?
date: 2021-01-19
cover: ''
cover-alt: ''

---
When people talk about the quality of HTML code, it is often about semantics. But what are semantics? What is semantic HTML, and why should you care about it?

## Table of Contents

* <a href="#what-is-semantic-html">What is Semantic HTML?</a>
* <a href="#what-do-semantics-do">Wat do semantics do?</a>
* <a href="#how-should-i-do-it">How should I do it?</a>
  * <a href="#what-do-i-want-to-communicate">What do I want to communicate?</a>
  * <a href="#is-my-page-structure-clear">Is my page structure clear?</a>
* <a href="#is-that-it">Is that it?</a>

## What is Semantic HTML?

Semantics is communicating your intention through your chosen HTML. This does not guarantee the correct outcome, but if you communicate a different intention than the outcome, then it is not correct anyway.
A well-known HTML tag is, for example, the `<h1>`. This tag is often used for the most important heading (heading 1) on a page.
`<h1> Semantics, what does it mean? </h1>`

The tag or element communicates the intention: this is the main heading, this is what the page is about. If (for example due to an error in the CMS) there is an entire article in a `<h1>` then the result does not match the intention.
In the same way, you can create a link (`<a>`) that goes nowhere, or a button (`<button>`) that does nothing. With semantic HTML you indicate your intention. That is the first step. The next step is to match the result.
You can compare it with TypeScript or other languages ​​that contain typing. These can not only contain data, but also say something about the data they contain.

{% image "./src/assets/media/reclni2g4kef3uexyhsm.jpeg", "A power socket in a wall with water streaming out" %}

## What do semantics do?

As indicated, semantics express the intention of an element. If tools can rely on this intention (the semantics indeed say something about the data in the elements) then they can use the content of the elements for all kinds of purposes.
Some examples:

* **Readability tools** - There are now many ways to read texts in a more readable format. Sometimes they are stand alone like Pocket and Instapaper. In Firefox and Safari there are tools built in. You can present an existing web page in a different (more readable) way.
* **Translation tools** - Tools like Google Translate can make use of the context that you communicate as a developer.
* **Assistive technology** - Software such as screen readers inform their users of the semantic value of the HTML they are reading. This way a user can understand whether something is important or only secondary, and whether something is a paragraph or a list.
* **People Reading Your Code** - It may sound obvious, but readable code is nice code to work with. You often write HTML code not only for yourself but for others, or even for yourself at a different time. Clearly written HTML is more readable and more future-proof.
* **Custom CSS, adblocking, etc** - Basically anything that "hooks" into your code benefits from readable, resilient and robust code. If a visitor has Custom CSS for readable headings, then there need to be headings first!
* **SEO** - Search engines are like actual people sometimes. They also want to know what information you provide and what the context of that information is.
  By creating structure in your code you do not end up with something disjointed. It provides guidance for everyone who has to work with it: developers, visitors and automated tools.

## How should I do it?

Does this mean you need to memorize [all HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)? No, thankfully. Even though there aren’t really that many.
It is nice to find out which elements you know though! Have you tried the [HTML Tags Memory Test](https://codepen.io/plfstr/full/zYqQeRw) yet?

### What do I want to communicate?

This question is very valuable in many situations. If you are writing HTML and you add an element, ask yourself if the element represents your intention correctly. Are you writing a paragraph? Then it makes sense to use a `<p>`. Are you doing something for purely visual reasons, without wanting to communicate a specific intention? Then you might be fine with a `<div>` or a `<span>` (these elements don't communicate any intention).
On the other hand, do you use a `<div>` or a `<span>` while you want to convey a specific intention? Maybe you want to check the list of [all HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) whether there is a suitable alternative.

### Is my page structure clear?

Every page benefits from a good structure. A newspaper relies on sections, columns and clear headlines. A page on the web (and the underlying HTML) aren’t very different from that.
See if you can organize your page with clear HTML landmarks such as `<header>`, `<main>`, `<aside>` and `<footer>`. A landmark works just like a landmark in real life. If a village has five church towers it becomes difficult to say "go left at the church tower".
You can also use headings (just like with a newspaper). The `<h1>` is the main page header; this indicates what the whole page is about. Technically, all content is covered. If you want to use a heading under the `<h1>`, use the `<h2>`. Everything that falls under the `<h2>` in the code should logically also fall under this in the content. You create a hierarchy with your headings. Do not skip headings (don't go from `<h2>` to `<h4>`) and only place something under a heading if it logically falls under it.

## Is that it?

Yes, kind of actually. Communicate as clearly as possible what the intention of your code is (meta data) and do not let your intention be an empty promise.
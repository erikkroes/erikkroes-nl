---
title: I made this website with HTML
description: This website is 100% semantic. There are no <div>s or <span>s. Every
  element has been chosen to play a role, because every element has a role. There
  are no CSS-classes, and the only IDs are for use with aria-labelledby.
date: 2021-03-20
cover: ''
cover-alt: ''

---
This website is 100% semantic. There are no `<div>`s or `<span>`s. Every element has been chosen to play a role, because every element has a role. There are no CSS-classes, and the only IDs are for use with `aria-labelledby`.

I even tried to follow the HTML [Document Outline](http://html5doctor.com/outlines/). Still some possible improvement there, but at least that's not actively used right now. (I'm still a fan of the idea though. One of very few probably.)

## Why only semantic elements?

You might have seen [Heydon's website](https://heydonworks.com/). It only works when you have JavaScript disabled. I think this is great as a statement. I see Heydon as a natural artist whose statements make people think about things. The value is in the message, and not in following the example. I always appreciate these kind of statements, but I'm also too practical to come up with them myself. So my addition (not an alternative) is a website where every element has semantic value.

> If you're not familiar with semantics, or what they contribute, you could start with my blog "[Semantics, what does it mean?](../semantics-what-does-it-mean/)".

In the current landscape of websites where frameworks like React are king, `<div>`s and `<span>`s rule the land. They're like corn starch. A nothing that can turn into anything, but won't bring anything to the table by itself.

For building websites, these elements add nothing to the content or the semantic value of the content. They're overused. Code is often cleaner when these elements are limited. This improves readability. This improves maintainability. There are more reasons than fit right here, but focus on

## Why HTML first?

The startpoint for my website was the content. I had content (to create) and wanted a place to put it. I want to communicate and share. 

So I started with thinking about the structure of my content. How do I make logical divisions in my content? In the end I have several pages with their own content and sections. The pages provide context like a title and a URL. Within the pages you can also provide context with (there it is again) the semantics of HTML. 

All my content went into a HTML-structure and at this point I was practically done. I had a working website, with separate pages, with all content I wanted in there. My content in the structure that I wanted, and usable by everybody. After that I started changing things with CSS and the funny thing is, CSS had only one goal for me: CSS is there for the visual aspect. I added CSS for the people that saw my content. It didn't improve or change my content in any way. If you're working on the visuals of a website and want to change your HTML structure, think if you really want different HTML or just different visuals. 

I liked the idea of CSS follow HTML. The HTML structure was there for the content, not for the visual appeal.

## Why no JavaScript?

With the content done, the structure done and the styling done, I had only one step left. I was free to add JavaScript!

I was also free to add no JavaScript. Everything was perfect already. JavaScript opens the door to increased loading times, and (for me) mostly more complexity building. This website has no JavaScript, so no build, no NPM-modules, no many things. Most of the content is in Markdown files and can be edited through a WYSIWYG-editor. I'm typing this on forestry.io and it's a great experience.

No JavaScript for me, is the easiest learning curve for keeping this website up and no overhead for tooling. If I forget about this website for a year and want to add content, I only need to open an editor in the browser. If I want to move to a different system, all my content is in Markdown files already.

Being flexible and lightweight is a luxury. The less you have, the less you have to worry about.

## What else isn't there?

There are no media queries or breakpoints. Which means no duplicate CSS and not being dependant on devices.

There are no CSS classes. When you have a clear HTML structure (and it's not too complicated, like on a personal website), it's easy to target elements. It's also fairly robust as nobody will be touching my HTML but me. I understand this does not work for your corporate project X because reasons, but just look at my code once. See how clean it is?

There are no comments. Yeah, that's a whole different decision. I've got a list of like 30 things I still want to improve. But consider this an MVP (Minimum Viable Product). My goal was to have something minimal that I can iterate on, and I really really wanted a place to play, write and experiment. Expression is key.

## Other notes

* The font is [Atkinson Hyperlegible](https://brailleinstitute.org/freefont). It's made to be readable. 
* There's no skiplink. I prefer a minimal navigation.
* My list of improvements includes:
  * Comments/webmentions
  * A portfolio 
  * Microformats
  * A sitemap 
  * A photopage
  * A 404 page
  * More content
* A lot of this code was inspired by Max Böck. [His code](https://github.com/maxboeck/mxb) is a great base for building a website with [Eleventy](https://www.11ty.dev/) (like I did).
* The code of this website is on [GitHub](https://github.com/erikkroes/erikkroes-nl). I hope you find it useful and have questions.
* This process was very much inspired by [Jeremy Keith](https://adactio.com/) and his book [Resilient web design](https://resilientwebdesign.com/). Read it. It's short (jay) and much more eloquent than my scribbles here.
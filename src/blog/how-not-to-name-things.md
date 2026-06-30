---
_template: post
title: How (not to) name things
description: Imagine every sign stating "you are now in front of a sign". Or the
  LinkedIn-app is now called "this is an app".
date: 2026-06-30T09:39:00.000+02:00
---
Imagine every sign stating "you are now in front of a sign". Or the LinkedIn-app is now called "this is an app".

![<div aria-label="You are now inside an open dialog" role="dialog">](/assets/media/carbon2.png)

A name is supposed to help you identify something. It sets it apart from other things of the same kind.

HTML already has something to tell you what kind the object/element is. That is what semantics do. 

* A `<p>` is a paragraph; a bit of text.
* An `<a>` is an anchor; it's a link that can take you somewhere.
* A `<button>` is a button; it performs an action.
* `role="dialog"` is a dialog

Names are there to tell one button apart from another. HTML already tells you it's a button. Now add a name to tell which button it is!

* Don't use a name to tell somebody is in a dialog, when the role does that.
* Don't add "image" to a text alternative for an image. It's already clear it's an image.
* Don't add "go to" to the name of a link. That's what links do. They go somewhere.

All of that is noise. Give a clear identifying name.



More about semantics: https://www.erikkroes.nl/blog/semantics-what-does-it-mean/

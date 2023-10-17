---
description: >-
  There's a simple question I ask myself whenever I consider the usage of a
  toast-component.
date: 2023-10-16T22:00:00.000Z
cover: /assets/media/toast-burnt.jpg
cover_alt: A toaster with bread coming out looking burnt and black.
title: Burn your toast
---

There's a simple question I ask myself whenever I consider the usage of a toast-component.

{% image "./src/assets/media/toast-burnt.jpg", "A toaster with bread coming out looking burnt and black."%}

## What is a toast?

A toast is a non-modal notification that often popups at the bottom of the screen. At least, that's the most common implementation. It may be in another spot sometimes. It may or may not contain interactive content. Sometimes even multiple items. It may or may not disappear by itself. It may also be called a snackbar.

## What do you ask yourself?

When I consider the usage of a toast-component, I find only one question relevant. Is the content essential?

If it's a yes, the content should be put in a valuable location and I don't use a toast.
If it's a no, the content isn't needed, should be scrapped, and I don't use a toast.

## Why does this work so well?

It might not be a surprise at this point, but I don't like toasts. Toasts are bad. They're this tiny popup in the corner of your eye that may or may not disappear. It means I'm being rushed! Is it fine if I miss it? Quick, I need to read it before it might go away! How long has is been there already? They're anxiety-inducing!

There's a reason there's a Succes Criterion ([SC 2.2.1 - Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)) in the Web Content Accessibility Guidelines that's concerned with timings.

And that's not enough. Toasts are often at the end of the DOM (the code that makes up the page). This makes it extra hard for people with screen readers to notice them, let alone navigate to them. And you'll miss them when you're focussed on another task (probably the one that triggers it in the first place). And you'll miss then when you're distracted. And basically, odds are you'll miss them.

And even when you do notice it, you might not be fast enough to do anything with it. Like read it. Make a decisision based on it. Or trigger whatever action shows. Or you did make your decisision but then it vanishes. Sounds like fun right? (No it doesn't. I'm sarcastic.)

## An example

I use Gmail on the web. It has a toast. Whenever you send a message, you get a quick toast that give you the option to undo it. If you're not fast enough, the option to undo goes away. It's life-saving when it works. It never does though. I can count on one hand the times I've succesfully used it. And I use Gmail a -lot-. I even tried to make a screenshot of it, but I wasn't fast enough. Even when prepared, I missed it. That's how useful it is.

{% image "./src/assets/media/toast-screenshot.png", "The toast notification in gmail. It states 'message sent' and shows a link stating 'show message'"%}

It still gave me anxiety though. Task failed succesfully.

## Concluding

If you care about your communication, don't use toast. And if you don't, still don't use it because you'll give people anxiety.

Other people wrote about this subject in a much more nuanced way. Feel free to read their thoughts before you burn your toast.

* [https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html](https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html)
* [https://adrianroselli.com/2019/06/scraping-burned-toast.html](https://adrianroselli.com/2019/06/scraping-burned-toast.html)
* [https://css-tricks.com/toast/](https://css-tricks.com/toast/)

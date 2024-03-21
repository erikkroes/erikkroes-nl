---
title: 'No, your website does not have a mobile version'
description: >-
  Designers often (if they're nice) design multiple versions of a website. The
  designs get names like "mobile version", "tablet version" and "desktop
  version". I appreciate the effort, but I've noticed confusion stemming from
  these terms. They are often counterproductive. 
date: 2024-02-09T00:00:00.000Z
cover: /assets/media/mobile-version.jpg
cover_alt: A person sitting behind a computer with a huge screen
---

Designers often (if they're nice) design multiple versions of a website. The designs get names like "mobile version", "tablet version" and "desktop version". I appreciate the effort, but I've noticed confusion stemming from these terms. They are often counterproductive.

{% image "./src/assets/media/mobile-version.jpg", "A person sitting behind a computer with a huge screen" %}

@[toc]

## The assumptions

The image that lives in many minds when talking about a "mobile version": "It's what people use on their mobile phone. They're using a device with a small screen and control it with touch."
I'm afraid there are some faulty assumptions in that thought. Let me highlight some of those, and offer ideas for a different term (that hopefully doesn't carry any faulty assumptions).

### It's not just touch

While mobile phones often have a touch screen, it's certainly not the only way to control them. People can use external keyboards instead. People can use a {% term "screen reader", "screen-reader" %} to control their phone. There's Switch Control or Switch Access. All of those rely on being able to operate a website with a keyboard.
And then there's also voice control, which does not rely on the keyboard, but does show there's a whole world beyond touch.
Those are just some (sort of) common ways to control a phone beyond touch. The world of {% term "assistive technology", "assistive-technology" %} is rich and features many more ways and devices.

### It's not just small screens

What do phones have these days? About 4-7 inches of screen I guess? But "mobile versions" are not restricted to phones. They are often the version of a website that shows up at a certain resolution, not screen size.
What this practically means that if a user uses a browser on a different device (like a laptop or computer) and they zoom in, they also get this "mobile version"!
And this is also very relevant for accessibility: a lot of users zoom in on websites! And there are plenty of websites that already change their layout and start showing a (more) "mobile version" when zooming in at only 125-150%. That's not a lot! Browsers can easily zoom up to 500%.
So no, your "mobile version" is not restricted to small screens. And when you imagine users with desktops or laptops, it might also be easier to imagine they're not using touch either.

## Alternative terms

I'd like to get rid of the term mobile or anything phone-related in this context. Also nothing with "small", as that might create assumptions about the screen size.
I can imagine "zoomed in version" already removing some of the stigma. It still draws attention to a specific use case.
How about "version for low resolutions"? As in the end, that's what determines wether a version gets show or not: the resolution it's presented in. I can use a version for low resolutions on a large display. I can use a version for high resolutions on a small display. It feels like a fitting definition.
Join the Discord community and share what you think is a good term! (Link at the end of this blog)

## Conclusion

So a mobile verson is not just for small screens. And even if it were, it's also not restricted to touch only. If you're making a website, and you've got a design for a "mobile version", it should conform to -everything- that all other designs conform to. It should be just as accessible with a keyboard, and it should offer all the same content and functionality.
The fact that not all people can access the fanciest high-resolution version of a website, does not mean they should be missing out on content or functionality.

---
_template: post
title: Don't test accessibility with a screen reader
description: Screen readers are great, and they deserve a lot of love. But let
  me give you a better option to start testing with.
date: 2025-02-13T09:57:00.000Z
cover: /src/assets/media/keyboard.jpg
cover_alt: A cropped picture of a mechanical keyboard that's compatible with
  Lego. Because where's the fun if we can't hide some Lego in this thing?
---

Screen readers are great, and they deserve a lot of love. But let me give you a better option to start testing with.

{% image "./src/assets/media/keyboard.jpg", "A cropped picture of a mechanical keyboard that's compatible with Lego. Because where's the fun if we can't hide some Lego in this thing?" %}

## What is a screen reader?
Somebody might've told you about screen readers. They're wonderful pieces of technology. A screen reader is software ({% term "assistive technology", assistive-technology %}) that reads out loud what's visible on a screen. And it also helps people navigate that same screen, without having to see it! Oh, and it can also present output in other ways, like to a braille display!
It's great for people with a visual impairment but people with other disabilities can benefit as well, like various cognitive disabilities.

## How does a screen reader work?
Let's assume, as an easy example, you're on a Mac. You're browsing a website using its native browser Safari, and use its native screen reader VoiceOver.
Simplifying some parts, but this is basically what happens:
1. Wether you tell it to, or on its own, VoiceOver will go through the page. But not like we do. It uses the [accessibility API](https://www.w3.org/TR/wai-aria/#dfn-accessibility-api). Browsers have the Document Object Model (DOM), its visual output and the accompanying HTML that we can "inspect". But they also build an entirely different model: the [accessibility tree](https://www.w3.org/TR/wai-aria/#accessibility_tree). This is exposed through an API, and assistive technology (like a screen reader) can access this API. 
2. It can navigate all content (no need to make it interactive using `tabindex`) unless specifically hidden with something like `aria-hidden` (because this excludes content from the accessibility tree). 
3. It encounters (for example) a heading. Visually, we can see it's a heading. It's likely to be larger, bold and might even have a different colour. Ideally, it's marked up with the appropriate HTML as well, like `<h1>`. This is what we call [semantics](https://www.erikkroes.nl/blog/semantics-what-does-it-mean/). HTML is not just a container for content, it's meant to "mark it up" and add semantic value to this content. In this case the heading (role="heading" in ARIA) will be put in the API (AX API specifically) as AXHeading. This is [specified in the Core Accessibility API Mappings](https://www.w3.org/TR/core-aam-1.2/#role-map-heading) (core-aam).
4. This screen reader can pick this up, and communicate it to the user.

In short, the browser puts a website in its API, and assistive technology like a screen reader can access it there. 

## And they're amazingly useful!
Testing with a screen reader doesn't only test for screen reader users. It can be used to test for image alternatives ([WCAG SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)). It's a great way to test if proper semantics are used ([WCAG SC 1.3.1](https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships)). Or how about identifying input purpose ([WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html))? And it's also an extremely useful tool for finding out the names, roles and values of elements ([WCAG SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html))
And that's just a selection. Sometimes it feels like {% term "WCAG", wcag %} and screen readers go hand in hand. (And in a way, they might. I've been told a lot of WCAG supports people with visual impairments, and they have a lot of overlap with users of screen readers!)

## But don't use them
Yes, I just told you they're great. But I'd advice you to start (!) testing with something else, for various reasons.
- Screen readers have their quirks and issues. What works for VoiceOver and Safari on MacOS might not work with Chrome or Firefox on the same OS. Or with JAWS and NVDA on Windows. Or Narrator. Or Edge. Or on phones. Or tables. You're testing the output and interpretation of a specific tool, in a specific setting with specific settings. You're not testing a specification.
- In line with that, it's also useful to know you're testing for a very specific group of people. There's this impression often that accessibility is about "making things work for blind people with screen readers". But there's more to it than that. If you focus on testing with a screen reader, you might reinforce the idea that accessibility is about screen readers. Testing screen readers can cover so much of WCAG, that it makes it very tempting, but the tools we use can also shape our vision on something. (This point awakes the media theorist in me. As Marshall Mcluhan once stated: "we shape our tools and thereafter they shape us". Excuse my tangent!)
- This maybe my most important point. Screen readers are extensive tools with lots of settings, options and possibilities. They're so versatile and impressive, that they can be extremely overwhelming! If I would advice 100 people to start testing by using a screen reader, I think at least 99 would drop out very soon after. (And maybe they'd encourage other people to do the same.) Screen readers are too much and not beginner-friendly for this. It's also why I don't tell people interested in accessibility to "just start reading WCAG". Have you seen the size of that, and the language used? It's why I wrote my [one-page introduction to accessibility](https://www.solidstart.info/). As people tend to say, accessibility is not accessible. 

## So what should I do then?
Use a keyboard to test. Keyboards are simple. Pressing the Tab key should take you to every interactive element in an intuitive order. Pressing Shift+Tab should take you the opposite way. If you can reach -and- use every bit of functionality, you’re off to a good start. Every page should also start with a {% term "skip link", skip-link %}. And people might feel lost when they don’t know where they are. So make sure it is clear which element is focused. That's it. And you can do this with any browser, on any OS. No multiple setups or security clearance needed.

- A website that doesn't work with a keyboard will present issues for people with screen readers as well. As screen readers also use the keyboard API to navigate a page. But it will also be an issue for (maybe not surprising) people who use a keyboard. And lots of other groups like people that use [switch access](https://en.wikipedia.org/wiki/Switch_access), and any other form of technology that makes use of the keyboard API.
- Keyboard issues are like the tip of the iceberg. If you find something doesn't work with a keyboard, you're bound to find more coding-related issues. Why do I say that? Because a lot of keyboard issues come from using non-native HTML (people creating custom controls most likely). And these often present more issues than just the ones you find with a keyboard.
- And let me repeat, keyboards are simple. Delivering a page? Open a browser, and if everything works, you'll likely go through it with a keyboard in less than 30 seconds. It has such an extremely low barrier for testing. If you've read this blog and have a reason to -not- test with a keyboard, drop into the [discord-server](https://discord.gg/FSRZDPDzrQ) and share it please. 

But I'll also be honest, and practical. If you already have a screen reader set up and you know how to use it... please do test with a screen reader as well. Just don't scare people off setting them up as some sort of baseline. I didn't have my driving lessons in a Formula 1 car either. I didn't start programming by learning from a bunch of punch cards. And I bet you have your own analogies to add here.

## Conclusion
Keyboards are an amazing way to test for accessibility. They have a very low barrier to entry making them an option for many and scaring few. At the same time they help discover tons of issues with little effort (and also give an impression of code quality).
Deliver code? Test it with a keyboard.




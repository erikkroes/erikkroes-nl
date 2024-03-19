---
title: A tool for sharing messages and images
description: >-
  I've been looking for something for months. It's a tool that's a mix of
  IndieWeb, accessibility and nonexistence. There are plenty of tools out there
  that do -some- of what I want. But none of them seem to do all of it. I'm now
  calling for your help. I'm looking for a programmer to build this.
date: 2024-03-18T23:00:00.000Z
cover: >-
  /assets/media/Firefly a man with glasses in panic and pulling out their hairs
  only to discover there are some wire.jpg
cover_alt: >-
  A man with glasses in panic and pulling out their hairs only to discover there
  are some wires among the hairs
---

I've been looking for something for months. It's a tool that's a mix of [IndieWeb](https://indieweb.org/), accessibility and nonexistence. There are plenty of tools out there that do -some- of what I want. But none of them seem to do all of it. I'm now calling for your help. I'm looking for a programmer to build this.

![](</assets/media/Firefly a man with glasses in panic and pulling out their hairs only to discover there are some wire.jpg>)

The idea is simple (in my mind). I want to post short messages on my website, and I want them to be syndicated elsewhere. In the terms of IndieWeb, this would be [POSSE](https://indieweb.org/POSSE). The tough part seems to be posting short messages with images -and- a text alternative. This is crucial to me, but this is where most tools fall short.

I've tried existing tools, programming my own in several ways and even low-code tools. Exploring has included trying all kinds of new technologies and even diving into the RSS-spec. All of my attempts have run into barriers. (Some of them being time and energy) My best option now is counter-intuitive. I'm not going to do this myself. I'd like somebody to fix this for me 🤞🏿

Some technical bits on the current situation. My website runs on [Eleventy](https://www.11ty.dev/). My implementation is open source and you can find my entire [website on Github](https://github.com/erikkroes/erikkroes-nl).
All my posts start as a bit of Markdown that I write in [TinaCMS](https://tina.io/). The CMS pushes a file to GitHub. It's then built/published/hosted on [Netlify](netlify.com). The messages I write appear on my website (like this blog) and in an RSS-feed.

What I'd like is the following. I want my notes to be published from my website to Mastodon, Discord, Twitter and LinkedIn. Ideally also to Bluesky, Pixelfed and Flickr. Ideally I'd have default flows and/or ways to select platforms to publish to.
For example, I'd like photography to be posted to Pixelfed and Flickr but probably not LinkedIn.
A first version could be posting just text to Mastodon. Then iterations could be done to add more platforms and functionality. And I'd like the result to be something I can share freely with other people.

So who wants to help me out with this? I can imagine that for some people, most of this can be done in an evening. I'd love to find somebody with such experience!
Considering the time I've already spent on this, I think it's also very reasonable to turn this into a paid assignment.

Please let me know if you're able to fix this. I've been posting pretty much nothing but text for months. I'm looking forward to share bad memes and pictures again!

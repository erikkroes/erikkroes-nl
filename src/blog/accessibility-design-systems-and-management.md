---
title: 'Accessibility, design systems and management.'
description: >-
  I’ve spent years working in accessibility doing everything from printing and
  hanging up posters, to joining and leading a Design Systems team. These days I
  apply my experience as a freelance consultant and these are a few of the
  things I’ve done recently.
date: 2023-07-10T22:00:00.000Z
permalink: ''
cover: /assets/media/dependency-graph.jpg
cover-alt: >-
  A crop of a rather intricate looking graph showing circled names of components and lines connecting them.
---

I’ve spent years working in accessibility doing everything from printing and hanging up posters, to joining and leading a Design Systems team. These days I apply my experience as a freelance consultant and these are a few of the things I’ve done recently.

Consulting is fun. Taking experience from one task to another means continuous learning. Looking back on what I've done in 6 months makes me realize: you can gain a lot of experience when you're doing a lot of things!

{% image "./src/assets/media/dependency-graph.jpg", "A crop of a rather intricate looking graph showing circled names of components and lines connecting them." %}

@[toc]

## Leading a team of accessibility consultants

My start of the year was my end of working for Nomensa. Last year I joined their team of accessibility consultants to support them and their work for clients. What a joy it is to be surrounded by accessibility-work all the time! It's such a thankful industry to be in. I thoroughly enjoyed facilitating the team: improving their ways of working, integrating accessibility throughout the organization and developing new tools to work with. Working towards a truly unified and organized approach is a pleasure, and I'm thankful for my time with the team and all their wonderful clients. I used tools like Miro and Notion to formalize, document, create structure and gather thoughts.

## Organizing a meetup

This year was the first meetup for the Dutch community for Inclusive Design & Accessibility (IDEA11Y) in quite a while. With the support of a great location and speakers, I was able to organize a get-together for the Dutch accessibility-community. (And they're such a nice group of people. They really deserve to have a platform!)
We used to have a small group to organize these things, and I've noticed it's quite a lot for one person. Recently I've asked for a bit of support and I got feedback from some people willing to help. Hopefully more meetups will follow!

## Training a team of content writers

A lot of accessibility comes from sticking to conventions. Don't reinvent a wheel that works for everybody. If it works, don't touch it!
But a lot of self-expression is done through deviating from the beaten path. What should we consider when we do want to create something new? This was the challenge of the training. A very fun and creative challenge for somebody with roots in art education -and- accessibility.

> When your foundation and guidelines include accessibility, it's much easier to compose and apply them to an accessible end result!

## Setting up a Design System

Products need to be accessible. If you have customers within the government, odds are, it's part of the requirements!
And what better way to build something accessible, than starting from the ground up? I architected and led the development of a Design System where accessibility was a consideration in every step. When your foundation and guidelines include accessibility, it's much easier to compose and apply them to an accessible end result!
Supernova was an invaluable platform in this process, and combining it with a nicely architectured Figma-library really completed the experience.

## Visualizing component dependencies

Architecting a Design System led to a small discovery. Wouldn't it be great if we could visualize dependencies of the components in a component library?

A random assortment of benefits and opportunities that were made possible:

* see what components need to be finished before making a new one
* see what new components are enabled when finishing a component
* trace issues to the core components
* communicate that the value of a component goes beyond a single component (but contributes to a larger system)
* get an overview of what you're building and what to prioritize

As you might pick up from my enthusiasm about the possibilities, I very much enjoyed building this tool. I used Airtable to index components, Python to understand relationships and Graphviz to create an invaluable SVG-visualization of it all. It was a bit like the art academy and creative coding again for me. I used code (and analysis) to create an image and gain insight. It was like re-discovering a passion!

{% image "./src/assets/media/all-dependencies.gv.svg", "A graph showing the names of lots of Design Systems components in circles connected with lines" %}

This image gives an idea of what can be visualized. This example is raw, unstyled and rather chaotic. But depending on your application, it can take many shapes!
Technically speaking "it's just an SVG-file", which means it's easy to use with HTML and CSS. Styling can be done different, details can be shown when hovering, components and depedencies can be isolated. A lot of possibilities are imaginable!

## Auditing a component library and website

Why do we (accessibility consultants) audit pages when they're built out of components? For compliance, one might say.
The days of building websites page-by-page are quite a while behind us. These days we build components and compose those until we get templates and pages. This means that fixing an issue in one component, fixes it for many pages. But it also means that finding an issue on one page, probably also means finding it on other pages with the same component.
I don't like superfluous repetition, and neither did this client. I audited their component library to find issues at the source. I followed "the path of composition" towards full templates and pages to find out if any new issues were introduced.
Now the client has a report that's extremely actionable, because they know exactly where they should look to improve the user experience of their website.

## Developing a new product from scratch

A lot of my skills and experience are now coming together in a new project. I'm developing a "Design System as a Service"-product. Coming up with the business model, writing standard operating procedures, selecting and setting up tools and technologies, managing people, content, design and code... there are so many facets to this project and I'm enjoying every one of them!

## What's next?

Well vacation is what's next, that's for sure. I've been enjoying sharing my skills and experience (and energy) but I can't share without recharging every now and then!
The "product development"-project is still ongoing. Things are on track for more IDEA11Y-meetups in the near future. I'd also love to spend some time on (re-)vitalizing the community even more.
Another project on the agenda is to support an extensive accessibility-team in their journey. I'm looking forward to share what I can, and facilitate their uphill struggle towards a constructive journey.
If there's anything I can do for you let me know. I always love to hear about both ongoing projects that I can contribute to, and incidental opportunities like training and speaking. Let me know what you'd like to pick my brain about!

---
title: Aria-roles do very little
description: >-
  Look at modern websites at you'll see their code covered in aria-roles: a
  pretty <div> with role="button" here, a nice <a> with role="link" further
  along, and so on. But what is an aria-role, and what does it actually do?
date: 2023-09-11T22:00:00.000Z
permalink: ''
---

Look at modern websites at you'll see their code covered in aria-roles: a pretty `<div>` with `role="button"` here, a nice `<a>` with `role="link"` further along, and so on. But what is an aria-role, and what does it actually do?

This all started (for me) with a question I asked recently. I asked if people could tell me what the accessible name is of the following element:

`<div role="img" alt="I'm an alt">I'm the contents</div>`

It's a bit of a trick question. Sorry. It was part of the fun for me. But now let's turn it into something educational!

The first thoughts for some people seemed to be something like the following:

1. The element has an image-role.
2. The accessible name of an image can be set by an alt-attribute
3. The alt-attribute determines the accessible name

So let's have a quick look at aria-roles.

@\[toc]

## What is WAI-ARIA?

I wrote aria but it's actually the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria-1.2/). So I write aria.
You could see aria as an extension of HTML. It offers additional attributes that you can add to your HTML. Unsurprisingly: these attributes (can) improve accessibility!

Aria can be added to communicate roles, states and properties. We're looking at roles in this case. If there's anything you pick up from reading this, it might as well be the following. The [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#firstrule):

> If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.

In other words: use HTML when you can. Eric Bailey's "[ARIA is Spackle, Not Rebar](https://css-tricks.com/aria-spackle-not-rebar/)" is still very current.

## Do aria-roles add keyboard interaction?

No. It won't make your custom checkboxes navigable with arrows. It won't turn make me able to switch between your tabs. It won't even make anything focusable by keyboard.

## Do aria-roles make things clickable?

Nope. A `<div>` with an aria-role will interact with your mouse -exactly- like a `<div>` without one.

## Do aria-roles show I care about accessibility?

Not really. It might show you know aria-roles exist. It might just mean you're good at copy/pasting things. Aria is not a good or bad practive in itself.

## Do aria-roles override the HTML-element?

Nope. The previous questions and examples might already answer that a bit. A `<div>` with a button-role is still a `<div>`.  It still has the same [allowed attributes](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element) as any other `<div>`.

This also means (and this is an interesting bit) that adding a `role="img"` does not make an element support an `alt`.  [How the accessible name is calculated](https://www.erikkroes.nl/blog/anchor-link/#how-is-the-accessible-name-calculated) does not change!

## Do aria-roles add sparkles? Glitter? Magic?

No. None of that. And I'm not a big fan of glitter really. So I take that as a win.

## What do aria-roles do then?

Not much and a whole lot. Aria-roles change the [semantics](https://www.erikkroes.nl/blog/semantics-what-does-it-mean/) of an element. It changes what an element communicates it is.
So a `<div role="img">` communicates (in code) that it intends to be an image. This is essential in any situation where the visuals of an element don't play a role. For example, when somebody can not see `<div>` is actually a `<button>`. You should really add the correct aria in that case. Or even better, just use an actual `<button>`. Because then you don't have to consider aria, or keyboard interaction, or if it's clickable, or any other aspect that you might miss (you don't know what you don't know).

## And what is the answer to the trick question?

For all the accessible name, the code might as well have been:
`<div>I'm the contents</div>`

And I'm sorry, but a `<div` does not allow a "[name from content](https://www.w3.org/TR/accname-1.2/#step2F)". In other words: the contents are not used and the item has no accessible name.

---
title: An audit won't solve your issues
description: >-
  Accessibility audits are great, except when you want to solve issues.
  Structural issues require inspection beyond the surface, and solutions beyond
  patching up.
date: 2023-10-04T22:00:00.000Z
cover: /assets/media/iceberg.png
cover_alt: >-
  An iceberg float in a see. As is typical with icebergs, only a small part of
  it is visible above water.
---

Accessibility audits are great, except when you want to solve issues. Structural issues require inspection beyond the surface, and solutions beyond patching up.

## What is an accessibility audit?

An accessibility audit is an evaluation of your website or app by an accessibility specialist. Often they'll follow the [Website Accessibility Conformance Evaluation Methodology](https://www.w3.org/TR/WCAG-EM/) (WCAG-EM) and check if your digital property conforms to the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG/) (WCAG).

{% image "./src/assets/media/iceberg.png", "An iceberg float in a see. As is typical with icebergs, only a small part of it is visible above water." %}

In practice, this means you'll define what needs to be audited and select a representative sample together. The specialist then does a thorough evaluation of these selected pages, and creates a report mentioning everything that must be improved for conformance.

(And then this beefy report vanishes in a drawer, never to be seen again. No, not really. But this is the fear of many auditors, and might be a failure of the report. A good report ideally tells you what can be improved, why it should be improved and how it should be improved. It's understandable and actionable. And I hope there aren't any in your drawers.)

## What's the problem then?

There's not exactly a problem. Audits are great for compliance. They're great for checking what the state of things is. A doctor also starts by checking symptoms. But that's the thing. An audit looks at an end-result. Often what's found in an audit is a sign or indication of something underlying. It tells you about a systemic issue.

### Time for an analogy!

Imagine you're going to a restaurant. You order soup. (I don't order soup very often but it's practical for the analogy.) You take a good look at your soup and you discover a hair. That's not how you'd want to eat your soup. The hair is removed or you get new soup, restaurants vary, and you now have eatable soup.

This means the issue is fixed right? There was a problem. It was spotted. It was handled. Done!

Removing one hair fixes one instance. And that's fine. You don't want to wait for your soup while they fix this once and for all. You just want soup.

But that's the thing that should follow from this. They should have a thorough look of where this hair came from. Do more hairs end up in soup? Is hygiene being taken seriously in the kitchen? By everybody? They don't want to worry about hairs with every cup of soup that goes out. Maybe it happens with other meals as well, but they just haven't noticed!

An audit is a way to spot a symptom or an outcome at one point in time. But if you actually want to solve the issue structurally, also for new versions, other instances, variations, etc.. you'll have to dig deeper.

## How do we dig deeper?

Now that's the challenge of a good accessibility-focussed person. They could start at the audit report and analyze. Is the issue a one-off, or does it happen more often? Does it always happen in the same component, or feature? Is it more widespread? Is there an underlying issue maybe, that causes multiple issues on the surface? Is it a misunderstanding that needs training? Is it a reusable component that needs a fix?

Or they could start from somewhere else. Pages and apps aren't built in isolation these days. Often they're started from something much more abstract. They might start with requirements, branding guidelines and foundational design agreements. Those might be turned into a specification. Then the specification gets designed. Annotations are added to the design. A developer starts working on the annotated design. There's some back and forth between the designer and the developer. The developer delivers a component.
Then the whole cycle might start again for an even bigger component that's composed of multiple smaller components. And another cycle. And then the really big components become a feature. And multiple features become a webpage.

That's how modern websites get built in large organizations (or a variation of that process). For structural solutions, I suggest follow the same route. Don't start at the end. [A muffin that you try to stuff with some blueberries after baking... just isn't the same as a blueberry muffin.](https://www.clarityconf.com/session/baking-accessibility-in) Accessibility issues should be tackled at the source, not patched up in the end-result.

So when you audit a website to improve accessibility, and not just reach compliance, maybe start at the components. Maybe first look at those structural building blocks that get reused and are the foundation of every page on the site. Then see how those blocks are composed. Does that introduce new issues? Are they used properly? Maybe there's something in the documentation that can be improved?
Then follow the "route of composition" until you reach the end result. Keep tracking if issues are caused. You'll know exactly where problems are introduced when following this route. Which means, you'll know exactly where to fix them as well.

## Concluding

There's some overlap with something I wrote before called [Compose your components](https://www.erikkroes.nl/blog/compose-your-components/). And it all sounds so logical (at least to me) when looking at it like this. How we build websites has changed, but auditing has not.
You can’t make grass grow faster by pulling on it. If you want to fix your grass, find out why it's growing like it does. Change the soil, fertilize, water, cut.. do whatever's needed but look beyond the obvious if you want a root cause. An audit spots the tip of the iceberg (hence the image of the iceberg I added to this writing) but you wan't to know what's beneath the surface. 

If you want to make something accessible, focus on the cause and not the symptoms.

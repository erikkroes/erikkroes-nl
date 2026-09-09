---
_template: post
title: Accessible colours don't exist
description: I often see claims about "accessible colours". Colours can play a
  huge role in accessibility. Colours also stand out for me when they're the
  cause of issues. They're very visible! (Or sometimes, it's actually the lack
  of visibility). But there is no such thing as an accessible colour.
date: 2026-09-09T11:17:00.000+02:00
---
I often see claims about "accessible colours". Colours can play a huge role in accessibility. Colours also stand out for me when they're the cause of issues. They're very visible! (Or sometimes, it's actually the lack of visibility). But there is no such thing as an accessible colour.

## The role of colour in WCAG

When we say accessibility, we often mean WCAG-compliance. And when we talk about colour in WCAG, it's often about contrast.
Regular text in WCAG needs a contrast of **at least** 4.5∶1 to its surroundings. If we're talking about text that's 24px or more, 19px and bold or user interface components, the requirement is lowered to **at least** 3∶1.

There are plenty of tools to test this with. Figma extensions can tell you. Your browser tools can show contrast. VS code can help you out. There are separate tools. Tons of websites. And so on.
Finding this ratio should not be an issue (but let me know if I can help).

## A colour can not be accessible

When a logo or a colour from branding is very bright, it will have a very low contrast on a white background. Take, for example, the McDonalds logo:

![](/assets/media/mcdonald-s_golden_arches.svg.webp "The \"Yellow M\" or golden arches McDonalds Logo")

That yellow is about 1.5∶1 on a white background. On an off-white background, it's even worse!

Does that make it an inaccessible colour? No, it could still work great on a dark background.  

## So how do we improve?

In the example, yellow doesn't work on a bright background, but it does on a dark background. The accessibility of contrast is not a characteristic of a single colour. You need two colours to have a contrast.

Your brand needs colour combinations. Do you want your designers to use your brand colour on a white background? Make sure it gives a contrast of at least 3∶1. White text on a background with your brand colour? Same story.
Want to use your brand colour with white for regular text? Make sure it's at least 4.5∶1, or avoid it.

You can't have accessible colours, but you can have a palette of colours that makes it easier to create accessible experiences.

## Some guidelines
Only give your designers colour combinations that result in sufficient contrast. 
- If a combination is less than 3∶1, use is **very** limited.
- If a combination is between 3∶1 and 4.5∶1, only use it for large text and user interface components.
- If a combination is very close to enough, consider adjusting one or both colours to improve it. For example, if your brand colour is 2.9∶1 and you can make it 3.8∶1, you give your designers a colour that can be used with white, but also other  bright colours!)

## Concluding
Offer the right resources to facilitate accessible experiences. In this case: offer designers a palette with contrasty colour combinations and you enable them to do the right thing. 
An impractical palette can be a chokepoint, causing contrast issues all over the place. A practical palette can be leveraged to have a huge practical impact.
(And yes, there's more to colours than just contrast.)



---
title: 'How to find the accessible name  of a button with Google Chrome'
description: >-
  You just ran an automated test and it tells you "Buttons must have discernible text". What does that mean, why does it matter, and how do you check this yourself?
date: 2024-09-03T22:00:00.000Z
cover: /assets/media/volde-venn.jpg
cover-alt: >-
  A venn diagram with "buttons" in one circle, and a a picture of voldemort from the "harry potter"-franchise in another. The overlap between the two is called "things that go unnamed".
---

You just ran an automated test and it tells you your buttons don't have accessible names. What does that mean, why does it matter, and how do you check this yourself?

{% image "./src/assets/media/volde-venn.jpg", "A venn diagram with 'buttons' in one circle, and a a picture of voldemort from the 'harry potter'-franchise in another. The overlap between the two is called 'things that go unnamed'." %}

@[toc]

## What is an accessible name?

{% df "Accessible name" %}

For full clarity in the context of a button. This is not the same as the value of the `name`-attribute.

## Why do accessible names matter?

When you follow purely legal and compliance-reasons, {% term "WCAG", "WCAG" %} Success Criterion [4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) requires user interface components to have an accessible name. 
An accessible name is a way to identify a component. It means that a person using a {% term "screen-reader", "Screen reader" %} can find out what the purpose is of a component. Where does a link lead? What does a button do? What input is required? And the same goes for other types for  {% term "assistive-technology", "assistive technology" %}. For example, a person that uses voice control knows what to call a button, when it asks for a button to be activated.
So in short, accessible names make it possible to identify components. Without accessible names, a website would be like a hallway of unmarked doors.
And if you didn't come up with this already, this goes for more than buttons. But buttons are just such a practical example to get started with!

## How do I check for accessible names on buttons?

1. **Find a button.** To check if a button has an accessible name, we first need a button! 
2. **Open your Chrome DevTools.** You should open Chrome, open the page that contains the button you would like to check, and [open Chrome Devtools](https://developer.chrome.com/docs/devtools/open).
3. **Open the [Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane).** This is a great tool inside Chrome that shows you tons of accessibility-related information. Please do dive in further!
4. **Inspect the button.** Is inspect the right term? Maybe it's select. Make sure that in your DevTools, the button-element is selected.
5. **Check if the button has an accessible name.** With your button selected, the Accessibility pane will show information about the button. Let's go through the information that's shown.

### What does the Accessibility pane show?

1. The first section is a rendering of the {% term "accessibility-tree", "Accessibility tree" %}. This goes beyond just the button, and shows it in a context. 
2. The second section shows {% term "aria", "ARIA" %} attributes. These may or may not be present. This is situation-dependant, and is not a good or bad sign by itself.
3. The third second is the "Computed Properties". This is the part that we're now interested in. The first sub-section here is called "Name".

Assuming you want your button to be named "Menu", the sub-section should be labelled: Name: "Menu". If your button is not named, it will state: Name: "".

That concludes what we want to check here. We basically have 2 options:
- **Name: "".** This means there's no accessible name. Which means your page has accessibility-issues and does not comply with WCAG SC 4.1.2.
- **Anything else.** You've got an accessible name! You'll still have to check if it's the one you intended, and if it's even a good name. I mean, it could be some unreadable character from an icon font. But it's not missing, and that's good!

### What more is in the sub-section?

For the purpose of finding a name, we didn't need to expand the sub-section. But it can be expanded, and there's some interesting stuff in there!
When looking at a button, you can expect 5 items there:

1. aria-labelledby
2. aria-label
3. From label
4. Contents
5. title

These are the steps Chrome goes through to calculate/compute the accessible name. That's the idea between calling this section "Computed Properties". The name is the result of a computation. How the computation works can be read in "[Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/)"; a W3C Working Draft from 2024. But using Chrome can be much faster an easier.

What Chrome does is go through the 5 items mentioned before, and use the information to compute the accessible name.
1. First it checks if there's a relevant [`aria-labelledby`-attribute](https://www.w3.org/TR/wai-aria-1.3/#aria-labelledby). This attribute can refer to one or multiple IDs of other elements, that together result in an accessible name. It can refer to one element, but it can also concatenate multiple.
2. The second option is an [`aria-label`-attribute](https://www.w3.org/TR/wai-aria-1.3/#aria-label). This attribute accepts a string that will label the element.
3. Just like an `<input>`, buttons can also be labeled with a correctly referenced `<label>`-element.
4. An accessible name can also be computed from the contents. This is probably your most common way of naming things. For example, you might have a button that opens a menu: `<button type="button">Menu</button>`. The content is used in this case. Good to know: sometimes buttons have nothing more than images (like icons) in them. The image is then the content. The accessible name of the image is then the name of the content. Which means that if the image has no accessible name, the button will lack one as well!
5. As a last resort, Chrome checks if a `title`-attribute is present.

Analyzing a button by going through this list can be insightful. It might explain why your `title`-attribute isn't doing what you thought it would. It might show that an attribute is overriding your intended name.

## Note

I usually don't like writing techniques. What I'm writing here is how you can easily check accessible names with the version of Chrome I have right here. Which happens to be version 128. This means there's a factor of ephemerality; the value of this writing might be limited in the (near) future. But I'm writing this anyway. I think the immediate value is there, and part of this will outlive Chrome-versions. 
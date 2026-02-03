---
_template: post
title: Accessible inline collapsible
description: How to offer depth to a text without linking elsewhere.
date: 2026-02-02T14:18:00.000+01:00
---

I'm writing an introduction to accessibility for [inklusivo](https://inklusivo.nl/). It's like I'm trying to summarize a decade of experience. That's not easy. 

One of the challenges is one that I encounter often: how in-depth do I want to go?

Write something in-depth, and it will be too long and extensive for what I have in mind. Write something short, and I might not be explaining enough. Or maybe people find it too superficial.

I do have a glossary on my website, and I'm trying to expand and update [a glossary for inklusivo](https://inklusivo.nl/glossary/). I think it's already a great step to be able to link to definitions and further resources this way. But linking to other pages breaks up the flow of reading. So for this new creation, I wanted to improve on this!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qENYrWJ" data-pen-title="Accessible inline collapsible" data-user="erikkroes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/erikkroes/pen/qENYrWJ">
  Accessible inline collapsible</a> by Erik (<a href="https://codepen.io/erikkroes">@erikkroes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>
      
## The concept
HTML has a `<summary>` and `<details>`, AKA the [disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details), since about 2020. You can display a term in an element, and the element can expand to show details. I could already imagine it: a sentence has a bit of jargon in it and a visitor can chose to expand it as they wish. And all that with a nice native HTML element. And as MDN states: "The contents of the `<details>` provide the accessible description for the `<summary>`." That sounds practical for accessibility as well.

Except the `<details>`-element is so-called [_flow content_](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#flow_content). Flow content can not go into a paragraph. And I didn't want to break up reading. I want text to stay intact; like when you add a link to a text. I didn't want to break up the paragraphs.

## To the drawing board
Ok. So the native HTML solution was no solution. That's a shame because I do like this combination of elements. Just like I have a weak spot for a nice `<dl>`, or `<dfn>`.

A `<dl>` would not be useful for a single definition. So I tried to build something with `<dfn>` to mimic `<details>`. My first idea was something like this (excluding the JavaScript-part):
```
<section>
  <dfn tabindex="0" aria-expanded="false" aria-describedby="explanation">Term</dfn>
  <span id="explanation">This is the explanation of the term.</span>
</section>
```

There would be a paragraph with a term that needed further explanation. This term would be inside a `<dfn>`, and it could expand and show a `<span>` with that explanation. `<dfn>` would provide some of the relationship in code, but I would add an `aria-describedby` as well to strengthen it further.

I say "would" because it didn't work. `<section>` is also flow content and can't go inside a paragraph. I also found support for `<dfn>` is rather weak. Screen readers don't do much with it. And `aria-expanded` is not supported `<dfn>`. Which is quite logical, as it's not an interactive element.

## The solution

What is phrasing content, well supported, and interactive by default? It's our friend `<button>`!

This is what I've built now.

### HTML
```
<button class="dfn" aria-expanded="true" aria-describedby="explanation">term</button>
<span id="explanation">This is the explanation of the term.</span>
```

A button that, with the right styling, does not break up the flow of the reader. The content of the button is the accessible name of the button. `aria-expanded` communicates the state this widget is in. `aria-describedby` refers to the explanation and gives the button a description.
When activating the button, the `<span>` becomes visible to expand on the term in the button.

### CSS
```
.dfn {
  all: unset;
  text-decoration: underline;
}

.dfn::after{
  content: "▲" / "";
  display: inline-block;
  font-size: .9rem;
}

.dfn + span {
  display: block;
  padding: 1.25rem;
  border: 0.0625rem solid;
  background-color: whitesmoke;
  border-radius: .5rem;
}

.dfn[aria-expanded="false"]::after{
  content: "▼" / "";
}

.dfn[aria-expanded="false"] + span {
  display: none;
}
```

The styling starts with removing all button-styles (beware, this might impact focus styling) and adding an underline for affordance. Then there's the `::after` pseudo-element. It shows a little triangle to visually communicate what `aria-expanded` does in code. The `/ ""` is like alt text, but for pseudo-elements. I'm not even sure what it's called, but it's [awesome](https://drafts.csswg.org/css-content-3/#alt). If you add an image here, make sure it doesn't get pronounced by screen readers.
 `display: inline-block;` removes the underline from this part. I've experimented with different visual solutions for making clear the widget is interactive, and grouping elements. I found borders, backgrounds and everything else I tried to break up the reading experience too much. In the end, a simple underline and arrow are minimal and functional enough. I assume icon-designers will disagree.
Then we style the span to display as a block (wide) with a bit of spacing, border and background to make it stand apart. We add another `::after` for when the widget is in another state, with a different triangle. And we add `display: none;` to hide the `<span>` when the widget is closed.
There is no closed/open-class or anything alike. We hook into `aria-expanded` to style the different states.

### JavaScript

```
let elementsArray = document.querySelectorAll("button.dfn");

elementsArray.forEach(function(e) {
  e.setAttribute("aria-expanded", "false");
  e.addEventListener("click", function() {      
    e.setAttribute("aria-expanded", e.getAttribute("aria-expanded") === "true" ? "false" : "true");
  });

  e.nextElementSibling.addEventListener('mousedown', () => {
    e.nextElementSibling.addEventListener('mouseup', () => {
    let selection = window.getSelection();
    
    if(selection.toString().length === 0) {
      e.setAttribute("aria-expanded", e.getAttribute("aria-expanded") === "true" ? "false" : "true");
      }
    });
  });
});
```

The JavaScript is quite minimal as well. When loaded, it finds all widgets. After that, it closes all widgets. When it doesn't load, all widgets stay open. This means it functions like a progressive enhancement. After closing them all, it adds an `EventListener` to the buttons. When activated, they toggle the `aria-expanded`-attribute. It toggles between `true` and `false`, and does not remove the attribute when `false`. `aria-expanded="false"` indicates an element can be opened, which is valuable.
As a "usability-bonus", it adds an `EventListener` to the `<span>`s as well. This makes it easier to close once opened. This does require some extra JavaScript. Adding an `EventListener` for `click` can make it really hard to select the text. Dragging a mouse to select the text will close the widget. Instead we listen for a down-event, and an up-event, and check if nothing is selected. If no text is selected, we treat it like a click.

## Conclusion

That's how I built/build an accessible inline collapsible. If you read this shortly after publishing, make sure to check back a week later or so. I bet people will give great feedback and this example will be improved. A live version can be found on [codepen](https://codepen.io/erikkroes/pen/qENYrWJ). 
[Curtis Wilcox](https://mastodon.social/@cwilcox808@c.im) extended on the codepen with 2 different versions. Both of them use the new `popover`-attribute turning them into tooltips instead.
Feedback can be given on any of the numerous social media platforms I'm on, including the [Access Club Discord-server](https://discord.gg/FSRZDPDzrQ).
This pattern has a lot of overlap with a tooltip. [Tooltips in the time of WCAG 2.1](https://sarahmhigley.com/writing/tooltips-in-wcag-21/) by Sarah Higley is a must-read on that topic.

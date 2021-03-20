---
title: Accessible HTML Toggle Button (Switch)
description: Everybody loves toggle switch on mobile, or so I've heard. But if you're
  building a website, how do you reproduce this without excluding people.
date: 2020-06-27
cover: ''
cover-alt: ''

---
Everybody loves toggle switch on mobile, or so I've heard. But if you're building a website, how do you reproduce this without excluding people.

## The result

Let's start with the most important part. This is the end result as featured on Codepen:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="erikkroes" data-slug-hash="WNrOdWp" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Toggle Button">

  <span>See the Pen <a href="[https://codepen.io/erikkroes/pen/WNrOdWp](https://codepen.io/erikkroes/pen/WNrOdWp "https://codepen.io/erikkroes/pen/WNrOdWp")">

  Toggle Button</a> by Erik (<a href="[https://codepen.io/erikkroes](https://codepen.io/erikkroes/pen/WNrOdWp "https://codepen.io/erikkroes/pen/WNrOdWp")">@erikkroes</a>)

  on <a href="[https://codepen.io](https://codepen.io/erikkroes/pen/WNrOdWp "https://codepen.io/erikkroes/pen/WNrOdWp")">CodePen</a>.</span>

</p>

<script async src="[https://cpwebassets.codepen.io/assets/embed/ei.js](https://codepen.io/erikkroes/pen/WNrOdWp "https://codepen.io/erikkroes/pen/WNrOdWp")"></script>

## What is this?

When I use my phone, I expect a [Switch](https://developer.android.com/reference/android/widget/Switch) (that's how android calls them) to instantly change a setting. It won't just be selecting an option (like with a checkbox) but the selection will also be submitted instantly.  
 The web is full of examples on how to style checkboxes to look like a switch, but that doesn't help me much further when I want something more like mobile.

## Bit by bit

### HTML

Looking at the HTML code, you might first notice the `label`. By default, a button will take its contents to create an [accessible name](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/). Using a `<label>` and referencing it by using `for=` and the id of the `<button>`, overrides this default behaviour. The content of the `<label>` becomes the accessible name of the `<button>`.  
 It also makes sure that people can click, press, touch or lick the `<label>` to activate the resulting Switch, just like on Android.

Then the radical part of this creation, I'm using a `<button>`. Why? Because I want something to change instantly which a checkbox (`<input type=checkbox>`) really should not be doing. In my experience, checkboxes that change things often clash with [WCAG Criterion 3.2.1: On Focus](https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html). A `<button>` aligns better with the goal of instant change.

The first attribute is `type=button`. This should not matter, because we override the semantics later with a `role`, but we sure don't want this to be a submit button.

The `id` is needed to create a programmatic relationship between the `<label>` and the `<button>`. Not doing so would clash with [WCAG Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html), would pretty much defeat the purpose of the `<label>` in the first place, and should properly annoy people that use assistive technology (voice commands, screen readers, and more).

The `role="switch"` is where much of the magic happens. It is a [WAI-ARIA Attribute](https://www.w3.org/TR/wai-aria-1.1/#switch). It can communicate semantics that might not be natively present within HTML, and [should be used as little as possible](https://www.w3.org/TR/using-aria/#rule1). A Switch like this is a perfect example for such a use case.

Whenever you use the `role="switch"`, there is another required [WAI-ARIA Attribute](https://www.w3.org/TR/wai-aria-1.1/#switch). You have to add `aria-checked` which takes either a true or false value. This makes sure that you're not just communicating the name and role in code, but also the value of the Switch (on or off). This helps you pass [WCAG Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

Then within the `<button>` we have 2 `<span>`s. They toggle visibly between on and off. If there's one thing that really annoys me with switches; it's how confusing they can be. They're like the USB-plug of HTML. I often have to turn them on and off a few times before I understand which settings is which. That's why we communicate the state in the code (with `aria-checked`), by changing colour between grey and green, and by switching between the 'on' and 'off' visual label.

### CSS

The CSS is about as minimal as I thought would be possible. It makes everything nice and rounded. It does not make it animated, or possible to actually slide between 'on' and 'off'. But feel free to add that yourself. The colours should meet the WCAG contrast requirements though.

The CSS does make sure that in 1 state, the first `<span>` in the `<button>` has the same color for text and background. And in the other state, the second `<span>` has those colours. This way it looks like the text disappears, but that's only visual.

### JavaScript

The JavaScript finds the button in the code, adds an eventListener to it and makes `aria-checked` toggle between 'true' and 'false'. It could also remove the `aria-checked` instead of toggle to 'false'. I chose not to, to make the code slightly more readable and less bloated.

## Further reading

A lot of this component was based on [the example of MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role). It's a great resource and starting point for everybody.  
 If you want to get more technical than this writing, you could look at [Scott O'Hara](https://scottaohara.github.io/a11y_styled_form_controls/), who has written a great deal more about the subject. Thanks for that!
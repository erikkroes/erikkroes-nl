---
title: The Guide to Accessible Web Components
description: Web Components are a newly supported standard. They're a great match
  for Design Systems because they're futureproof and work with any framework. Building
  proper UI Web Components can be quite a task though, especially if you want them
  to be accessible. Here are some pointers on what to look out for.
permalink: blog/accessibility/the-guide-to-accessible-web-components-draft/
date: 2020-03-10
cover: ''
cover-alt: ''

---
Web Components are a newly supported standard. They're a great match for Design Systems because they're futureproof and work with any framework. Building proper UI Web Components can be quite a task though, especially if you want them to be accessible. Here are some pointers on what to look out for.

> Throughout this article I'll use [Lion](https://github.com/ing-bank/lion) a few times as an example. Lion is a collection of white label UI Web Components. There's more information about Lion in the <a href="#conclusion">conclusion</a>.

## Contents

- <a href="#what-are-web-components">What are Web Components?</a>
- <a href="#what-is-shadow-dom-and-light-dom">What is shadow DOM, and light DOM?</a>
- <a href="#extending-elements">Extending elements</a>
- <a href="#accessible-ui-components">Accessible UI Components</a>
  - <a href="#focusable">Focusable</a>
  - <a href="#keyboard-interaction">Keyboard interaction</a>
  - <a href="#visible-states">Visible states</a>
  - <a href="#functional-states-and-properties">Functional states and properties</a>
  - <a href="#semantics">Semantics</a>
  - <a href="#accessible-name">Accessible name</a>
  - <a href="#relationships">Relationships</a>
  - <a href="#global-standards-and-conventions">Global standards and conventions</a>
  - <a href="#browser-bugs-and-variations">Browser bugs and variations</a>
- <a href="#the-accessibility-object-model">The Accessibility Object Model</a>
- <a href="#conclusion">Conclusion</a>
- <a href="#further-reading">Further reading</a>


## What are Web Components?

Web Components are a set of standards:

- [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/): A way to create your own HTML elements
- [ES Modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/): Self-contained modules of JavaScript code that can be reused and extended
- [HTML Templates](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element): Reusable fragments of DOM
- [Shadow DOM](https://polymer-library.polymer-project.org/3.0/docs/devguide/shadow-dom): Encapsulation of DOM

Together these standards enable "Reusable extendable encapsulated self-contained components for the web". That's quite a mouthful, but not very clear.

In practice, this means you can create your own HTML elements. These elements have their own bit of encapsulated DOM.  In this, and many web-related cases, DOM stands for Document Object Model. The DOM is how we see an HTML or XML document. MDN states "The DOM represents the document as nodes and objects."  MDN has a rather [good explanation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
It means the HTML element you make can't be touched or influenced by whatever is outside of the element. They can't be accidentally styled, and they won't mess with your global styles either. And because it's an ES Module, the whole element can be distributed and extended. All these aspects together make up a Web Component. 
ES Module stands for EcmaScript Module. It's how JavaScript works with modules and a standard that's [supported by all modern browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_support). 🎉

A practical example would be a [Google Maps Web Component](https://github.com/keanulee/good-map). This Web Component shows a full interactive map on your page with only a few lines of code. You would have to import some JavaScript on your page that defines the component:

```html
<script src="good-map.js" async defer></script>
```

After that, you can use your custom element anywhere on the page.

```html
<good-map api-key="AIzaSyAQuo91bcoB-KwWXaANroTrzpNZRFcNJ1k"
    latitude="52.1664"
    longitude="5.9075" zoom="3"></good-map>
```

Notice how the element name has a dash? That's part of the Custom Elements specification and makes it easier for the browser to recognize them.

A not so practical example would be a [spacer-gif](https://github.com/erikkroes/spacer-gif) Web Component. (A spacer-gif is an old an redundant technique that does not need a remake.)

```html
<spacer-gif height="1" width="1"></spacer-gif>
```

A Lion example could be [`lion-switch`](https://lion-web-components.netlify.com/?path=/docs/buttons-switch--default-off).

```html
<lion-switch label="Label Text" help-text="Help text"></lion-switch>
```

And all that goodness is based on widely supported web standards.

## What is shadow DOM, and light DOM?

"Indeed, that sounds pretty good so far, but what's the catch?"

As the British will soon discover, there are some downsides to isolating yourself.  Let's say you make a card component. The interface for using it (what you see in your editor or browser) could look like this:
```html
  <my-card>This is the card content</my-card>
```

The component, when inspected in the browser, could look like this:

```html
  <my-card>
    #shadow-root (open)
      <div class="card-wrapper">
        <div class="card-header">
          Presenting the card content:
        </div>
        <div class="card-content">
          <slot>
            <#text>↴
          </slot>
        </div>
      </div>

    This is the card content
  </my-card>
```

A whole chunk of DOM ("The DOM represents the document as nodes and objects." Remember from [before](#what-are-wc)?) is rendered by the component and put into the shadow-root section. Inside the `<slot>` it refers to the content we put into the element in the first place. All the DOM that is added, is shadow DOM. All the other "normal" DOM, is what we call light DOM. It's the part that's always visible.
As the shadow DOM is completely encapsulated and isolated, it is also completely disconnected. It's almost like it's a completely different document like an iframe.  Thankfully, keyboard navigation does work through Shadow DOM boundaries. Which means you can `<TAB>` in and out of Shadow DOM.

This becomes a challenge when you want to point a label to an input to create an explicit relationship. In plain HTML, this would be:

```html
  <label for="example-input">Label text</label>
  <input id="example-input" type="text">
```

When one of both (the `label` or the `input`) is in the shadow DOM, they're in a completely different context. This makes it impossible to refer to eachother.
This same dillema also goes for WAI-ARIA attributes like `aria-labelledby`, `aria-describedby` and other that reference an ID. You need either both elements in the shadow DOM, or both of them in the light DOM. Light DOM does not mean that they both have to be in the same slot though. Light DOM is basically all the DOM that isn't shadow DOM.

In the [`lion-input`](https://lion-web-components.netlify.com/?path=/story/forms-input--label) we let the developer declare a label in the label slot. This label ends up in the light DOM.

```html
<lion-input>
  <label slot="label">Label text</label>
</lion-input>
```
The component places an input in a `slot="input"`, help text in `slot="help-text"` and feedback in `slot="feedback"`. This means the input can be connected to the label, but also that we can use `aria-describedby` to connect the input to help text like instructions and feedback like error messages.

## Extending elements

As it stands right now, it is only possible to create a Web Component by extending a generic HTML element (`HTMLElement`) or another Web Component (which should be somewhere deep down, also an extension of `HTMLElement`).

For accessibility, it could have been a big win if we could extend any element. Imagine you could, for example, extend a native button (`HTMLButtonElement`). You would inherit all its behaviour and it's semantics, and you would only add on to that. You'd have a solid fundament upon which you could build. 


{% image "./src/assets/media/dragons.jpg", "4 panel comic. Panel 1 a Little kid on santas lap says: For Christmas I want a dragon. Panel 2 Santa replies: Be realistic. Panel 3 Little kid reconsiders: semantic HTML everywhere. Panel 4 Santa holds a paper to start writing and asks: What color do you want for your dragon? Girl replies: red" %}


The [specification](https://github.com/w3c/webcomponents/issues/509) exists but Safari [has stated](https://github.com/w3c/webcomponents/issues/509#issuecomment-230700060) to not support this feature. Part of the beauty of Web Components is that it's a supported standard. So even though there is a [Polyfill](https://github.com/ungap/custom-elements-builtin) for Safari, it creates a path with future uncertainty.

## Accessible UI Components

The most popular usecase for Web Components is probably that of creating custom user interface controls. As we can't extend any native elements, we often end up with either wrapping a native element, or recreating its behaviour by ourselves. Wrapping is often the easiest and most solid solution. Recreating is basically the same as taking a `<div>` as a starting point.
There are so many aspects that come together in a single components, that it is really easy to overlook a feature or behaviour. And when you forget or fail to implement something, you end up creating something that's lacking compared to a native element. That's probably the exact opposite of what you're trying to achieve.

Here is an overview of aspects that need special attention when creating an accessible user interface control. These points are not specific to Web Components. They are just as relevent for React, Vue, Svelte or any other framework.

### Focusable

If your custom control is interactive, make sure it is keyboard focusable. For simple controls with a single interactive element, this means adding `tabindex='0'` to your control. For more complex controls you might need to implement a [roving tabindex](https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex#managing_focus_in_components) or use [`aria-activedescendant`](https://www.w3.org/TR/wai-aria/#aria-activedescendant).

### Keyboard interaction

Users should be able to use your interactive control with a keyboard. For many design patterns, suggested keyboard interactions can be found in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/).

### Visible states

Interactive controls have several states like focus, hover and active. These should all be clearly visible, and, preferably, each have their own distinctive styling.

### Functional states and properties

An interactive control can have functional states as well. For example, a disclosure widget (or expandable, accordion, expando, ...) can be open or closed. This state needs to be not just visual, but communicated in code as well. This can be done by toggling  [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) on your control. 
The same goes for properties like [`aria-multiline`](https://www.w3.org/TR/wai-aria-1.1/#aria-multiline). They communicate properties that might be implicit in native elements, that have to be added manually for assistive technology when you're building custom controls. WAI-ARIA has many [states and properties](https://www.w3.org/TR/wai-aria-1.1/#aria-multiline) to aid in this.

### Semantics
Native HTML elements have a semantic meaning and are [mapped to WAI-ARIA roles](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). Their semantics are implicit and always there.
A custom element starts out with no role at all, but you can assign one explicitly. WAI-ARIA offers a wide range of [roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) that should cover all use cases. WAI ARIA is more explicit than native semantics though. It's more bolt-on than built-in.
You might notice when using Windows High Contrast Mode, a special tool for Windows. It [does not care for your ARIA attributes](https://www.scottohara.me/blog/2019/02/12/high-contrast-aria-and-images.html#whcm-cares-not-for-your-aria-attributes).

### Accessible name

Interactive controls must have a name for them to be identified by. For example, a `<button>` with the text "Save" can be presented by assistive technology as "Save, button". In this case "Save" is the accessible name of the element. The name is determined by the [Accessible Name and Description Calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation) and there are [multiple ways of adding an accessible name](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/).

### Relationships

Visually, it might be clear that certain elements have a relationship. For example, a short text next to an input will likely be the label of that input. Not clarifying those relationships in code can make it impossible for assistive technology to recognize them though. WCAG Success Criterion 1.3.1 mentions quite some [sufficient techniques](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html#sufficient) to cover this issue.

### Global standards and conventions

Creating custom elements requires awareness of global standards and conventions. Users expect components to work in a certain way. Reinventing the wheel often leads to a confusing user experience. Following standards and conventions will prevent confusion and create a consistent experience for users.

### Browser bugs and variations

To create an element that works the same way on each browser and platform is a big challenge. Some native elements even fail to do so. For example, when I use a `<select>` in Firefox on Mac OS, it will behave differently from when I open it in Chrome. There will even be a difference between Chrome on Mac OS and Chrome on Windows. The nuances and details of making elements work consistently across platforms is a really big challenge.
Bugs can be even harder to find or circumvent. For example, the [WAI ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/) recommends using `aria-activedescendant` to control focus when using a `role="combobox"`. That sounds great, untill you discover that this combination doesn't actually work in all browsers.

## The Accessibility Object Model

The [Accessibility Object Model](https://github.com/WICG/aom) (AOM) is a proposed addition to the web platform to make the accessibility API of browsers more transparant and usable for developers. Support for the AOM in browsers would be of great value for Web Components. But as it is still under development and largely unsupported, I'll leave further explanation to others like [Hidde de Vries](https://hiddedevries.nl/en/blog/2019-07-22-meaning-without-markup-accessibility-object-model).

{% image "./src/assets/media/robust-fix-of-an-issue.jpg", "Electric wiring outdoors, covered with a little paper umbrella" %}

## Conclusion

It is very much possible to create accessible Web Components. They are ideal for large organizations where a specialized team can make the best building blocks, and give both their developers and users a great consistent experience. It takes a lot of time, knowledge and effort to build these components though. If you'd ask me...

> Everybody should use Web Components
> Few people should build them

To ease some of that pain, the Web Components I work on professionaly have an open source base layer called Lion. This is a collection of white-label Web Components that you can easily extend, style and customize. They have been built with all the considerations mentioned above. You can view a [live demo](http://lion-web-components.netlify.com/) of all the components, or check them out on [GitHub](https://github.com/ing-bank/lion). If you find anything that could be improved, please create an issue and maybe even fix it yourself. All accessibility issues are my responsibility.

## Further reading

- [Web Components: from zero to hero](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m)
- [open-wc - Open Web Component Recommendations](https://open-wc.org/)
- [Web Components and the AOM](https://www.24a11y.com/2019/web-components-and-the-aom/)
- [The Accessibility of Web Components](https://marcysutton.github.io/accessibility-of-web-components/)
- [Web Components Punch List](https://developer.paciellogroup.com/blog/2014/09/web-components-punch-list/)
- [Web Components still need to be accessible](https://www.24a11y.com/2018/web-components-still-need-to-be-accessible/)
- [Web Components - The Right Way](https://brucelawson.github.io/talks/2014/parisweb/index.html)
- [Basic custom control requirements](https://adrianroselli.com/2019/08/basic-custom-control-requirements.html)

And please ask me anything about Accessibility! You are also welcome on [Twitter](https://twitter.com/erikKroes) or [Twitch](https://twitch.tv/erikKroes/) (I stream about accessibility weekly.
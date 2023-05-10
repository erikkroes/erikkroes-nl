---
title: 'Color and contrast, what does it mean?'
description: >-
  The color contrast ratios mentioned in WCAG can give you an insight in how
  usable your color palette is. How that works isn't very transparent. Learn
  more about how the color contrast ratio is determined, and what that means for
  you (and your palette).
date: 2021-08-31T00:00:00.000Z
cover: /assets/media/_dsc4661-edit.jpg
cover_alt: >-
  Snowy peaks of a mountain range against a bright and clouded sky. There is a
  strong contrast between the dark rock structure of the peaks and the lighter
  snow and sky.
eleventyExcludeFromCollections: false
permalink: /blog/color-and-contrast/
_template: post
---

The color contrast ratios mentioned in WCAG can give you an insight in how usable your color palette is. How that works isn't very transparent. Learn more about how the color contrast ratio is determined, and what that means for you (and your palette).

{% image "./src/assets/media/_dsc4661-edit.jpg", "Snowy peaks of a mountain range against a bright and clouded sky. There is a strong contrast between the dark rock structure of the peaks and the lighter snow and sky." %}

## Contents

@[toc]

## How it used to be

When I started auditing websites and designs, my life was still simple.

1. I'd grab a color picker tool like the [Colour Contrast Analyser](https://github.com/ThePacielloGroup/CCAe/).
2. For pieces of text, I'd pick the background color.
3. And separately I'd pick the foreground color.
4. The tool would spit out a number for me; the contrast ratio.
5. I'd apply [WCAG Succes Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). In short, if the ratio is below 3.0:1, it would lack contrast. If it's above 4.5:1, it would be fine. If it's inbetween, I'd have to check the text size. Large text (at least 19px and bold, or at least 24px) would still pass. Fail for anything else. This all assuming an audit at level AA.

Problably no big surprises for many people reading this. A small recap to make sure. I use a tool to measure the contrast between text and its background. WCAG gives us a ratio as a minimum requirement. Large text gets a bit of slack.

I didn't question the numbers, and the numbers didn't question me. Until I did.

## The fabric store

This all changed because I ran an online fabric store with my wife. An online store needs a website. We had one, but it was WordPress, and WooCommerce, and a theme, and a child theme, lots of extensions, and two versions of bootstrap at the same time. Let's say there was room for improvement in how things were built.

So I went for an adequete amount of exaggeration and thought, why not start with the basics? Why not start with... an accessible color palette?

And that's when things got interesting. I always learn things when I put myself in the shoes of people I usually communicate with. In this case, I dove into something designers usually do. And (spoiler) it's not easy to make such a color palette!

## Color, it's pretty complicated

Studying photography has taught me color is not an easy subject. You quickly touch on subjects like:

* How do eyes work?
* How does the brain interpret what it sees?
* How do we display color?

It's a colorful rabbit hole, but still a rabbit hole.

## Color models

### Red, Green and Blue

If you're reading this, I'm assuming you know something about computers. On computers we traditionally define colors with Red, Green and Blue. Why? Because displays work with tiny red, green and blue lights. And together they can be any (sort of) color. An RGB-notation can be used for this.

In CSS there is a scale of 0 to 255 for color values. 255, 0, 0 means all the red, no green and no blue. This results in red. A harsh blue would be 0, 0, 255. Orange is full red and half green: 255, 127, 0. White is 255, 255, 255. Black is 0, 0, 0. The value is from 0 to 255 because thats 256 and 2 to the power of 8 is 256 and a byte and.. before you know it I start ranting about color again.

But nevermind. WCAG works differently.

### Hue, Saturation and Lightness

There's also HSL (instead of RGB). It works with Hue, Saturation and Lightness. You might've seen (haha) it before. Hue is like having all tints in a circle. It starts with 0 (degrees) for red. Rotate to 30 and you get orange. Rotate to 60 for yellow. 120 is green. 240 is blue. 360 or 0 (full circle) is red again. Feels much more intuitive to me!

Saturation is how saturated or full a color is. 100 (percent) for full color and 0 for none. The L is for Lightness. How light an image is with 100 (percent) being white and 0 being black.

That sounds much more understandable and readable than RGB. It's almost usable! But of course, it's not. Making things easy would be... too easy? Compare the two colors in this image.

{% image "./src/assets/media/yellow-blue.png", "A big rectangle that's blue on the left and yellow on the right." %}

It's a blue (240, 100, 50 in HSL) and a yellow (60, 100, 50) in HSL. The only difference is the hue. But to our eyes and in our perception, the blue is much darker than the yellow.

{% image "./src/assets/media/red.png", "Three red squares with varying brightness. The top one is the brightest, and the bottom one is the darkest." %}

To put it in further perspective. These are three red squares. The first and brightest is 0, 100, 68. It has a contrast ratio of 3.0:1 on white. The second is 0, 100, 47 and a ratio of 4.5:1. The third is 0, 100, 36 and has a ratio of 7.0:1. The ratios were picked because they're practical in a WCAG-context. Don't read too much into them.

Now what happens if we make a grid with the same saturation, these three luminosities but different hues?

{% image "./src/assets/media/palette.png", "A grid of three by six colored squares. They're red, yellow, green, cyan, blue and magenta. The top one of each color is the brightest, while the bottom one is the darkest." %}

We get red, yellow, green, cyan, blue and magenta. They're evenly spaced on the hue-scale. They are not, however, evenly scaled in contrast. Where red a nice 3.0, 4.5 and 7.0, yellow is 1.1, 1.2 and 2.1. Much lower numbers! So the L-value is the same, but the contrast isn't. Blue is much like the opposite of yellow in this case with contrasts of 4.8, 9.3 and 12.4. Where the darkest yellow is not contrasty enough (according to WCAG) for large text (it's less than 3.0), the lightest blue is dark enough (more than 4.5) for small text even!

Check out all the contrast ratios in this table.

| Red | Yellow | Green | Cyan | Blue | Magenta |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 1.1 | 1.3 | 1.2 | 4.8 | 2.6 |
| 4.5 | 1.2 | 1.6 | 1.4 | 9.3 | 3.5 |
| 7.0 | 2.1 | 2.7 | 2.5 | 12.4 | 5.6 |

### Is that all?

Maybe you know some other models as well. There's RGBA and HSLA, which include opacity. There's HSB (Hue, Saturation and Brightness) used by tools like photoshop. There's CMYK (Cyan, Magenta, Yellow and Key/blacK) for print. Plenty of options!

And I'm not even going into Color Spaces yet here. I told you color can get complicated!

## WCAG?

Yeah sorry. WCAG uses none of those really. Contrast in WCAG is based on [ITU-R Recommendation BT.709](https://en.wikipedia.org/wiki/Rec._709). What? ITU-R Recommendation BT.709. That's not very clear.

> ITU-R Recommendation BT.709, more commonly known by the abbreviations Rec. 709 or BT.709, standardizes the format of high-definition television, having 16:9 (widescreen) aspect ratio. The first edition of the standard was approved in 1990.

That doesn't help much either probably. Sorry about that. Some things that stand out:

* It's a television standard (of course, why not?)
* It has the same color coverage as sRGB (a much used color space, relevant to computer screens)
* It has a component called Luma (component like R in RGB or H in HSL)
* It's a way to measure brightness in sRGB that takes the human eye in account

Trying to get back to why all of this is relevant. You don't measure RGB values when you use a color contrast tool. What's relevant in the end is the Luma-component. This component can be calculated from RGB (sRGB usually). The contrast is about 72% based on green (because our eyes are generally sensitive to green), 21% based on red and about 7% based on blue. Your eyes don't care much about blue.

## We have Luma!

Now we have this value, it's used to calculate the contrast. As you may have noticed in contrast tools, the value varies from 1:1 to 21:1. It's never below 1 or above 21. That's due to the formula WCAG uses. It's a practical choice as far as I know.

So if black is 1, then white is 21. White is 21 times as bright as black in this system. And black is 21 times as dark as white. The implication here, that was the big eye-opener for me, is that it's a ratio with a clearly defined range.

If black is 1, and a color X has a ratio of 3.0:1 on black.. then X has a ratio of (21/3=7) 7.0:1 on white.

Trying to phrase this in multiple ways because it took me a bit for the coin to drop. If black is 1, X is 3, and white is 21. Then white/X (21/3) is 7.

If you have a color Y that's 4.5:1 on black, then it's also (21/4.5=4.67) 4.67:1 on white.

## What does that mean for color palettes?

If you are aiming for a minimum contrast of 3.0:1 between shades, then there can be only 3. You've got black at 1. Your shade at (at least) 3.0:1. And the next shade would be at (at least) 9.0:1. Because 9.0 has a contrast of 3.0:1 to 3.0. But, you can't triple 9.0 once again. Then you'd get 27. And 27 is more than 21. You can't create something brighter than white.

The same goes when you want a minimum of 4.5:1. You can do 1, 4.5 and 20.25 (4.5 times 4.5) but multiply it more and you go beyond 21. Not an option.

If you're going for a higher contrast like 7.0:1 (relevant for text when looking at WCAG AAA), you can't even fit 3 shades. You can do 1, 7 but 7 times 7 is way too high.

## What's the practical impact on palettes?

Everybody seems to be working on dark mode these days. It's useful to know that if you want to pick one text color that works on both black and white, you don't have many options. Ideally you pick something with a ratio between 4.5:1 and 4.67:1. There's not a lot of space. It's good to be aware of how WCAG contrast influences your palette.

## Conclusion

Math is hard. The best way to understand all written here is probably by trying some tools. One of my favorites is [Contrast Grid](https://contrast-grid.eightshapes.com/) by Eightshapes. You can insert an entire palette and see what color combinations offer acceptable contrasts. You can use this [pretty usable palette by me](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFF%0D%0A%23F8F8F8%0D%0A%23E7E7E7%0D%0A%23DFDFDF%0D%0A%23B3B3B3%0D%0A%23909090%0D%0A%23727272%0D%0A%23555%0D%0A%23282828%0D%0A%23000%0D%0A%2349C4C4%0D%0A%2311A0A1%0D%0A%23107F84%0D%0A%23005F62%0D%0A%23FF968D%0D%0A%23EF605B%0D%0A%23CC4040%0D%0A%23A41F29%0D%0A%23F6C257%0D%0A%23DDAC40%0D%0A%23B68818%0D%0A%23966A00%0D%0A%23AADE6F%0D%0A%238EC255%0D%0A%23689D31%0D%0A%234B7F0F%0D%0A%23C8A2F8%0D%0A%23A47ED0%0D%0A%238461AE%0D%0A%23654591%0D%0A&es-color-form__tile-size=large&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) as a starting point. It aims to offers many usable color combinations (but feel more than free to aim higher).

Another tool I enjoy is [Leonardo](https://leonardocolor.io/). It's a tool to generate great palettes with lots of control over contrast and other options. Probably a good step before trying Contrast Grid.

And yes, WCAG 3 will quite likely provide a new way to calculate contrast. That's great news but we're all working with WCAG 2 for now.

**Let me know if my ranting has helped you, and if you have favorite tools of your own!**

Oh, and we sold the fabric store. I never ended up making a whole Design System for our little shop. Probably better that way.

## Resources

* [Colour Contrast Analyser](https://github.com/ThePacielloGroup/CCAe/)
* [WCAG Succes Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* [ITU-R Recommendation BT.709](https://en.wikipedia.org/wiki/Rec._709)
* [Contrast Grid](https://contrast-grid.eightshapes.com/) by Eightshapes
* [Pretty usable palette by me](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFF%0D%0A%23F8F8F8%0D%0A%23E7E7E7%0D%0A%23DFDFDF%0D%0A%23B3B3B3%0D%0A%23909090%0D%0A%23727272%0D%0A%23555%0D%0A%23282828%0D%0A%23000%0D%0A%2349C4C4%0D%0A%2311A0A1%0D%0A%23107F84%0D%0A%23005F62%0D%0A%23FF968D%0D%0A%23EF605B%0D%0A%23CC4040%0D%0A%23A41F29%0D%0A%23F6C257%0D%0A%23DDAC40%0D%0A%23B68818%0D%0A%23966A00%0D%0A%23AADE6F%0D%0A%238EC255%0D%0A%23689D31%0D%0A%234B7F0F%0D%0A%23C8A2F8%0D%0A%23A47ED0%0D%0A%238461AE%0D%0A%23654591%0D%0A&es-color-form__tile-size=large&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)
* [Leonardo](https://leonardocolor.io/)

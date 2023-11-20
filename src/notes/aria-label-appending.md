---
title: aria-label appending
---

⚠️ Beware, aria-label does not -append- to an accessible name.

aria-label will -replace- a name an accessible name from the content of an element, or the title-attribute! It will not append, prepend, or add.

Possible failure for WCAG 2.5.3 - Label in name: [https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

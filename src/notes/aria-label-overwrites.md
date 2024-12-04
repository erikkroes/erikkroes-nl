---
_template: post
title: aria-label overwrites
date: 2024-12-04
---
Reminding you all that aria-label overwrites.

<span aria-label="Price">€30</span>

This changes the accessible name to "Price". It does not concatenate.
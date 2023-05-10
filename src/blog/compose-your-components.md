---
title: Compose your components
description: Build the most components you can to have the least amount of work. I'll tell you why that's logical.
date: 2023-05-09T22:00:00.000Z
---

Build the most components you can to have the least amount of work. I'll tell you why that's logical.

## When you're composing your components

Let's sketch an ideal situation first. You've got (a Design System with) a component library. You want to build a new component ABCD that's a combination of components A, B, C and D. First you design, build and test these individual components in isolation. When you're done doing that, you combine them. Maybe even first as AC and BD. Or you build AB and ABC before ending with ABCD. The more steps the better!

This is the approach I like. It's agile. You iterate. You make small steps so you can't make big mistakes. You'll find bugs and issues while building and testing, but that's fine. You know where they are because you haven't built much.

## When you skip the small steps

For whatever reason, you don't want the previous process. You'd rather aim for big strides than small steps. You do you, but I don't like it.

When you "instantly" build ABCD before building the smaller parts, you're taking a big risk. If you've made decisions that could've been better, you have a lot to backtrack now. For example, maybe your subcomponents aren't really reusable now, because you've built them for only one usecase. The complexity, effort and risk have all skyrocketed. Before you could test A in isolation. In this setup, if there's an issue, it could be in A, B, C or D. But it could also be in the combination of A and B, or B and D, or A and B and C or... you just don't know. There's 4 components, 6 combinations of 2 components, 4 combinations of 3 components and 1 combination of 4 components. That means a total of 15 (!) locations in which a bug or issue can manifest itself. It increases the effort of testing, but also of fixing.

And you still don't have a separate component A, B, C or D either. Those still need to be built.

## Concluding

Your big strides take a lot more effort than lots of small steps combined. Especially if you discover your big step was in the wrong direction. And you still don't have the result that you would've had with little steps!

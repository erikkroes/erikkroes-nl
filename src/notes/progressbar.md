---
_template: post
title: progressbar
date: 2026-03-25T16:14:00.000+01:00
---
Don't use role="progressbar" for multi-step forms.

The spec says: "A progressbar indicates that the user's request has been received and the application is making progress toward completing the requested action."

Use an OL and aria-current. role="progressbar" sends the wrong message.

![A stepper or multi-step form from the documentation of material design.](/assets/media/components-acux-stepper-horizstep.png)

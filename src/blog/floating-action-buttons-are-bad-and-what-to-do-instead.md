---
_template: post
title: Floating Action Buttons are bad, and what to do instead.
description: Some thoughts on Floating Action Buttons as I always run into them,
  their inefficiency and inaccessible design.
date: 2026-01-21T11:34:00.000+01:00
---
Some thoughts on Floating Action Buttons as I always run into them, their inefficiency and inaccessible design.

The [Floating Action Button](https://m1.material.io/components/buttons-floating-action-button.html) was introduced by Google’s Material Design. To quote [Material Design 2](https://m2.material.io/components/buttons-floating-action-button#usage):
> “A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and extended. Only use a FAB if it is the most suitable way to present a screen's primary action.”

The FAB is a floating button, often in the bottom right of the screen, with a function related to the page as a whole.
 
The placement of the button leads to multiple issues or challenges. Buttons like these are often placed at the end of the code of a page. This means they are very hard to reach with a keyboard. It might need a user to “tab” through an entire page to find out these buttons exist. This makes the practically non-existant.

Which ties in with the second issue: findability in general. Because these buttons are so “out of the way”, they are easy to miss. It’s not just that these buttons have joined advertising on the web, where a certain “blindness” for these elements exists among users. The issue is also that these buttons are not near any content. They exist outside of the context of the page because of their generic floating state.

Interaction, click-through and awareness can increase greatly from weaving the functionality of these buttons into the content of the page.

Instead of a generic floating chat-button, put links or buttons in the page where they are relevant. “Did our links not help you? Please have a conversation with us and we will fix this together.”

Instead of a generic floating feedback-button, put links or buttons in the page where they are relevant. “How did you like our information?” or “How do you rate our support?”

If there is a primary action that warrants a FAB like Google describes, maybe put it at the start of the page. If the action is so important, then making it the first topic and impossible to miss.

This feedback on FABs is not a requirement for WCAG or compliance. It does align with the concept in WCAG to offer information in context like [WCAG A Success Criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) and [WCAG AAA  Success Criterion 3.3.5 Help](https://www.w3.org/WAI/WCAG22/Understanding/help.html).

---
title: An introduction to Web Monetization
description: Web Monetization is a new proposed API standard. It makes websites able to request a stream of very small payments from a visitor. The best part, you can already use it and it's easy!
date: 2019-09-17
cover:
cover-alt:
permalink: blog/web/an-introduction-to-web-monetization/
---


Web Monetization is a new proposed API standard. It makes websites able to request a stream of very small payments from a visitor. The best part, you can already use it and it's easy!

## What is Web Monetization?

> Web Monetization is a proposed API standard that allows websites to request a stream of very small payments from a user e.g. fractions of a cent.
>
> This provides a framework for new revenue models for websites and web-based services, as an alternative to subscription services or advertising, while preserving the user's privacy.
> 
> In exchange for payments from the user, websites can provide the user with a "premium" experience such as exclusive content or by removing advertising or even the need to login to access content or services.

I can act like I know all the details, but that's a straight quote from [the explainer](https://github.com/adrianhopebailie/web-monetization/blob/master/explainer.md). Web Monetization is a really simple alternative to advertising. A website has a single tag that points the browser of any visitor to a digital wallet. The visiting browser can then make a small payment to that wallet. Thereby making it possible for visitors to automatically pay for consuming content.

It sounds surprisingly simple. There are probably still tons of caveats like tons of money draining iframes, or clickbaity sites that I don't want my money to go. When it comes to money, people can get infinitely creative. But in its core, it sounds like an elegant solution.

Oh, and you can already use it!

## How do I add Web Monetization to my website?

Even though it's a proposed standard, it's already being supported. [Coil](https://coil.com/) offers both a way to pay for content, and to receive payments for your content. I'll focus on explaining the "receive payments" part, as they explain the other one perfectly.

To add Web Monetization to your website through Coil, you first had to create an account. The call to action buttons are all over their website. Follow the process as described. I picked XRP instead of USD for receiving payments. I'm not planning on making any real money, so it might as well be a virtual coin.

Once you've gone through all the steps, you can visit the "[Creator Settings](https://coil.com/settings/creator)" in your settings page. Here you can find your Payment Pointer. This is the wallet we mentioned earlier. Right below that is a short instruction and an actual HTML meta-tag. Mine looks like this:

    <meta name="monetization" content="$coil.xrptipbot.com/h59d6rpOTYKmhAXFLDvrPQ">

All you have to do is add this to the `<head>` section of the pages you want to monetize. The only reason it took me more than five minutes was my FTP server working against me. Now you're ready to be supported by your 3 loyal visitors. To show your appreciation, you can change the experience of paying users. You can [hide advertisements](https://css-tricks.com/site-monetization-with-coil-and-removing-ads-for-supporters/#article-header-id-3) for example.


## What's next?

I'm really looking forward to see where this standard is going. There are grants coming for developers and creators who support and promote Web Monetization. That should shake things up a little. The least we can do is show some support. For example by using [Puma Browser](https://www.pumabrowser.com/) or adding a Coil extension to [Google Chrome](https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca) or Mozilla Firefox.

> I'm thrilled to be part of this. We're giving a hundred million dollars to content creators (e.g., you), to kickstart a new, decent, private and respectful way for people to be paid on the web, by their fans. https://t.co/nb3mAifGBJ
> — Bruce Lawson (@brucel) [September 16, 2019](https://twitter.com/brucel/status/1173640843363635202?ref_src=twsrc%5Etfw)
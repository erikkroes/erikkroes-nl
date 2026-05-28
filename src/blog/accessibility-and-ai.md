---
_template: post
title: Accessibility and AI
description: There's a lot to be said about AI and accessibility. These are some
  thoughts on what goes wrong, and what could be improved.
date: 2026-05-28T13:29:00.000+02:00
cover: /assets/media/gemini_shirt.png
cover_alt: Let AI reflect on AI, and this is what you get. This is an
  AI-generated graphic. It states "AI" with big letters, and is surrounded by
  all sorts of cliche illustrations. It includes a robot that seems to be
  thinking, a brain, electric circuits, 0's and 1's, a futuristics city, a
  keyboard, network visualizations, and terms like algorithm, neural network,
  data and datta (nicely misspelled).
---
There's a lot to be said about AI and [accessibility](https://inklusivo.nl/accessibility-fundamentals/). These are some thoughts on what goes wrong, and what could be improved.

![Let AI reflect on AI, and this is what you get. This is an AI-generated graphic. It states "AI" with big letters, and is surrounded by all sorts of cliche illustrations. It includes a robot that seems to be thinking, a brain, electric circuits, 0's and 1's, a futuristics city, a keyboard, network visualizations, and terms like algorithm, neural network, data and datta (nicely misspelled).](/assets/media/gemini_shirt.png)

I won't claim I am a specialist in AI, but I do know a thing or two about accessibility. My knowledge about AI (or [large language models](https://en.wikipedia.org/wiki/Large_language_model) really) comes from the omnipresence of information about them, my curiosity for them, my experiences in IT and my background in media theory when I studied at the art academy. Especially that last one has made me critical about new technology.

My brain is an unordered sponge sometimes, which means I can't list all the things I've read about AI. One that does stand out is a video by Veritasium about Markov Chains called "[The Strange Math That Predicts (Almost) Anything](https://www.youtube.com/watch?v=KZeIEiBrT_w)". I think it explains a lot very well.

I also won't go into the environmental impact, intellectual property or other aspects of the impact of AI. There are other people more knowledgeable about these subjects, and many things have been written about them already. I'll try and keep focus on being accessibility-related.

## Accessibility and compliance are absolute

A lot of work in accessibility is quite absolute: something is or isn't a barrier, and something does or does not comply with law.
Large language models (LLMs) are digital technology. Usually technology driven by ones and zeroes is rather good at being absolute. Sometimes that's good, but quite often that's also a risk or downside. 

LLMs however, are not very binary. They are driven by odds and chances. You can ask an LLM the same question ten times, and get 10 different answers. Or 2. Or 5. Or 1.
And to make things even worse, LLMs can flat-out lie about things. The way they can state untrue facts (hallucinate) with full confidence is staggering. It can make up quotes, give wrong answers to math questions and (the last time I tried) struggle with listing all success criteria of WCAG. And [the hallucinations are getting worse](https://www.newscientist.com/article/2479545-ai-hallucinations-are-getting-worse-and-theyre-here-to-stay/) even.

That's a problem. On one hand, a lot of accessibility revolves around risk and legal issues. A dependable source is needed for that. A legal department can not depend on a tool that makes things up.

On the other hand, or maybe in line, my experience is that a lot of work around accessibility depends on trust. As an accessibility consultant, you're telling people what they should do differently, and why. I consider that a big ask. If what they're being told is wrong, why would they listen? LLMs break down that trust that's essential for people to listen.

## AI and equity

My goal in life is not to make the rich richer, to create more opportunities for the privileged, or to improve the life of those who already have it well. What I want to achieve in life, is to improve the life of the many. I am bothered by many forms of inequality like [economic inequality](https://en.wikipedia.org/wiki/Economic_inequality) and [social inequality](https://en.wikipedia.org/wiki/Social_inequality). I want everybody to have the same opportunities in life, or at least for the enormous gap to be smaller. 

<blockquote cite="https://en.wikipedia.org/wiki/The_Panda%27s_Thumb_(book)">
		<p>I am, somehow, less interested in the weight and convolutions of Einstein’s brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops.</p>
	</blockquote>
<p>Stephen Jay Gould, <cite><a href="https://en.wikipedia.org/wiki/The_Panda%27s_Thumb_(book)">The Panda's Thumb: More Reflections in Natural History</a></cite></p>


LLMs, and all companies involved, seem more focussed on making the rich richer. It's all about [big companies passing money around](https://www.cnbc.com/2025/10/15/a-guide-to-1-trillion-worth-of-ai-deals-between-openai-nvidia.html). The (economic) benefits are very much concentrated. The companies [fire employees and replace them with AI](https://www.businessinsider.com/sneaky-truth-ai-layoffs-switcheroo-meta-microsoft-2026-3) to increase record profits even further. Even though an [MIT study found that 95% of organizations are getting zero return](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf). (And there's a trend to make AI-usage more expensive. Guess what that will do for returns?)
AI is hurting the many, while few reap the benefits.

## AI and disability-washing

"But AI is helping people with disabilities!"
There are many implementations of AI for people with disabilities. [Seeing AI](https://www.seeingai.com/) is rather well-known. So is [Be My AI](https://www.bemyeyes.com/bme-ai/). Browsers and other software offer the option to generate text alternatives with AI. To be honest, I've lost track.

But I'm not convinced. It feels like PR and marketing. Like a ploy to promote a big technological change. Like the need for people to identify themselves on the internet, to counter child abuse. Or how we need to abolish encryption to fight terrorism. And now we need AI for people with disabilities? 
The focus of all PR on this kind of news feels dishonest and disproportionate.

Do you want AI to be useful for people with disabilities? Start by making the tools available for everybody. Make tools that -everybody- can use, including people with disabilities. Make all the LLMs accessible. I'd love this section to have a link on how they're accessible, but there's nothing to link. There's nothing to find. There is no agenda or roadmap of big LLMs that mentions accessibility.

<blockquote><p>A rising tide lifts all boats<p></blockquote>
<p>A common saying or aphorism</p>

Don't (ab)use people with disabilities to push your agenda. We're not a stepping stone or tool. Offer actually usable and useful tools!

## AI and bias

On the topic of equity, and making LLMs beneficial for people with disabilities: bias. The output of LLMs is based on their input. And their goal is to give the most obvious or common answer. If nine out of ten people give the same answer to a question, an LLM will also give that answer. If there are misconceptions and/or biases in the input of LLMs, then LLMs will reinforce those.

Now consider that we have a web where [at least 95.9% of home pages](https://webaim.org/projects/million/#wcag) do not meet WCAG. That's quite a majority. For LLMs to benefit people with disabilities, it should not be strengthening that bias but do the opposite.

## People with disabilities don't need systems

A lot of organisations run efficiently because of the systems they have in place. There is consistency in how people should be treated, and what they can expect. Organisations and their systems are designed for the majority and for the masses. 
When you're not part of the target group (like people with disabilities often aren't), you fall outside of these systems. In those cases, we need people. When a website doesn't work, you can hopefully contact a person, and they are the flexible backbone that can help you out. Systems work, because they're supplemented by flexible people. People are the safety net for when systems fail.

LLMs are adding more systems to the world. They are introducing more technology for the masses and in some cases even where we look for support. Chatbots and automated customer support disappoint people with disabilities. We don't need more systems, we need humans and humanity. 

## Conclusion: the road for AI

I get that people want to use AI. It's so very tempting to outsource something like accessibility to a tool. The idea of a magic button that fixes everything. Who wouldn't want that? But you don't fix an issue involving people by introducing more machines. You don't fix an issue involving quality by introducing slop. 

This writing is a lot of criticism, because there's a lot to improve. Let's list some things that can be done:

* Use non-absolute LLMs in non-absolute use-cases. Let LLMs support people with tasks they want support with. It might draft or propose, but decisions should be left  to people.
* Make LLMs accessible. Not everybody wants to use all these new tools, and for many good reasons, but at least make them work for everybody. Don't launch tools with barriers for people with disabilities. Give them choice in using or not using these tools (instead of being excluded by default).
* Counter the bias. Offer better information and support than what is out there already.
* Accept that not everybody fits your system. Offer alternatives and include humans, always.

I turned the graphic (at the top of this artciel) into [a shirt you can get](https://erik-kroes-shop.fourthwall.com/products/ai-shirt). It is an image about AI, generated by AI.

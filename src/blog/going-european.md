---
_template: post
title: Going European
description: I'm moving one service after another to European companies.
date: 2026-08-26T10:46:00.000+02:00
---
I'm moving one service after another to European companies.

## The first website
The first was an old website that I sort of inherited. One.com wanted 250 euros for a year of hosting. For a website that's basically static and unvisited, I find that a lot of money.

That pushed me to start moving my digital real estate. I am registering my domains with OVH now, and I have a cloud server with Hetzner. 

It's a bit of a chore and an extra hobby to run a server like that but it is one that I like. I've had my own little linux box/home server for quite some years. The premise is quite alike but instead of running all kinds of local software (pihole, file syncing, backups, home automation, etc), it's not a public server that runs grown-up things like multiple websites!

For setup, I leaned a lot on these 2 guides:

- [https://dev.to/fedya_serafiev/setting-up-your-own-linux-server-with-hetzner-a-technical-guide-34am](https://dev.to/fedya_serafiev/setting-up-your-own-linux-server-with-hetzner-a-technical-guide-34am)
- [https://medium.com/@chiemekaifemegbulem/mastering-nginx-effortlessly-hosting-multiple-domains-on-a-single-server-a4578150e60e](https://medium.com/@chiemekaifemegbulem/mastering-nginx-effortlessly-hosting-multiple-domains-on-a-single-server-a4578150e60e)

## The second website, with a build step
The second things I moved was inklusivo.nl. The domain was at transip, and the building/deployment/hosting was done by cloudflare. 
The code is and was still at github. The building and deployment is now done by a github action:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Eleventy
        run: npm run build

      - name: Deploy
        uses: easingthemes/ssh-deploy@main
        with:
          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
          REMOTE_HOST: ${{ secrets.SERVER_HOST }}
          REMOTE_USER: ${{ secrets.SERVER_USER }}
          SOURCE: _site/
          TARGET: ${{ secrets.SERVER_PATH }}
          ARGS: --delete
```

Using the wonderful [ssh-deploy](https://github.com/easingthemes/ssh-deploy), it builds my static eleventy-website and uses rsync to put it on the server. Simple and elegant!

My first attempt was using coolify for this. But it felt bulky and overkill for something I now fixed in a very elegant way. And coolify served the website in a separate container, which clashes with websites not served in a container. I am very happy that didn't work, as I like this solution much more!

## The next item?
Next up is moving more websites. I also have this website which still runs on netlify, much like inklusivo ran on cloudflare. Having done the work for inklusivo means moving this website will be much easier!

After that, maybe github is next? Or I'll finally get rid of gmail? 

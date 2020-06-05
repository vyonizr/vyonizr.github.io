---
layout: post
title: "Migrating to GatsbyJS"
date: 2020-06-06 00:38:00 +0700
tags: [jekyll, gatsbyjs]
categories: [Programming]
last_modified_at: null
description: I'm sorry Jekyll
link: null
---

<figure>

  ![GatsbyJS vs Jekyll](./gatsby-vs-jekyll.jpg)

  <figcaption>GatsbyJS vs Jekyll (source: <a href="https://medium.com/@ajkueterman/quick-thoughts-on-gatsby-js-vs-jekyll-c13c1337c24a" target="_blank" rel="noopener noreferrer">Medium</a>)</figcaption>
</figure>

It has been only two days ago since I [released this platform on Jekyll](/2020-06-03-first-post/).

Yes,

I said that I am more concern about the content. But, after reading some references, someone said that Jekyll builds slower when it comes to loads of pages.[^1]

I want my blog to be futureproof. I remember my colleague [Adib Firman](https://adibfirman.github.io/) once said he built his blog with GatsbyJS. Then I realized one of the advantages of using it—easier to navigate between pages because its `Link` component won't trigger a full page refresh.

## Migrating 📦

I love the minimalism of Jekyll's Noir theme and I want to bring it together. Converting Shopify's [Liquid](https://shopify.github.io/liquid/) into React was challenging. I kept the SASS files instead of installing `styled-components` like I usually do to save time. Then there came a little issue.

Jekyll and GatsbyJS has different parser. It is a different world. Jekyll uses [Kramdown](https://kramdown.gettalong.org/) while Gatsby uses [remark](https://remark.js.org/). There was significant difference on how it parsed syntax highlighting as they have different classes names and attributes. So, I did a workaround using `gatsby-remark-prismjs`. Some required custom styling to replicate Noir as close as possible.

During the development, I learned cool stuffs:

1. I used GraphQL once ond a project, but not as deep as this one. I wish this can be a new API standard some time in the future.
2. I got my hands dirty on SASS even if it's only for variables and imports. The rest was just like regular CSS.
3. They are right about GatsbyJS plugins. I've never thought it would be very helpful. I used to take it for granted.
4. `gatsby-plugin-catch-links` is your friend when you want to navigate to local links
5. `gatsby-remark-external-links` makes handling attributes for external links on Markdown comes in handy to prevent security vulnerabilities[^2]

Nevertheless, I keep my Jekyll as a memento on [a branch](https://github.com/vyonizr/vyonizr.github.io/tree/deprecated-jekyll). Time to celebrate one more time, I guess? 🥳

[^1]: Slant, ***Jekyll - What are the best solutions for a personal blog?*** \[website\], https://www.slant.co/topics/329/viewpoints/4/~best-solutions-for-a-personal-blog~jekyll, (accessed June 4 2020)
[^2]: web.dev, ***Links to cross-origin destinations are unsafe*** \[website\], https://web.dev/external-anchors-use-rel-noopener/, (accessed June 5 2020)
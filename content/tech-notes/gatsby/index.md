---
title: "gatsby"
cover: "https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/03–06-2020-Property-Values-Analysis/average-totalvalues.png"
date: "11/30/20"
category: "Web Development"
tags:
  - "Web Development"
---

# sourcing text files in gatsby

feature mvp: access text files in gatsby, displayed as tech notes

source 1: "https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/"

tips:
- use gatsby-config.js to add a plugin instance of the filesystem to identify where text files are located
- query using the graphql function allFile(), can filter using `sourceInstanceName: {eq:'data'}

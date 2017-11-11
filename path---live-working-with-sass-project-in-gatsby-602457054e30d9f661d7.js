webpackJsonp([0x8cbcae86d396],{"./node_modules/json-loader/index.js!./.cache/json/live-working-with-sass-project-in-gatsby.json":function(s,a){s.exports={data:{markdownRemark:{html:'<h1 id="working-with-sass-in-gatsby-project"><a href="#working-with-sass-in-gatsby-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with Sass in Gatsby Project</h1>\n<p>Requirements:</p>\n<ul>\n<li>Node: <a href="https://nodejs.org/" title="Node">https://nodejs.org/</a></li>\n<li>npm: <a href="https://npmjs.com/" title="npm">https://www.npmjs.com/</a></li>\n<li>GatsbyJs: <a href="https://www.gatsbyjs.org/" title="GatsbyJs">https://www.gatsbyjs.org/</a></li>\n<li>gatsby-plugin-sass: <a href="https://www.npmjs.com/package/gatsby-plugin-sass">https://www.npmjs.com/package/gatsby-plugin-sass</a></li>\n</ul>\n<h2 id="getting-started-with-gatsby-setup"><a href="#getting-started-with-gatsby-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started with Gatsby Setup</h2>\n<ul>\n<li>\n<p>go to <a href="https://www.gatsbyjs.org/">GatsbyJs</a> website:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>open https://www.gatsbyjs.org</code></pre>\n      </div>\n</li>\n<li>\n<p>click <a href="https://www.gatsbyjs.org/docs/">Get Started</a> button and follow along</p>\n</li>\n<li>\n<p>Terminal: Install Gatsby\'s command line tool</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install --global gatsby-cli</code></pre>\n      </div>\n</li>\n<li>\n<p>create a new Gatsby site</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>gatsby new gatsby-site</code></pre>\n      </div>\n</li>\n<li>\n<p>Go to new folder</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>cd gatsby-site</code></pre>\n      </div>\n</li>\n</ul>\n<h2 id="installing-dependencies"><a href="#installing-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing dependencies</h2>\n<ul>\n<li>\n<p>Install <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/">gatsby-plugin-sass</a> . Here is a list of <a href="https://www.gatsbyjs.org/docs/plugins/#official-plugins">official plugins</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install --save gatsby-plugin-sass</code></pre>\n      </div>\n<p><em>more details at</em> <a href="https://www.gatsbyjs.org/docs/plugins/">Gatsby plugins</a> or <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/">gatsby-plugin-sass</a></p>\n</li>\n<li>\n<p>Open project in <a href="https://atom.io/">Atom</a> editor or <a href="https://alternativeto.net/software/atom/">alternative</a> editors</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>atom .</code></pre>\n      </div>\n</li>\n<li>\n<p>Include "gatsby-plugin-sass" in your gatsby-config.js file</p>\n</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/686d20c7103683d522a9621ac4f9abf6-fe5df.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 383px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.93472584856397%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQ4y62U3XKbMBSEeQTHwTE/AgGSAEtA+LOJ41AntL3IRduZvv+7bIXSSeqZNHWbXuygEeI7e86OsBYXS1wsL9+QjXXAzpbF+AJlpbDdDSjKCv12h7rtDIwEIezV+u+Al5TBjsWTolek31/58dmyRL6BTyMon+HrQmJaCrS+hD09wr6bYA8jxCpALhVWa+ePslIpDdAPKbKMYNtH+P4tx/0Hhi+PGcbbBFHCkOb5ecBMqWfgleNCCILdNsbDcQPXc/B54pjuObqG4tMkMB4S7G8SNNcUHx/0fhvhZhcjCMOfQPkC5GkGx/Nfrey4bzubzRggy7IXoKCoqhi1rq6KWLeanNXmacu/OIwTgrIMzfz2A9czjcwI+CxOzJpxHyIlkFIHlT/pBNh0DdJNBpZyYzugHo4jx90+QV1TE9JBB9Po9bV23neReRYqNHMlgf5Gm3kGdn2NqlbYqBweCTTU0YFwDHrQM2wGHEeGtol0GDH6lpozv205LwrTMtGKE35S7V9kSX3dZmCmSriu9y6YAQ6HWwN0SfBumAG6+gfwP4E/ALljlgw/6quZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="sample gatsby-config"\n        title=""\n        src="/static/686d20c7103683d522a9621ac4f9abf6-fe5df.png"\n        srcset="/static/686d20c7103683d522a9621ac4f9abf6-88bcd.png 300w,\n/static/686d20c7103683d522a9621ac4f9abf6-40715.png 600w,\n/static/686d20c7103683d522a9621ac4f9abf6-fe5df.png 766w"\n        sizes="(max-width: 383px) 100vw, 383px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',timeToRead:1,excerpt:"Working with Sass in Gatsby Project Requirements: Node:  https://nodejs.org/ npm:  https://www.npmjs.com/ GatsbyJs:  https://www.gatsbyjs…",frontmatter:{title:"Live: Working with Sass Project in Gatsby",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"10/30/17",category:"Tech",tags:["GatsbyJs","Sass","React","Node"]},fields:{nextTitle:"Live: Working with Sass Project in Gatsby",nextSlug:"/live-working-with-sass-project-in-gatsby",prevTitle:"Live: Working with Sass Project in Gatsby",prevSlug:"/live-working-with-sass-project-in-gatsby",slug:"/live-working-with-sass-project-in-gatsby"}}},pathContext:{slug:"/live-working-with-sass-project-in-gatsby"}}}});
//# sourceMappingURL=path---live-working-with-sass-project-in-gatsby-602457054e30d9f661d7.js.map
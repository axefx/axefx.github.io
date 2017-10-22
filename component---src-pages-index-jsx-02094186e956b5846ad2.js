webpackJsonp([0xc23565d713b7],{"./node_modules/react-md/lib/Media/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var r=o("./node_modules/react-md/lib/Media/Media.js"),a=n(r),i=o("./node_modules/react-md/lib/Media/MediaOverlay.js"),l=n(i);t.default=a.default,t.Media=a.default,t.MediaOverlay=l.default},"./src/components/PostListing/PostListing.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),s=n(l),u=o("./src/components/PostPreview/PostPreview.jsx"),d=n(u),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return s.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},s.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return s.default.createElement(d.default,{key:e.title,postInfo:e})})))},t}(s.default.Component);t.default=c,e.exports=t.default},"./src/components/PostPreview/PostPreview.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),s=n(l),u=o("./node_modules/react-md/lib/Cards/Card.js"),d=n(u),c=o("./node_modules/react-md/lib/Cards/CardTitle.js"),f=n(c),p=o("./node_modules/react-md/lib/Buttons/index.js"),m=n(p),b=o("./node_modules/react-md/lib/Avatars/index.js"),h=n(b),g=o("./node_modules/react-md/lib/Cards/CardText.js"),y=n(g),x=o("./node_modules/react-md/lib/FontIcons/index.js"),_=n(x),E=o("./node_modules/gatsby-link/index.js"),j=n(E),v=o("./node_modules/react-md/lib/Media/index.js"),w=n(v),P=o("./src/components/PostTags/PostTags.jsx"),O=n(P);o("./src/components/PostPreview/PostPreview.scss");var M=function(e){function t(o){r(this,t);var n=a(this,e.call(this,o));return n.state={mobile:!0},n.handleResize=n.handleResize.bind(n),n}return i(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,o=t,n=e.cover.startsWith("/")?""+e.cover:e.cover,r=t?162:225;return s.default.createElement(d.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},s.default.createElement(j.default,{style:{textDecoration:"none"},to:e.path},s.default.createElement(w.default,{style:{backgroundImage:"url("+n+")",height:r+"px"},className:"post-preview-cover"},s.default.createElement(v.MediaOverlay,null,s.default.createElement(f.default,{title:e.title},s.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),s.default.createElement(f.default,{expander:o,avatar:s.default.createElement(h.default,{icon:s.default.createElement(_.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),s.default.createElement(y.default,{expandable:o},e.excerpt,s.default.createElement(O.default,{tags:e.tags})))},t}(l.Component);t.default=M,e.exports=t.default},"./src/components/PostPreview/PostPreview.scss":function(e,t){},"./src/components/SEO/SEO.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),s=n(l),u=o("./node_modules/react-helmet/lib/Helmet.js"),d=n(u),c=o("./data/SiteConfig.js"),f=n(c),p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,o=e.postPath,n=e.postSEO,r=void 0,a=void 0,i=void 0,l=void 0;if(n){var u=t.frontmatter;r=u.title,a=u.description?u.description:t.excerpt,i=u.cover,l=f.default.siteUrl+f.default.pathPrefix+o}else r=f.default.siteTitle,a=f.default.siteDescription,i=f.default.siteLogo;var c="/"===f.default.pathPrefix?"":f.default.pathPrefix;i=f.default.siteUrl+c+i;var p=f.default.siteUrl+f.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:r,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:""}];return n&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:r,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:r,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:"",headline:r,image:{"@type":"ImageObject",url:i},description:a}]),s.default.createElement(d.default,null,s.default.createElement("meta",{name:"description",content:a}),s.default.createElement("meta",{name:"image",content:i}),s.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),s.default.createElement("meta",{property:"og:url",content:n?l:p}),n?s.default.createElement("meta",{property:"og:type",content:"article"}):null,s.default.createElement("meta",{property:"og:title",content:r}),s.default.createElement("meta",{property:"og:description",content:a}),s.default.createElement("meta",{property:"og:image",content:i}),s.default.createElement("meta",{property:"fb:app_id",content:f.default.siteFBAppID?f.default.siteFBAppID:""}),s.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.default.createElement("meta",{name:"twitter:creator",content:f.default.userTwitter?f.default.userTwitter:""}),s.default.createElement("meta",{name:"twitter:title",content:r}),s.default.createElement("meta",{name:"twitter:description",content:a}),s.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=p,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-plugin-lodash/lib/index.js","/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/axel/Sites/portfolios/github/axefx.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=o("./node_modules/react/react.js"),s=n(l),u=o("./node_modules/react-helmet/lib/Helmet.js"),d=n(u),c=o("./src/components/PostListing/PostListing.jsx"),f=n(c),p=o("./src/components/SEO/SEO.jsx"),m=n(p),b=o("./data/SiteConfig.js"),h=n(b),g=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.default.createElement("div",{className:"index-container"},s.default.createElement(d.default,null,s.default.createElement("title",null,h.default.siteTitle),s.default.createElement("link",{rel:"canonical",href:""+h.default.siteUrl})),s.default.createElement(m.default,{postEdges:e}),s.default.createElement(f.default,{postEdges:e}))},t}(s.default.Component);t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-02094186e956b5846ad2.js.map
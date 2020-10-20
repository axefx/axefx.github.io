webpackJsonp([0xc23565d713b7],{"./node_modules/react-md/lib/Media/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var o=n("./node_modules/react-md/lib/Media/Media.js"),a=r(o),s=n("./node_modules/react-md/lib/Media/MediaOverlay.js"),l=r(s);t.default=a.default,t.Media=a.default,t.MediaOverlay=l.default},"./src/components/PostListing/PostListing.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),i=r(l),d=n("./src/components/PostPreview/PostPreview.jsx"),u=r(d),c=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return i.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},i.default.createElement("div",{id:"recentPosts",className:"md-background--card md-grid md-cell--8 mobile-fix"},i.default.createElement("p",{className:"md-display-2"},"Recent Posts"),e.map(function(e){return i.default.createElement(u.default,{key:e.title,postInfo:e})})))},t}(i.default.Component);t.default=c,e.exports=t.default},"./src/components/PostPreview/PostPreview.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),i=r(l),d=n("./node_modules/react-md/lib/Cards/Card.js"),u=r(d),c=n("./node_modules/react-md/lib/Cards/CardTitle.js"),f=r(c),p=n("./node_modules/react-md/lib/Buttons/index.js"),m=r(p),b=n("./node_modules/react-md/lib/Avatars/index.js"),h=r(b),y=n("./node_modules/react-md/lib/Cards/CardText.js"),g=r(y),_=n("./node_modules/react-md/lib/FontIcons/index.js"),E=r(_),j=n("./node_modules/gatsby-link/index.js"),v=r(j),w=n("./node_modules/react-md/lib/Media/index.js"),x=r(w),P=n("./src/components/PostTags/PostTags.jsx"),O=r(P);n("./src/components/PostPreview/PostPreview.scss");var M=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={mobile:!0},r.handleResize=r.handleResize.bind(r),r}return s(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,r=e.cover.startsWith("/")?""+e.cover:e.cover,o=t?162:225;return i.default.createElement(u.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},i.default.createElement(v.default,{style:{textDecoration:"none"},to:e.path},i.default.createElement(x.default,{style:{backgroundImage:"url("+r+")",height:o+"px"},className:"post-preview-cover"},i.default.createElement(w.MediaOverlay,null,i.default.createElement(f.default,{title:e.title},i.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),i.default.createElement(f.default,{expander:n,avatar:i.default.createElement(h.default,{icon:i.default.createElement(E.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),i.default.createElement(g.default,{expandable:n},e.excerpt,i.default.createElement(O.default,{tags:e.tags})))},t}(l.Component);t.default=M,e.exports=t.default},"./src/components/PostPreview/PostPreview.scss":function(e,t){},"./src/components/SEO/SEO.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),i=r(l),d=n("./node_modules/react-helmet/lib/Helmet.js"),u=r(d),c=n("./data/SiteConfig.js"),f=r(c),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,s=void 0,l=void 0;if(r){var d=t.frontmatter;o=d.title,a=d.description?d.description:t.excerpt,s=d.cover,l=f.default.siteUrl+f.default.pathPrefix+n}else o=f.default.siteTitle,a=f.default.siteDescription,s=f.default.siteLogo;var c="/"===f.default.pathPrefix?"":f.default.pathPrefix;s=f.default.siteUrl+c+s;var p=f.default.siteUrl+f.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:o,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:s}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:o,alternateName:f.default.siteTitleAlt?f.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:s},description:a}]),i.default.createElement(u.default,null,i.default.createElement("meta",{name:"description",content:a}),i.default.createElement("meta",{name:"image",content:s}),i.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),i.default.createElement("meta",{property:"og:url",content:r?l:p}),r?i.default.createElement("meta",{property:"og:type",content:"article"}):null,i.default.createElement("meta",{property:"og:title",content:o}),i.default.createElement("meta",{property:"og:description",content:a}),i.default.createElement("meta",{property:"og:image",content:s}),i.default.createElement("meta",{property:"fb:app_id",content:f.default.siteFBAppID?f.default.siteFBAppID:""}),i.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.default.createElement("meta",{name:"twitter:creator",content:f.default.userTwitter?f.default.userTwitter:""}),i.default.createElement("meta",{name:"twitter:title",content:o}),i.default.createElement("meta",{name:"twitter:description",content:a}),i.default.createElement("meta",{name:"twitter:image",content:s}))},t}(l.Component);t.default=p,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/usr/src/app/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/usr/src/app/node_modules/babel-plugin-lodash/lib/index.js","/usr/src/app/node_modules/babel-plugin-add-module-exports/lib/index.js","/usr/src/app/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/usr/src/app/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/usr/src/app/node_modules/babel-preset-stage-0/lib/index.js","/usr/src/app/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n("./node_modules/react/react.js"),i=r(l),d=n("./node_modules/react-helmet/lib/Helmet.js"),u=r(d),c=n("./src/components/PostListing/PostListing.jsx"),f=r(c),p=n("./src/components/SEO/SEO.jsx"),m=r(p),b=n("./data/SiteConfig.js"),h=r(b),y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.default.createElement("div",{className:"index-container"},i.default.createElement(u.default,null,i.default.createElement("title",null,h.default.siteTitle),i.default.createElement("link",{rel:"canonical",href:""+h.default.siteUrl})),i.default.createElement(m.default,{postEdges:e}),i.default.createElement(f.default,{postEdges:e}))},t}(i.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-31afaebf1acab0dcb073.js.map
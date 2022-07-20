module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "axeFx", // Site title.
  siteTitleAlt: "axeFx software developer blog", // Alternative site title for SEO.
  // siteLogo: "/logos/logo-1024.png",  Logo used for SEO and manifest.
  siteUrl: "https://axefx.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A software developer blog, with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265",  FB Application ID for using app insights
  siteGATrackingID: "UA-159945484-1", // GA tracking ID.
  disqusShortname: "axefx", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Axel", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Los Angeles, California", // User location to display in the author segment.
  userAvatar: "https://avatars.githubusercontent.com/u/17439087?v=4", // User avatar to display in the author segment.
  // userDescription:
  //  "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/axefx",
      iconClassName: "fa fa-github",
    },
    {
      label: "Email",
      url: "mailto:axellfx@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2017. axeFx.github.io", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

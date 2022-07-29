import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import MainLayout from "../components/Layout";

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout location={this.props.location} className="tag-container">
        <Helmet>
          <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
        </Helmet>
        <PostListing postEdges={postEdges} />
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

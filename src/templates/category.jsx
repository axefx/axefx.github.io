import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import MainLayout from "../components/Layout";

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pageContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout location={this.props.location} className="category-container">
        <Helmet>
          <title>{`Posts in category "${category}" | ${config.siteTitle}`}</title>
          <link
            rel="canonical"
            href={`${config.siteUrl}/categories/${category}`}
          />
        </Helmet>
        <PostListing postEdges={postEdges} />
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Card, { CardText } from "../components/Card";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import PostCover from "../components/PostCover/PostCover";
import PostInfo from "../components/PostInfo/PostInfo";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PostSuggestions from "../components/PostSuggestions/PostSuggestions";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";
import { PostLayout } from "../components/Layout";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const expanded = !true;
    const postOverlapClass = "post-overlap-mobile";
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
        </Helmet>
        <PostLayout
          location={this.props.location}
          className="post-page md-grid md-grid--no-spacing"
        >
          <SEO postPath={slug} postNode={postNode} postSEO />
          <PostCover postNode={postNode} />
          <div
            className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
          >
            <Card className="md-grid md-cell md-cell--12 post">
              <CardText className="post-body">
                <h1 className="md-display-2 post-header">{post.title}</h1>
                <PostInfo postNode={postNode} />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </CardText>
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
            </Card>
            <UserInfo
              className="md-grid md-cell md-cell--12"
              config={config}
              expanded={expanded}
            />
          </div>

          <PostSuggestions postNode={postNode} />
        </PostLayout>
      </>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
      }
    }
  }
`;

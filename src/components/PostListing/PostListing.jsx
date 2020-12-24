import React from "react";
import PostPreview from "../PostPreview/PostPreview";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.childMarkdownRemark.fields.slug,
        tags: postEdge.node.childMarkdownRemark.frontmatter.tags,
        cover: postEdge.node.childMarkdownRemark.frontmatter.cover,
        title: postEdge.node.childMarkdownRemark.frontmatter.title,
        date: postEdge.node.childMarkdownRemark.frontmatter.date,
        excerpt: postEdge.node.childMarkdownRemark.excerpt,
        timeToRead: postEdge.node.childMarkdownRemark.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div
          id="recentPosts"
          className="md-background--card md-grid md-cell--8 mobile-fix"
        >
          <p className="md-display-2">Recent Posts</p>
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;

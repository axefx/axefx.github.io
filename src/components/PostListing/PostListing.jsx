import React from "react";
import PostPreview from "./PostPreview";

const PostListing = (props) => {
  const postList = props.postEdges.map((postEdge) => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead,
  }));
  return (
    <div id="postListingContainer">
      <h2>Recent Posts</h2>
      {postList.map((post) => (
        <PostPreview key={post.title} postInfo={post} />
      ))}
    </div>
  );
};

export default PostListing;

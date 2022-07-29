import React, { Component } from "react";
import Link from "gatsby-link";
import "./PostInfo.scss";
import Avatar from "../Avatar";
import { CardTitle } from "../Card";
import { kebabCase } from "../../utils";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar />}
          title={`Published on ${post.date}`}
          subtitle={`${postNode.timeToRead} min read`}
        />
        <Link
          className="category-link"
          to={`/categories/${kebabCase(post.category)}`}
        >
          <CardTitle
            avatar={<Avatar />}
            title={"In category"}
            subtitle={post.category}
          />
        </Link>
      </div>
    );
  }
}

export default PostInfo;

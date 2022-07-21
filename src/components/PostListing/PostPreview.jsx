import React, { Component } from "react";
import Link from "gatsby-link";
import PostTags from "../PostTags/PostTags";
import Card, { CardTitle, CardText } from "../Card";
import Button from "../Button";
import Avatar from "../Avatar";
import { MediaContainer, MediaOverlay } from "../Media";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off"*/
    const cover = postInfo.cover.startsWith("/")
      ? __PATH_PREFIX__ + postInfo.cover
      : postInfo.cover;
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path}>
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          <MediaContainer
            className="post-preview-cover"
            cover={cover}
            coverHeight={coverHeight}
          >
            <MediaOverlay>
              <CardTitle title={postInfo.title}>
                <Button theme="secondary" className="md-cell--right">
                  Read
                </Button>
              </CardTitle>
            </MediaOverlay>
          </MediaContainer>
        </Link>
        <CardTitle
          expander={expand}
          avatar={<Avatar />}
          title={`Published on ${postInfo.date}`}
          subtitle={`${postInfo.timeToRead} min read`}
        />

        <CardText expandable={expand}>
          {postInfo.excerpt}
          <PostTags tags={postInfo.tags} />
        </CardText>
      </Card>
    );
  }
}

export default PostPreview;

import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import config from "../../../data/SiteConfig";
import Card, { CardTitle, CardContent } from "../Card";
import Avatar from "../Avatar";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }
  render() {
    const { postNode, expanded } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = config.siteUrl + postNode.fields.slug;
    return (
      <Card className="md-grid md-cell md-cell--12">
        <CardTitle title="Comments" avatar={<Avatar />} expander={!expanded} />
        <CardContent expandable={!expanded}>
          <ReactDisqusComments
            shortname={config.disqusShortname}
            identifier={post.title}
            title={post.title}
            url={url}
            category_id={post.category_id}
            onNewComment={this.notifyAboutComment}
          />
        </CardContent>
      </Card>
    );
  }
}

export default Disqus;

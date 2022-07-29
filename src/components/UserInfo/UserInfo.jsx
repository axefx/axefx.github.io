import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";
import UserLinks from "../UserLinks/UserLinks";
import "./UserInfo.scss";
import Avatar from "../Avatar";
import Card, { CardTitle, CardContent } from "../Card";

class UserInfo extends Component {
  render() {
    const {
      userAvatar,
      userName,
      userLocation,
      userDescription,
      userLinks,
      userTwitter,
    } = this.props.config;
    const { expanded } = this.props;
    const userLinksElement = (
      <UserLinks config={this.props.config} labeled={expanded} />
    );
    if (!userAvatar && !userName && !userLocation && !userDescription) {
      if (userLinks) {
        return (
          <Card className="md-grid md-cell md-cell--12 user-info">
            {userLinksElement}
          </Card>
        );
      }
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardTitle
          expander={!expanded}
          avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
          title={userName && userName}
          subtitle={
            userTwitter ? (
              <Follow
                username={userTwitter}
                options={{ count: expanded ? "none" : "none" }}
              />
            ) : (
              "Author"
            )
          }
        />
        <CardContent expandable={!expanded}>
          {userLocation}
          <p>{userDescription && userDescription}</p>
          {userLinksElement}
        </CardContent>
      </Card>
    );
  }
}

export default UserInfo;

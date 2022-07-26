import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./About.scss";
import Card, { CardText } from "../Card";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;

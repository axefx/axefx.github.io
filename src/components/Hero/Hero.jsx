import React, { Component } from 'react';
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";


class Hero extends Component {

  render() {
    return (
      <div className="hero-section">
        <Card className="md-grid md-cell md-cell--12">
          <CardText>
            <h1>Hero Section</h1>
          </CardText>
        </Card>
      </div>
    );
  }

}

export default Hero;

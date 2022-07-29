import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import MainLayout from "../components/Layout";

class AboutPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <MainLayout location={this.props.location} className="about-container">
          <About />
        </MainLayout>
      </>
    );
  }
}

export default AboutPage;

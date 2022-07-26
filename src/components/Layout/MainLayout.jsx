import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import HeaderContainer from "../Header";
import config from "../../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import { capitalize } from "../../utils";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "";
    } else if (currentPath === "tags") {
      title = "Tags";
    } else if (currentPath === "categories") {
      title = "Categories";
    } else if (currentPath === "about") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags")) {
      const tag = currentPath
        .replace("tags", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories")) {
      const category = currentPath
        .replace("categories", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }

  render() {
    const { children, className } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className={className}>
          <HeaderContainer config={config} localTitle={this.getLocalTitle()} />
          {children}
        </div>
      </>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.object.isRequired,
};

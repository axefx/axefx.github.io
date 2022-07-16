import React from "react";
import PropTypes from "prop-types";
import RenderHeader from "./RenderHeader";

const HeaderContainer = ({ localTitle, config }) => {
  return <RenderHeader siteTitle={config.siteTitle} localTitle={localTitle} />;
};

HeaderContainer.propTypes = {
  config: PropTypes.object,
  localTitle: PropTypes.string,
};

export default HeaderContainer;

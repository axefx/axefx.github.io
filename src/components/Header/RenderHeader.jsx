import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SiteLogo from "../../../static/logos/SiteLogo-noBG.svg";

const RenderHeader = ({ localTitle }) => {
  return (
    <div id="header">
      <div id="logo">
        <Link to="/">
          {SiteLogo ? (
            <img src={SiteLogo} alt="axeFx" />
          ) : (
            <img src="/logos/SiteLogo-noBG.svg" alt="axeFx" />
          )}
        </Link>
      </div>
      {localTitle ? <h2>{localTitle}</h2> : null}
    </div>
  );
};

RenderHeader.propTypes = {
  siteTitle: PropTypes.string,
  localTitle: PropTypes.string,
};

export default RenderHeader;

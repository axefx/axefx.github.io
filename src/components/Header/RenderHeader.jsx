import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const RenderHeader = ({ siteTitle, localTitle }) => {
  return (
    <div id="header">
      <div id="logo">
        <Link to="/">
          {<img src="/logos/SiteLogo-noBG.svg" alt="axeFx" /> ? (
            <img src="/logos/SiteLogo-noBG.svg" alt="axeFx" />
          ) : (
            <h1>{siteTitle}</h1>
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

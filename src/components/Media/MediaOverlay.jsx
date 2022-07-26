import React from "react";
import PropTypes from "prop-types";

const MediaOverlay = (props) => {
  return (
    <div
      className="media-overlay"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2, display: "flex" }}
    >
      {props.children}
    </div>
  );
};

MediaOverlay.propTypes = {};

export default MediaOverlay;

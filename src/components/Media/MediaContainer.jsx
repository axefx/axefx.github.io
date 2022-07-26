import React from "react";
import PropTypes from "prop-types";

const MediaContainer = ({ children, cover, coverHeight, className }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        backgroundImage: `url(${cover})`,
        height: `${coverHeight}px`,
      }}
    >
      {children}
    </div>
  );
};

MediaContainer.propTypes = {
  cover: PropTypes.string,
  coverHeight: PropTypes.number,
  className: PropTypes.string,
};

export default MediaContainer;

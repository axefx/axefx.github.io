import React from "react";
import PropTypes from "prop-types";

const CardTitle = ({ title, subtitle, avatar, children, className }) => {
  return (
    <div className={className}>
      {avatar}
      <div>
        <h3 className="card-title--title text">{title}</h3>
        {subtitle ? (
          <h4 className="md-card-title--title text--secondary">{subtitle}</h4>
        ) : null}
      </div>
      {children}
    </div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardTitle;

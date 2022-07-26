import React from "react";
import PropTypes from "prop-types";

const Chip = (props) => {
  return <span className={props.className + " chip"}>{props.label}</span>;
};

Chip.propTypes = {};

export default Chip;

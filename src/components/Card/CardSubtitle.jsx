import React from "react";

const CardSubtitle = (props) => {
  return (
    <div className={props.className}>
      {props.avatar}
      <div className="card-title--subtitle">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </div>
      {props.children}
    </div>
  );
};

export default CardSubtitle;

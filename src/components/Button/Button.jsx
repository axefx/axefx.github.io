import React from "react";

const Button = ({ children, href, theme }) => {
  let backgroundColor = `button--${theme}`;
  if (href) {
    return (
      <a href={href}>
        <button className={backgroundColor}>{children}</button>
      </a>
    );
  } else {
    return <button className={backgroundColor}>{children}</button>;
  }
};

export default Button;

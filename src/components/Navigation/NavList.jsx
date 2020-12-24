import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import FccIcon from "./../../fcc-campfire-logo.svg";

// icon size 24 X 24

function FccLogo() {
  return <img src={FccIcon} alt="logo" height={24} width={24} />
}

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
    {
      primaryText: "FreeCodeCamp",
      leftIcon: <FccLogo />,
      component: "a",
      href: "https://www.freecodecamp.org/axefx"
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }
  NavList.push({ divider: true });

  NavList.push({
    primaryText: "TechNotes",
    leftIcon: <FontIcon>notes</FontIcon>,
    component: Link,
    to: "/tech-notes/"
  })

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;

import React, { useContext } from "react";
import classnames from "classnames";
import styles from "./ExternalLink.module.scss";

import { ThemeContext } from "../../../contexts/ThemeContext";

const ExternalLink = ({ text, icon, href }) => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <a
      href={href}
      className={classnames(
        "helpingMarginLR noWrap text-highlight",
        styles.textHighlight,
        styles.hvrSweepToRight
      )}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: LocalTheme.textBackground }}
    >
      <strong style={{ color: LocalTheme.syntax }}>
        {text} <i className={icon}></i>
      </strong>
    </a>
  );
};

export default ExternalLink;

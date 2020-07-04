import React, { useContext } from "react";
import classnames from "classnames";
import styles from "./InternalLink.module.scss";

import { ThemeContext } from "../../../contexts/ThemeContext";

const InternalLink = ({ text, href, emoji }) => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classnames("noWrap zFix", styles.zFix)}
      // style={{ backgroundColor: LocalTheme.textBackground }}
    >
      <span className={classnames("borderMarker", styles.borderMarker)}>
        <strong style={{ color: LocalTheme.syntax }}>{text}</strong> {emoji}
      </span>
    </a>
  );
};

export default InternalLink;

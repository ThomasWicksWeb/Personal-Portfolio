import React, { useContext } from "react";
import { Emoji } from "../Emoji";
import classnames from "classnames";
import styles from "./SectionHeader.module.scss";

import { ThemeContext } from "../../../contexts/ThemeContext";

const SectionHeader = ({ HeaderText, emoji, label, classes }) => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <div className={classnames("container", styles.bannerTextContainer)}>
      <h3
        className={classnames("is-size-2", styles.sectionHeader)}
        style={{ color: LocalTheme.syntax }}
      >
        {HeaderText} <Emoji emoji={emoji} label={label} classes={classes} />
      </h3>
    </div>
  );
};

export default SectionHeader;

import React, { useContext } from "react";
import styles from "./WicksLogo.module.scss";
import classnames from "classnames";

import { ThemeContext } from "../../../contexts/ThemeContext";

const WicksLogo = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <div
      id="LogoID"
      className={classnames("logoLight", styles.logoLight, styles.logo)}
      style={{ border: LocalTheme.wicksLogoBorder, color: LocalTheme.syntax }}
    >
      <span>WI</span>
      <span className={styles.negMargin}>CKS.</span>
    </div>
  );
};

export default WicksLogo;

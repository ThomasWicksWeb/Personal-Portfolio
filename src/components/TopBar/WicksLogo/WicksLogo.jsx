import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./WicksLogo.module.scss";
import classnames from "classnames";

import { ThemeContext } from "../../../contexts/ThemeContext";

const WicksLogo = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <Link to="/">
      <div
        id="LogoID"
        className={classnames("logoLight", styles.logoLight, styles.logo)}
        style={{ border: LocalTheme.wicksLogoBorder, color: LocalTheme.syntax }}
      >
        <span>WI</span>
        <span className={styles.negMargin}>CKS.</span>
      </div>
    </Link>
  );
};

export default WicksLogo;

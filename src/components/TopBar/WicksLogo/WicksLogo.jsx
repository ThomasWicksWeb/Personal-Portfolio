import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./WicksLogo.module.scss";
import classnames from "classnames";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/ThemeContext";

const WicksLogo = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  let LogoTextWrapper = null;

  if (IsLightTheme) {
    LogoTextWrapper = styled.div`
      transition: all 0.2s;
      &:hover {
        background-color: #333 !important;
        color: #fefefe !important;
      }
    `;
  } else {
    LogoTextWrapper = styled.div`
      transition: all 0.2s;
      &:hover {
        background-color: ${Theme.light.backgroundColorLight} !important;
        color: #333 !important;
      }
    `;
  }

  return (
    <Link to="/">
      <LogoTextWrapper
        id="LogoID"
        className={classnames("logoLight", styles.logoLight, styles.logo)}
        style={{ border: LocalTheme.wicksLogoBorder, color: LocalTheme.syntax }}
      >
        <span className="has-font-weight-bold">WI</span>
        <span className={classnames("has-font-weight-bold", styles.negMargin)}>
          CKS.
        </span>
      </LogoTextWrapper>
    </Link>
  );
};

export default WicksLogo;

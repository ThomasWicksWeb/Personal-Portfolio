import React, { useContext } from "react";
import classnames from "classnames";
import styled from "styled-components";
import styles from "./InternalLink.module.scss";

import { ThemeContext } from "../../../contexts/ThemeContext";

const InternalLink = ({ text, href, emoji }) => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  let InternalLinkWrapper = null;

  if (IsLightTheme) {
    InternalLinkWrapper = styled.span`
      &::after {
        background-color: rgba(255, 147, 0, 0.5);
      }
    `;
  } else {
    InternalLinkWrapper = styled.span`
      &::after {
        background-color: #e54242;
      }
    `;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classnames("noWrap zFix", styles.zFix)}
    >
      <InternalLinkWrapper className={styles.borderMarker}>
        <strong style={{ color: LocalTheme.syntax }}>{text}</strong> {emoji}
      </InternalLinkWrapper>
    </a>
  );
};

export default InternalLink;

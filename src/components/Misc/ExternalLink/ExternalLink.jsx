import React, { useContext } from "react";
import classnames from "classnames";
import styled from "styled-components";
import styles from "./ExternalLink.module.scss";

import { ThemeContext } from "../../../contexts/ThemeContext";

const ExternalLink = ({ text, icon, href }) => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  let ExternalLinkWrapper = null;

  if (IsLightTheme) {
    ExternalLinkWrapper = styled.a`
      transition: all 0.3s;

      &:before {
        background-color: ${LocalTheme.externalLinkHover};
      }

      &:hover {
        & strong {
          // color: ${Theme.dark.syntax}
          color: ${LocalTheme.syntax}
        }
      }

      & strong {
        color: ${LocalTheme.syntax};
      }
    `;
  } else {
    ExternalLinkWrapper = styled.a`
      transition: all 0.3s;

      &:before {
        background-color: ${LocalTheme.externalLinkHover};
      }

      & strong {
        color: ${LocalTheme.syntax};
      }
    `;
  }

  return (
    <ExternalLinkWrapper
      href={href}
      className={classnames(
        "helpingMarginLR noWrap text-highlight",
        // styles.textHighlight,
        styles.hvrSweepToRight
      )}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: LocalTheme.textBackground }}
    >
      <strong>
        {text} <i className={icon}></i>
      </strong>
    </ExternalLinkWrapper>
  );
};

export default ExternalLink;

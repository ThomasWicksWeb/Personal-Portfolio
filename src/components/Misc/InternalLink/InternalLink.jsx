import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/ThemeContext";

export default function InternalLink({ text, to }) {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  const Wrapper = styled.span`
    position: relative;
    // color: #333;
    color: ${LocalTheme.syntax};
    padding: 4px 8px;
    margin: 0 0.5rem;
    &::after {
      content: "" !important;
      position: absolute !important;
      z-index: -1 !important;
      top: 70% !important;
      left: -0.1px !important;
      right: -0.1px !important;
      bottom: 0 !important;
      transition: top 0.1s ease-in-out;
      // background-color: rgba(255, 147, 0, 0.5) !important;
      background-color: ${LocalTheme.textBackground} !important;
    }
    &:hover::after {
      top: 0 !important;
    }
    // zFix
    z-index: 0 !important;
  `;

  return (
    <Link
      to={to}
      // onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    >
      <Wrapper>
        <strong>{text}</strong>
      </Wrapper>
    </Link>
  );
}

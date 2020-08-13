import React, { useContext } from "react";
import {ExternalLink} from "../Misc/ExternalLink";
import "./AppFooter.scss";

import { ThemeContext } from "../../contexts/ThemeContext";

const ContactMe = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <footer
      className="footer block"
      style={{
        backgroundColor: LocalTheme.backgroundColorDark,
        color: LocalTheme.syntax,
      }}
    >
      <div className="content has-text-centered block">
        <p className="is-size-5">
          Built with <i className="fas fa-heart redHeart"></i> by{" "}
          <strong style={{ color: LocalTheme.syntax }}>Thomas Wicks</strong> in
          [rainy, sunny, hot, humid, cold] New York
        </p>
        <p className="is-size-5 minH footerIcons redHeart negMarginLeft">
          <ExternalLink
            text="GitHub "
            icon="fab fa-github is-size-5 icons noWrap"
            label="GitHub"
            href="https://github.com/ThomasWicksWeb"
          />

          <ExternalLink
            text="LinkedIn "
            icon="fas fa-external-link-alt is-size-5 icons noWrap"
            label="LinkedIn"
            href="https://www.linkedin.com/in/thomas-wicks-280b5717a/"
          />

          <ExternalLink
            text="Résumé "
            icon="fas fa-file-alt icons noWrap"
            label="Résumé"
            href="https://www.thomaswicks.com/resume.pdf"
          />
        </p>
      </div>
    </footer>
  );
};

export default ContactMe;

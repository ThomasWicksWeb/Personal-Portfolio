import React, { useContext } from "react";
import { InternalLink } from "../Misc/InternalLink";
import { Emoji } from "../Misc/Emoji";
import { ExternalLink } from "components/Misc/ExternalLink";
import "./MainSplash.scss";

import { ThemeContext } from "../../contexts/ThemeContext";

const MainSplash = ({ currentHourOfDay }) => {
  // Custom greeting for the visitor based on time of day
  const GetGreeting = () => {
    if (currentHourOfDay <= 2) {
      return "🌅 Good (super early) morning, I'm";
    } else if (currentHourOfDay >= 3 && currentHourOfDay <= 11) {
      return "🌅 Good morning, I'm";
    } else if (currentHourOfDay >= 12 && currentHourOfDay <= 19) {
      return "☀️ Good afternoon, I'm";
    } else {
      return "🌇 Good evening, I'm";
    }
  };

  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <section
      id="introSection"
      className="section introSection"
      style={{
        backgroundColor: LocalTheme.backgroundColorDark,
        color: LocalTheme.syntax,
      }}
    >
      <div className="container alignment headerParaCont">
        <p className="is-size-3 timeText" id="timeText">
          {GetGreeting()}
        </p>
        <p className="is-size-1 myName">
          <strong style={{ color: LocalTheme.syntax }}>Thomas Wicks</strong>{" "}
          <span className="cheers">
            <Emoji emoji="🎉" label="Cheers!" />
          </span>
        </p>
        <p className="is-size-5 has-text-centered">
          a software developer from the little-known state of New York.
        </p>
        <p className="is-size-5">Down below are some of my projects</p>
        <p className="is-size-5 zFix">
          Alternatively, you can view my
          <InternalLink
            href="https://thomaswicks.com/resume.pdf"
            text="résumé"
            emoji="📝"
          />
        </p>
        <p className="is-size-5 zFix">
          If you're looking to get in touch,
          <InternalLink href="#contactMe" text="shoot me an email" emoji="✉️" />
        </p>
        <p className="is-size-5 icons minH MainSplashIcons">
          <ExternalLink
            text="GitHub"
            icon="fas fa-external-link-alt is-size-5"
            href="https://github.com/ThomasWicksWeb"
          />

          <ExternalLink
            text="LinkedIn"
            icon="fas fa-external-link-alt is-size-5"
            href="https://www.linkedin.com/in/thomas-wicks-280b5717a/"
          />
        </p>
        <p id="scrollOnDown" className="is-size-5 arrowBounce">
          <Emoji emoji="👇" label="Point down" />
          Scroll on Down
          <Emoji emoji="👇" label="Point down" />
        </p>
      </div>
    </section>
  );
};

export default MainSplash;

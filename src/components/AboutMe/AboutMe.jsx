import React, { useContext } from "react";
import "./AboutMe.scss";
import { Emoji } from "../Misc/Emoji";
import { SectionHeader } from "../Misc/SectionHeader";
import { ExternalLink } from "../Misc/ExternalLink";
import { TechUsed } from "./TechUsed";

import { ThemeContext } from "../../contexts/ThemeContext";

const AboutMe = () => {
  // Theme Context Variables
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <div
      id="aboutMe"
      className="tint sectionPadding"
      style={{
        backgroundColor: LocalTheme.backgroundColorLight,
        color: LocalTheme.syntax,
      }}
    >
      <div className="container ">
        <SectionHeader
          HeaderText="About Me"
          emoji="🎓"
          label="Graduation cap"
        />
        <div className="smallGridParent">
          <div className="projectsSmallGrid AboutMeColumns">
            <div>
              {/* <p className="is-size-5">
                I am currently pursuing a career in law enforcement as a police
                officer.
                <Emoji label="Police Officer" emoji="👮" />
              </p>
              <br /> */}
              <p className="is-size-5">
                I've recently graduated from Farmingdale State College in May of
                2020 with a Bachelor's degree in Computer Programming &amp;
                Information Systems
                <Emoji label="School building" emoji="🏛️" />
              </p>
              <br />
              <p className="is-size-5">
                I can speak a decent bit of German
                <Emoji label="German flag" emoji="🇩🇪" />
              </p>
              <br />
              <p className="is-size-5">
                I really enjoy programming, gaming, and listening to music &amp;
                podcasts
                <Emoji label="Floppy Disc" emoji="💾" />
              </p>
              <br />
              <p className="is-size-5 zFix">
                I have a 10 year old pug named
                <ExternalLink
                  text="Frank 🐶"
                  href="https://thomaswicks.com/Frank.JPG"
                  // icon="🐶"
                />
              </p>
              <TechUsed />
            </div>
            <div>
              <img
                src="./images/thatsme.jpg"
                alt="That's me!"
                className="ImageOfMe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

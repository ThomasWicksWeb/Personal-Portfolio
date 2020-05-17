import React from "react";
import "./AboutMe.scss";
import Emoji from "../Misc/Emoji";
import SectionHeader from "../Misc/SectionHeader";
import ExternalLink from "../Misc/ExternalLink";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="tint sectionPadding">
      <div className="container ">
        <SectionHeader
          HeaderText="About Me"
          emoji="🎓"
          label="Graduation cap"
        />
        <div className="smallGridParent">
          <div className="projectsSmallGrid AboutMeColumns">
            <div>
              <p className="is-size-5">
                I'll be graduating from Farmingdale State College in May of 2020
                with a Bachelor's degree in Computer Programming &amp;
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
            </div>
            <div>
              <img src="./images/thatsme.jpg" alt="That's me!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

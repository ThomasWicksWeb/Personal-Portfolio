import React, { useContext } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { personalProjectsLarge, personalProjectsSmall } from "./data";
import { ExternalLink } from "../Misc/ExternalLink";
import { SectionHeader } from "../Misc/SectionHeader";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

// Images
import imageLight from "./images/LineBackgroundLeftLight.svg";
import imageDark from "./images/LineBackgroundLeftDark.svg";

// SCSS
import "./PersonalProjects.scss";

const PersonalProjects = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  // Mapping projects that appear as large (Web Dev Resources)
  const PPListLarge = personalProjectsLarge.map((item) => {
    // Check to see if
    const CheckIfAuthNeeded = () => {
      if (item.username && item.password) {
        return (
          <p className="is-size-6">
            <strong style={{ color: LocalTheme.syntax }}>
              Give it a Try -{" "}
            </strong>
            Username: <i>{item.username}</i> &amp; Password:{" "}
            <i>{item.password}</i>
          </p>
        );
      }
    };

    return (
      <article
        key={item.title}
        className="roundedCorners"
        style={{ backgroundColor: LocalTheme.backgroundColorDark }}
      >
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img src={item.img} alt={item.imgAlt} />
        </a>
        <div
          className="textContainer dottedWhenDark"
          style={{ color: LocalTheme.syntax }}
        >
          <h2>
            <strong style={{ color: LocalTheme.syntax }}>{item.title}</strong>
          </h2>
          <p className="is-size-5">{item.desc}</p>
          <p className="is-size-6">
            Technologies Used:{" "}
            <strong style={{ color: LocalTheme.syntax }}>
              {item.techUsed}
            </strong>
          </p>
          {CheckIfAuthNeeded()}
          <p className="is-size-6 ProjectLinkContainer">
            <ExternalLink
              href={item.live}
              text={"View Project"}
              icon={"fas fa-external-link-alt is-size-5"}
            />
            <ExternalLink
              text={"View on GitHub"}
              icon={"fab fa-github is-size-5"}
              href={item.github}
            />
          </p>
        </div>
      </article>
    );
  });

  // Mapping projects that appear as small (German Word A day, Tesla Tracker)
  const PPListSmall = personalProjectsSmall.map((item) => {
    return (
      <article
        key={item.title}
        className="roundedCorners"
        style={{ backgroundColor: LocalTheme.backgroundColorDark }}
      >
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img
            src={item.img}
            alt={item.imgAlt}
            title="Drip on the Wall WIP Thumbnail"
          />
        </a>
        <div
          className="textContainer dottedWhenDark"
          style={{ color: LocalTheme.syntax }}
        >
          <h2>
            <strong style={{ color: LocalTheme.syntax }}>{item.title}</strong>
          </h2>
          <p className="is-size-5">{item.desc}</p>
          <p className="is-size-6">
            Technologies Used:{" "}
            <strong style={{ color: LocalTheme.syntax }}>
              {item.techUsed}
            </strong>
          </p>
        </div>
        <p className={classnames("is-size-6 ProjectLinkContainer")}>
          <ExternalLink
            href={item.live}
            text={"View Project"}
            icon={"fas fa-external-link-alt is-size-5"}
          />
          <ExternalLink
            text={"View on GitHub"}
            icon={"fab fa-github is-size-5"}
            href={item.github}
          />
        </p>
      </article>
    );
  });

  let background = IsLightTheme ? imageLight : imageDark;

  const Wrapper = styled.section`
    background-image: url("${background}");
    background-position: left;
    background-repeat: no-repeat;
  `;

  return (
    <Wrapper
      className="section personalProjectsSection"
      style={{ backgroundColor: LocalTheme.backgroundColorLight }}
    >
      <SectionHeader emoji="📂" label="Folder emoji" HeaderText="My Projects" />
      <div className="largeGridParent">
        <div className="projectsLargeGrid">
          {/* Large projects */}
          {PPListLarge}
        </div>
      </div>
      <div className="smallGridParent">
        <div className="projectsSmallGrid">
          {/* Smaller projects */}
          {PPListSmall}
        </div>
      </div>
    </Wrapper>
  );
};

export default PersonalProjects;

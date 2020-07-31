import React, { useContext } from "react";
import { projectsLarge, projectsSmall } from "./data/data";
import { ExternalLink } from "../Misc/ExternalLink";
import { SectionHeader } from "../Misc/SectionHeader";

import { ThemeContext } from "../../contexts/ThemeContext";

import classnames from "classnames";
import "./ClientWork.scss";

const ClientWork = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  // Mapping each project in ClientWork
  const LargeClientsProjectList = projectsLarge.map((item) => {
    return (
      <article
        key={item.title}
        className="roundedCorners invertDark"
        style={{
          backgroundColor: LocalTheme.backgroundColorLight,
          color: LocalTheme.syntax,
        }}
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
        <div className="textContainer invertDark">
          <h2 className={classnames("")}>
            <strong style={{ color: LocalTheme.syntax }}>{item.title}</strong>
          </h2>
          <p className="is-size-5">{item.desc}</p>
          <p className="is-size-6">
            Technologies Used:{" "}
            <strong style={{ color: LocalTheme.syntax }}>
              {item.techUsed}
            </strong>
          </p>
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
  const PPListSmall = projectsSmall.map((item) => {
    return (
      <article
        key={item.title}
        className="roundedCorners"
        style={{ backgroundColor: LocalTheme.backgroundColorLight }}
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

  return (
    <section
      className="section"
      style={{ backgroundColor: LocalTheme.backgroundColorDark }}
    >
      <SectionHeader emoji="📁" label="Folder emoji" HeaderText="Client Work" />
      <div className="largeGridParent">
        <div className="projectsLargeGrid">
          {/* Large projects */}
          {LargeClientsProjectList}
        </div>
      </div>
      <div className="smallGridParent">
        <div className="projectsSmallGrid">
          {/* Smaller projects */}
          {PPListSmall}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;

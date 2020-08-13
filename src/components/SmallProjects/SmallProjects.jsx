import React, { useContext } from "react";
import classnames from "classnames";

// Componentx
import { ExternalLink } from "../Misc/ExternalLink";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SmallProjects({ data }) {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  const Projects = data.map((item) => {
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
    <div className="smallGridParent">
      <div className="projectsSmallGrid">{Projects}</div>
    </div>
  );
}

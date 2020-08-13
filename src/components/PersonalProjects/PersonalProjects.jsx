import React, { useContext } from "react";

// Components
import { SectionHeader } from "../Misc/SectionHeader";
import { LargeProjects } from "../LargeProjects";
import { SmallProjects } from "../SmallProjects";

// Data
import { projectsLarge, projectsSmall } from "./data";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

// SCSS
import "./PersonalProjects.scss";

export default function PersonalProjects() {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <section
      className="section personalProjectsSection"
      style={{ backgroundColor: LocalTheme.backgroundColorDark }}
    >
      <SectionHeader emoji="📂" label="Folder emoji" HeaderText="My Projects" />
      <LargeProjects data={projectsLarge} />
      <SmallProjects data={projectsSmall} />
    </section>
  );
}

import React, { useContext } from "react";

// Components
import { SectionHeader } from "../../../components/Misc/SectionHeader";
import { LargeProjects } from "../../../components/LargeProjects";
import { SmallProjects } from "../../../components/SmallProjects";

// Data
import { projectsLarge, projectsSmall } from "./data/data";

// Contexts
import { ThemeContext } from "../../../contexts/ThemeContext";

const ClientWork = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <section
      className="section"
      style={{ backgroundColor: LocalTheme.backgroundColorDark }}
    >
      <SectionHeader emoji="📁" label="Folder emoji" HeaderText="Client Work" />
      <LargeProjects data={projectsLarge} />
      <SmallProjects data={projectsSmall} />
    </section>
  );
};

export default ClientWork;

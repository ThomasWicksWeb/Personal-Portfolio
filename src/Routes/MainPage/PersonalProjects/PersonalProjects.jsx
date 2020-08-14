import React from "react";

// Components
import { SectionHeader } from "../../../components/Misc/SectionHeader";
import { LargeProjects } from "../../../components/LargeProjects";
import { SmallProjects } from "../../../components/SmallProjects";

// Data
import { projectsLarge, projectsSmall } from "./data";

// SCSS
import "./PersonalProjects.scss";

export default function PersonalProjects() {
  return (
    <section className="section personalProjectsSection">
      <SectionHeader emoji="📂" label="Folder emoji" HeaderText="My Projects" />
      <LargeProjects data={projectsLarge} />
      <SmallProjects data={projectsSmall} />
    </section>
  );
}

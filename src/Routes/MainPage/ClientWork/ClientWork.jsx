import React from "react";

// Components
import { SectionHeader } from "../../../components/Misc/SectionHeader";
import { LargeProjects } from "../../../components/LargeProjects";
import { SmallProjects } from "../../../components/SmallProjects";

// Data
import { projectsLarge, projectsSmall } from "./data/data";

const ClientWork = () => {
  return (
    <section className="section">
      <SectionHeader emoji="📁" label="Folder emoji" HeaderText="Client Work" />
      <LargeProjects data={projectsLarge} />
      <SmallProjects data={projectsSmall} />
    </section>
  );
};

export default ClientWork;

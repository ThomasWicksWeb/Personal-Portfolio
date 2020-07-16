import React from "react";

// All components
import { MainSplash } from "../../components/MainSplash";
import { AboutMe } from "../../components/AboutMe";
import { ClientWork } from "../../components/ClientWork";
import { PersonalProjects } from "../../components/PersonalProjects";
import { ContactMe } from "../../components/ContactMe";

const MainPage = ({ currentHourOfDay }) => {
  return (
    <>
      <MainSplash currentHourOfDay={currentHourOfDay} />
      <AboutMe />
      <ClientWork />
      <PersonalProjects />
      <ContactMe />
    </>
  );
};

export default MainPage;

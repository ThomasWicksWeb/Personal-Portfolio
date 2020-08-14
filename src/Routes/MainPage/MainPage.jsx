import React from "react";
import { Helmet } from "react-helmet";

// All components
import { MainSplash } from "../../components/MainSplash";
import { AboutMe } from "../../components/AboutMe";
import { ClientWork } from "./ClientWork";
import { PersonalProjects } from "./PersonalProjects";
import { ContactMe } from "../../components/ContactMe";

const MainPage = () => {

  return (
    <main>
      <MainSplash />
      <AboutMe />
      <ClientWork />
      <PersonalProjects />
      <ContactMe />

      <Helmet>
        <title>Thomas Wicks | Web Development</title>
      </Helmet>
    </main>
  );
};

export default MainPage;

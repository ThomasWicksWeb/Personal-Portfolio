import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// All components
import { MainSplash } from "../../components/MainSplash";
import { AboutMe } from "../../components/AboutMe";
import { ClientWork } from "./ClientWork";
import { PersonalProjects } from "./PersonalProjects";
import { ContactMe } from "../../components/ContactMe";

// Images
import ImgLight from "./images/LineBackgroundLeftLight.svg";
import ImgDark from "./images/LineBackgroundLeftDark.svg";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

export default function MainPage() {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;
  let img = IsLightTheme ? ImgLight : ImgDark;

  const BackgroundImageWrapper = styled.div`
    background-image: url(${img});
    background-color: ${LocalTheme.backgroundColorDark};
    background-repeat: no-repeat;
  `;

  return (
    <main>
      <MainSplash />
      <AboutMe />
      <BackgroundImageWrapper>
        <ClientWork />
        <PersonalProjects />
      </BackgroundImageWrapper>
      <ContactMe />

      <Helmet>
        <title>Thomas Wicks | Web Development</title>
      </Helmet>
    </main>
  );
}

import React from 'react';
import TopBar from './components/TopBar/TopBar';
import MainSplash from './components/MainSplash/MainSplash';
import AboutMe from './components/AboutMe/AboutMe';
import ClientWork from './components/ClientWork/ClientWork';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import ContactMe from './components/ContactMe/ContactMe'
import AppFooter from './components/Footer/AppFooter'

import './style.scss';

function App() {

const currentHourOfDay = new Date().getHours();

  return (
    <>
      <TopBar currentHourOfDay={ currentHourOfDay } />
      <MainSplash currentHourOfDay={ currentHourOfDay } />
      <AboutMe />
      <ClientWork />
      <PersonalProjects />
      <ContactMe />
      <AppFooter />
    </>
  );
}

export default App;

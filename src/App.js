import React from 'react';
import TopBar from './components/TopBar';
import MainSplash from './components/MainSplash';
import AboutMe from './components/AboutMe';
import ClientWork from './components/ClientWork';
import PersonalProjects from './components/PersonalProjects';
import ContactMe from './components/ContactMe'
import AppFooter from './components/Footer'

import './style.scss';

function App() {

// Used for the dark mode slider in <TopBar /> and to set the greeting in <MainSplash />
const currentHourOfDay = new Date().getHours();

  return (
    <main>
      <TopBar currentHourOfDay={ currentHourOfDay } />
      <MainSplash currentHourOfDay={ currentHourOfDay } />
      <AboutMe />
      <ClientWork />
      <PersonalProjects />
      <ContactMe />
      <AppFooter />
    </main>
  );
}

export default App;

import React from 'react';
import TopBar from './components/TopBar/TopBar';
import MainSplash from './components/MainSplash/MainSplash';
import AboutMe from './components/AboutMe/AboutMe';
import ClientWork from './components/ClientWork/ClientWork';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';

function App() {

const currentHourOfDay = new Date().getHours();

  return (
    <div>
      <TopBar currentHourOfDay={ currentHourOfDay } />
      <MainSplash currentHourOfDay={ currentHourOfDay } />
      <AboutMe />
      <ClientWork />
      <PersonalProjects />
    </div>
  );
}

export default App;

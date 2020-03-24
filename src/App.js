import React from 'react';
import TopBar from './components/TopBar';
import MainSplash from './components/MainSplash';
import AboutMe from './components/AboutMe';
import ClientWork from './components/ClientWork';
import PersonalProjects from './components/PersonalProjects';

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

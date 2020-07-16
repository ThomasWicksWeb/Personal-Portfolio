import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { TopBar } from "./components/TopBar";
import { MainPage } from "./Routes/MainPage";
import { ContactPage } from "./Routes/ContactPage";
import { Footer } from "./components/Footer";

import "./style.scss";

function App() {
  // Used for the dark mode slider in <TopBar /> and to set the greeting in <MainSplash />
  const currentHourOfDay = new Date().getHours();

  return (
    <main>
      <BrowserRouter>
        <TopBar currentHourOfDay={currentHourOfDay} />
        <Switch>
          <Route
            path="/"
            component={MainPage}
            currentHourOfDay={currentHourOfDay}
            exact
          />
          <Route path="/contact" component={ContactPage} exact />
        </Switch>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;

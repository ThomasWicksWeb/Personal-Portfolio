import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { TopBar } from "./components/TopBar";
import { MainPage } from "./Routes/MainPage";
import { ContactPage } from "./Routes/ContactPage";
import { RouteNotFound } from "./Routes/RouteNotFound";
import { Footer } from "./components/Footer";

import "./style.scss";
import { ReportABug } from "Routes/ReportABug";

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
          <Route path="/report" component={ReportABug} exact />
          <Route component={RouteNotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;

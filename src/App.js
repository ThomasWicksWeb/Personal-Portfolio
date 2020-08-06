import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Routes
import { MainPage } from "./Routes/MainPage";
import { ReportABug } from "Routes/ReportABug";
import { ContactPage } from "./Routes/ContactPage";
import { RouteNotFound } from "./Routes/RouteNotFound";

// Components
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";

// Styles
import "./style.scss";

function App() {
  return (
    <main>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path="/" component={MainPage} exact />
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

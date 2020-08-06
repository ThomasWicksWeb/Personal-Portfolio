import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import HoursContextProvider from "./contexts/HoursContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HoursContextProvider>
        <App />
      </HoursContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

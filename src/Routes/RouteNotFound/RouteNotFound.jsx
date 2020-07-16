import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./RouteNotFound.module.scss";

const RouteNotFound = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <main>
      <section
        className={classnames("section", styles.MainContainer)}
        style={{
          backgroundColor: LocalTheme.backgroundColorDark,
          color: LocalTheme.syntax,
        }}
      >
        <div className="container">
          <h1 className="is-size-1 has-text-centered has-text-weight-bold">
            404!
          </h1>
          <h2 className="is-size-4 has-text-centered">
            Whoops! Looks like you took the wrong turn
          </h2>
          <div className="has-text-centered">
            <Link to="/" className="is-size-6 button is-link has-text-weight-bold">
              Head back
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RouteNotFound;

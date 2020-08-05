import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import classnames from "classnames";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./RouteNotFound.module.scss";
import Frank404 from "./images/frank-404-min.jpg";

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
          <img
            src={Frank404}
            alt="Here's my dog though!"
            className={styles.FrankImage}
          />
          <h2 className="is-size-4 has-text-centered">
            Whoops! Looks like you took the wrong turn.
          </h2>
          <h3 className="is-size-5 has-text-centered">But here's a photo of Frank :)</h3>
          <div className="has-text-centered">
            <Link
              to="/"
              className={classnames(
                "is-size-6 button is-link has-text-weight-bold",
                styles.HeadBack
              )}
            >
              Head back
            </Link>
          </div>
        </div>
      </section>
      <Helmet>
        <title>Thomas Wicks | Whoops! 404!</title>
      </Helmet>
    </main>
  );
};

export default RouteNotFound;

import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SectionHeader } from "../../components/Misc/SectionHeader";

import styles from "./ReportABug.module.scss";

const ReportABug = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <main styles={styles.DottedBG}>
      <section
        // Not sure why the imported styles from the scss file
        // does not apply the dottedBG background image.
        // However, the current workaround is applying the 'contactMe' class below
        className="section contactMe"
        style={{
          backgroundColor: LocalTheme.backgroundColorDark,
          color: LocalTheme.syntax,
        }}
      >
        <div className="container">
          <SectionHeader
            HeaderText="Report A Bug"
            emoji="🐞"
            label="Report A Bug!"
          />
          <form
            className="form"
            action="https://formspree.io/thomaswicks.ch@gmail.com"
            method="POST"
          >
            <div className="field">
              <label
                htmlFor="email"
                className="label is-size-5"
                style={{ color: LocalTheme.syntax }}
              >
                Email
              </label>
              <div className="control">
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label
                htmlFor="message"
                className="label is-size-5"
                style={{ color: LocalTheme.syntax }}
              >
                Message
              </label>
              <div className="control">
                <textarea
                  id="message"
                  className="textarea"
                  placeholder="Please explain the bug you encountered"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button value="submit" type="submit" className="button is-link">
                  Report
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ReportABug;
//HeaderText, emoji, label, classes

import React, { useContext } from "react";
import SectionHeader from "../Misc/SectionHeader";
import "./ContactMe.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const ContactMe = () => {
  const { IsLightTheme, Theme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  return (
    <section
      id="contactMe"
      className="section contactMe"
      style={{
        backgroundColor: LocalTheme.backgroundColorDark,
        color: LocalTheme.syntax,
      }}
    >
      <div className="container">
        <SectionHeader
          emoji="✉️"
          label="Folder emoji"
          HeaderText="Contact Me"
        />
        <form
          className="form"
          action="https://formspree.io/thomaswicks.ch@gmail.com"
          method="POST"
        >
          <div className="field">
            <label
              htmlFor="name"
              className="label is-size-5"
              style={{ color: LocalTheme.syntax }}
            >
              Name
            </label>
            <div className="control">
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Your name"
                name="name"
              />
            </div>
          </div>

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
                placeholder="Hey there"
                name="message"
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button value="submit" type="submit" className="button is-link">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

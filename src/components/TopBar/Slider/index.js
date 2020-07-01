import React, { useContext, useRef, useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import classnames from "classnames";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Slider = ({ currentHourOfDay }) => {
  const { IsLightTheme, Theme, setTheme } = useContext(ThemeContext);
  const LocalTheme = IsLightTheme ? Theme.light : Theme.dark;

  const SliderRef = useRef();

  const [SliderValue, setSliderValue] = useState(false);

  useEffect(() => {
    if (currentHourOfDay <= 5 || currentHourOfDay >= 20) {
      // SliderRef.checked = true;
      setSliderValue(true);
      setTheme(false);
      // Border to border marker
      BorderMarkerCSS();
    }
  }, []);

  const handleSlider = (e) => {
    // e.preventDefault();

    if (SliderValue) {
      setSliderValue(false);
      setTheme(true);
      BorderMarkerCSS();
    } else {
      setSliderValue(true);
      setTheme(false);
      BorderMarkerCSS();
    }
  };

  function BorderMarkerCSS() {
    document
      .querySelectorAll(".borderMarker")
      .forEach((e) => e.classList.toggle("borderMarkerDark"));
  }

  return (
    <div>
      <label className={styles.switch}>
        <input
          ref={SliderRef}
          checked={SliderValue}
          type="checkbox"
          onChange={handleSlider}
        />
        <span className={classnames(styles.round, styles.slider)}>&nbsp;</span>
      </label>
    </div>
  );
};

export default Slider;

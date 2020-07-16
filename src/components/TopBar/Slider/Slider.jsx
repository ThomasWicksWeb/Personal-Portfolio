import React, { useContext, useRef, useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import classnames from "classnames";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Slider = ({ currentHourOfDay }) => {
  const { setTheme } = useContext(ThemeContext);

  const SliderRef = useRef();

  const [SliderValue, setSliderValue] = useState(false);

  useEffect(() => {
    if (currentHourOfDay <= 5 || currentHourOfDay >= 21) {
      setSliderValue(true);
      setTheme(false);
    }
  }, [setTheme, currentHourOfDay]);

  const handleSlider = () => {
    if (SliderValue) {
      setSliderValue(false);
      setTheme(true);
    } else {
      setSliderValue(true);
      setTheme(false);
    }
  };

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

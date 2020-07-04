import React from "react";
import { Slider } from "./Slider";
import { ColorBar } from "./ColorBar";
import { WicksLogo } from "./WicksLogo";

const TopBar = (props) => {
  return (
    <div>
      <ColorBar />
      <WicksLogo />
      <Slider currentHourOfDay={props.currentHourOfDay} />
    </div>
  );
};

export default TopBar;

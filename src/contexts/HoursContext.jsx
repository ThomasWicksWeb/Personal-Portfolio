import React, { createContext } from "react";

export const HoursContext = createContext();

// **
// 
// This context is used in MainSplash.jsx and Slider.jsx
//
// **

const HoursContextProvider = (props) => {

  const Hours = new Date().getHours();

  return (
    <HoursContext.Provider value={{ Hours }}>
      {props.children}
    </HoursContext.Provider>
  );
};

export default HoursContextProvider;

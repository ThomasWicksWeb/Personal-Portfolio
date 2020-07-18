import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [IsLightTheme, setTheme] = useState(true);

  const Theme = {
    light: {
      syntax: "#333",
      backgroundColorLight: "rgba(255, 255, 255, 0.938)",
      backgroundColorDark: "#fafafa",
      textBackground: "rgba(255, 147, 0, 0.5)",
      wicksLogoBorder: "2px solid #333",
      externalLinkHover: "#4a69bd"
    },
    dark: {
      syntax: "white",
      backgroundColorLight: "#1f2b46",
      backgroundColorDark: "#17223b",
      buttonBackground: "#e54242",
      linkText: "lightskyblue",
      textBackground: "#e54242",
      wicksLogoBorder: "2px solid white",
      externalLinkHover: "#4a69bd"
    },
  };

  return (
    <ThemeContext.Provider value={{ IsLightTheme, Theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

// import {ThemeContext, ThemeNames} from "./theme";
import React, { createContext, useEffect, useState } from "react";
import { base, themes } from "../styles/theme";

type ColorMode = "dark" | "light";

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  setColorMode: () => {
    return;
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode | null>("dark");

  useEffect(() => {
    document.documentElement.className = "";
    if (colorMode) {
      document.documentElement.classList.add(colorMode, `${theme}`, base.class);
    }
  }, []);

  const theme = colorMode === "light" ? themes.light : themes.dark;

  const setter = (c: ColorMode) => {
    console.log(c, "hmmm");
    const theme = c === "light" ? themes.light : themes.dark;
    setColorMode(c);
    document.documentElement.className = "";
    document.documentElement.classList.add(c, theme, base.class);
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setter,
      }}
    >
      <div className={`${base.class} ${theme} _container`}>{children}</div>
    </ColorModeContext.Provider>
  );
}

export default ThemeProvider;

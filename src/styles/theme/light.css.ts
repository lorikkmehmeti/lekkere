import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";
import { createShade, createTint } from "../utilities/utility-functions";

const TOKENS = {
  primary: "#004de4",
  secondary: "#f1d55c",
};

const LIGHT = {
  background_surface: "#FFFFFF",
  background_light: "#FBFBFC",
  background_medium: "#F4F5F5",
  background_contrast: "#2C2C2E",
  background_canvas: "#FFFFFF",
  text_contrast: "#FFFFFF",
  text_primary: "#2C2E30",
  text_secondary: "#A0A3A6",
  text_hint: "#D9DBDD",
  text_disabled: "#A3A3A3",
  divider: "#F4F5F5",
  backdrop: "rgba(16, 26, 35, 0.1)",
  border_light: "#E7E8E9",
  border_dark: "#D9DBDD",
  border_disabled: "#D4D4D4",
  success: "#41B871",
  error: "#EF4444",
  warning: "#F5D90A",
  info: "#3B82F6",
  primary: {
    "100": createTint(0.5, TOKENS.primary),
    "200": createTint(0.4, TOKENS.primary),
    "300": createTint(0.3, TOKENS.primary),
    "400": createTint(0.2, TOKENS.primary),
    "500": TOKENS.primary, // Main Color
    "600": createShade(0.2, TOKENS.primary),
    "700": createShade(0.3, TOKENS.primary),
    "800": createShade(0.4, TOKENS.primary),
  },
  secondary: {
    "100": createTint(0.5, TOKENS.secondary),
    "200": createTint(0.4, TOKENS.secondary),
    "300": createTint(0.3, TOKENS.secondary),
    "400": createTint(0.2, TOKENS.secondary),
    "500": TOKENS.secondary, // Main Color
    "600": createShade(0.1, TOKENS.secondary),
    "700": createShade(0.2, TOKENS.secondary),
    "800": createShade(0.3, TOKENS.secondary),
  },
};

export const colors = {
  ...LIGHT,
};

export const light = createTheme(colorTokens, {
  colors,
});

import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";
import { createShade, createTint } from "../utilities/utility-functions";

const TOKENS = {
  primary: "#004de4",
  secondary: "#f1d55c",
};

const DARK = {
  background_surface: "#171819",
  background_light: "#1D1E1F",
  background_medium: "#373739",
  background_contrast: "#505053",
  background_canvas: "#0C0C0D",
  text_contrast: "#171819",
  text_primary: "#E5E5E6",
  text_secondary: "#828387",
  text_hint: "#505053",
  text_disabled: "#525252",
  divider: "rgba(255, 255, 255, 0.04)",
  backdrop: "rgba(5, 5, 6, 0.4)",
  border_light: "#2C2C2E",
  border_dark: "#373739",
  border_disabled: "#262626",
  success: "#6ECB90",
  error: "#EF4444",
  warning: "#F5D90A",
  info: "#60A5FA",
  primary: {
    "100": createTint(0.5, TOKENS.primary),
    "200": createTint(0.4, TOKENS.primary),
    "300": createTint(0.3, TOKENS.primary),
    "400": createTint(0.2, TOKENS.primary),
    "500": TOKENS.primary, // Main Color
    "600": createShade(0.1, TOKENS.primary),
    "700": createShade(0.2, TOKENS.primary),
    "800": createShade(0.3, TOKENS.primary),
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
  ...DARK,
};

export const dark = createTheme(colorTokens, { colors });

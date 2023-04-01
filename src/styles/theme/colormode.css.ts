import { createThemeContract } from "@vanilla-extract/css";
/**
 * @param background_surface cards, modals, section background.
 * @param background_light page, section backgrounds.
 * @param background_medium page backgrounds.
 * @param background_contrast contrast backgrounds
 * @param background_canvas page backgrounds.
 * @param text_contrast text, icons.
 * @param text_primary primary text/icon color, headlines, body.
 * @param text_secondary body, buttons, list items.
 * @param text_hint helper text.
 * @param text_disabled disabled text/icons.
 * @param divider default border color.
 * @param backdrop overlays behind modals.
 * @param border_light default border light.
 * @param border_dark hover on border.
 * @param border_disabled border disabled.
 * @author Lorik Mehmeti
 */
const colors = {
  background_surface: null,
  background_light: null,
  background_medium: null,
  background_contrast: null,
  background_canvas: null,
  text_contrast: null,
  text_primary: null,
  text_secondary: null,
  text_hint: null,
  text_disabled: null,
  divider: null,
  backdrop: null,
  border_light: null,
  border_dark: null,
  border_disabled: null,
  primary: {
    "100": null,
    "200": null,
    "300": null,
    "400": null,
    "500": null,
    "600": null,
    "700": null,
    "800": null,
  },
  secondary: {
    "100": null,
    "200": null,
    "300": null,
    "400": null,
    "500": null,
    "600": null,
    "700": null,
    "800": null,
  },
  success: null,
  error: null,
  warning: null,
  info: null,
};

export const colorTokens = createThemeContract({ colors });

import { light } from "./light.css";
import { dark } from "./dark.css";
import { base } from "./base.css";
import { colorTokens as tokens } from "./colormode.css";

/**
 * Color tokens and "themes" (aka color modes)
 */
const themes = {
  light,
  tokens,
  dark,
};

export { themes, base };

import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import { themes } from "./styles/theme";
import { vars } from "./styles/utilities/variables.css";

const inter = "Inter";
const Aspekta = "Aspekta Variable";

globalFontFace(inter, {
  src: 'url("/Inter.ttf")',
  fontDisplay: "swap",
});
globalFontFace(Aspekta, {
  src: 'url("/AspektaVF.woff2")',
  fontDisplay: "swap",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
  color: themes.tokens.colors.text_primary,
});
globalStyle("*, *::before, *::after", {
  margin: 0,
  boxSizing: "border-box",
  color: "currentColor",
});
globalStyle("*", { fontFamily: "Inter" });

globalStyle("#root, .App, ._container, html, body", {
  height: "100%",
  background: themes.tokens.colors.background_surface,
  color: themes.tokens.colors.text_primary,
});

globalStyle(".lyrics > div", {
  fontSize: "24px",
  fontVariationSettings: "'wght' 400",
  marginBottom: 24,
  lineHeight: "35px",
  color: "rgba(255,255,255, .6)"
});

globalStyle(".lyrics > div.active", {
  color: "red"
})

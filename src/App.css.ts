import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { themes } from "./styles/theme";

const inter = "Inter";
const Aspekta = "Aspekta";
const Clash = "Clash Display";


globalFontFace(Clash, {
  src: 'url("/ClashDisplay.ttf")',
  fontDisplay: "swap"
})
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
globalStyle("*", { fontFamily: Aspekta });
globalStyle("._container", { position: "relative" });
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
  color: "rgba(255,255,255, .6)",
  textTransform: "uppercase",
  padding: "0 6px"
});

globalStyle(".lyrics > div.active", {
  color: "red"
})

import {globalFontFace, globalStyle} from "@vanilla-extract/css";
import {themes} from "./styles/theme";

const Inter = "Inter";
const Aspekta = "Aspekta";
const Clash = "Clash Display";
const Switzer = "Switzer";
const Programme = "Programme2";

globalFontFace(Clash, {
    src: 'url("/ClashDisplay.ttf")',
    fontDisplay: "swap"
});
globalFontFace(Switzer, {
    src: 'url("/Switzer.ttf")',
    fontDisplay: "swap"
})
globalFontFace(Inter, {
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
globalStyle("*", {
    fontFamily: Switzer,
});


globalFontFace(Programme, {
    src: 'url("/programme.woff2")',
    fontDisplay: "swap"
});

globalStyle(".lyrics a", {
    fontFamily: Programme
});

globalStyle("._container", {
  position: "relative",
  padding: 0,
  margin: 0
});
globalStyle("#root, .App, ._container, html, body", {
    padding: 0,
    margin: 0,
    height: "100%",
    background: themes.tokens.colors.background_canvas,
    color: themes.tokens.colors.text_primary,
});

globalStyle(".lyrics > a", {
    fontSize: "24px",
    fontVariationSettings: "'wght' 400",
    marginBottom: 20,
    lineHeight: "32px",
    color: "rgba(255,255,255, .6)",
    padding: "0 8px",
    display: "inline-flex",
    cursor: "pointer"
});

globalStyle(".lyrics", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

globalStyle(".lyrics > a.active", {
    color: themes.tokens.colors.background_canvas,
    background: themes.tokens.colors.secondary["500"]
})

import {style} from "@vanilla-extract/css";
import {themes} from "../../styles/theme";

export const player = style({
    transform: "translate3d(0,0,0)",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    height: 150,
    zIndex: 444,
});

export const PlayerContainer = style({
    width: "100%",
    height: "100%",
    background: themes.tokens.colors.background_surface,
    borderTop: `1px solid ${themes.tokens.colors.border_dark}`,
    '@supports': {
        '(backdrop-filter: blur(20px))': {
            background: "rgba(0,0,0, .4)",
            backdropFilter: "blur(20px)",
        }
    },
    position: "relative"
})
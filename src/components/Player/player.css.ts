import {style} from "@vanilla-extract/css";
import {themes} from "src/styles/theme";
import {sprinkles} from "src/styles/utilities/utility-styles.css";

export const player = style({
    transform: "translate3d(0,0,0)",
    position: "fixed",
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 444,
    padding: 0,
    margin: 0,
    background: themes.tokens.colors.background_surface,
    borderTop: `1px solid ${themes.tokens.colors.border_dark}`,
    '@supports': {
        '(backdrop-filter: blur(20px))': {
            background: "rgba(0,0,0, .4)",
            backdropFilter: "blur(20px)",
        }
    },
});

export const PlayerContainer = style([
    sprinkles({
        padding: {
            computer: 7,
            desktop: 6,
            tablet: 5,
            mobile: 5
        }
    }),
    {
        width: "100%",
        height: "100%",
        position: "relative",
    }
])
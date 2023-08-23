import {style} from "@vanilla-extract/css";
import {themes} from "../../../../../styles/theme";

export const SliderRoot = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: 500,
    height: 20,
});

export const SliderRootPo = style({

})

export const SliderTrack = style({
    backgroundColor: themes.tokens.colors.background_light,
    position: 'relative',
    flexGrow: 1,
    borderRadius: '9999px',
    height: 4,
    transition: "all 200ms ease",
    cursor: "pointer",
    '@media': {
        '(hover)': {
            ':hover': {
                height: 6
            }
        }
    }
});

export const SliderRange = style({
    position: 'absolute',
    backgroundColor: themes.tokens.colors.text_primary,
    borderRadius: '9999px',
    height: '100%',
    transition: "all 100ms ease",
});

export const SliderThumb = style( {
    display: 'block',
    width: 0,
    height: 0,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px black`,
    borderRadius: 10,
});
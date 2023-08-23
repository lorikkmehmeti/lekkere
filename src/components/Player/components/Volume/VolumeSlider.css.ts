import {style} from "@vanilla-extract/css";
import {themes} from "../../../../styles/theme";

export const VolumeSliderRoot = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    flex: "none",
    width: "100%",
    maxWidth: 150,
    height: 20,
});

export const VolumeSliderTrack = style({
    backgroundColor: themes.tokens.colors.background_light,
    position: 'relative',
    flexGrow: 1,
    borderRadius: '9999px',
    height: 4,
    cursor: "pointer",
    '@media': {
        '(hover)': {
            ':hover': {
                height: 6
            }
        }
    }
})

export const VolumeSliderThumb = style({
    display: 'block',
    width: 10,
    height: 10,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px black`,
    borderRadius: 10,
    ':focus': {
        outline: "none"
    }
});

export const VolumeSliderRange = style({
    position: 'absolute',
    backgroundColor: themes.tokens.colors.text_primary,
    borderRadius: '9999px',
    height: '100%',
})
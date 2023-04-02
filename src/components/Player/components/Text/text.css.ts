import {style} from "@vanilla-extract/css";
import {themes} from "src/styles/theme";
import {FONT_SIZE_PROPERTIES} from "src/styles/theme/tokens";
import {sprinkles} from "src/styles/utilities/utility-styles.css";

export const SongStyle = style([
    sprinkles({
        fontSize: {
            tablet: 2,
            mobile: 1
        }
    }), {
    color: themes.tokens.colors.text_primary,
    fontVariationSettings: "'wght' 600",
    fontWeight: 600,
}])

export const ArtistStyle = style([{
    color: themes.tokens.colors.text_hint,
    fontVariationSettings: "'wght' 400",
    fontWeight: 400,
    fontSize: FONT_SIZE_PROPERTIES["1"]
}])
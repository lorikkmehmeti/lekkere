import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { MEDIA_QUERIES, SPACE_PROPERTIES } from "../theme/tokens";
import { vars } from "./variables.css";

const responsiveProperties = defineProperties({
  conditions: MEDIA_QUERIES,
  defaultCondition: "desktop",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    width: SPACE_PROPERTIES,
    height: SPACE_PROPERTIES,
    paddingTop: SPACE_PROPERTIES,
    paddingBottom: SPACE_PROPERTIES,
    paddingLeft: SPACE_PROPERTIES,
    paddingRight: SPACE_PROPERTIES,
    marginTop: SPACE_PROPERTIES,
    marginBottom: SPACE_PROPERTIES,
    marginLeft: SPACE_PROPERTIES,
    marginRight: SPACE_PROPERTIES,
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
    typeSize: ["fontSize", "lineHeight"],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { selector: `.__dark_ &` },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.bg,
    background: vars.bg,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties
);

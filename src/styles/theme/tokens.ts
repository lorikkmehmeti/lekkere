export const ANIMATION = {
  default: "400ms ease-in",
  fast: "300ms ease-in",
};

export const BREAKPOINTS = {
  mobile: "320px",
  tablet: "768px",
  computer: "992px",
  desktop: "1200px",
  widescreen: "1920px",
};
type MediaQueries = Record<keyof typeof BREAKPOINTS, Record<string, string>>;
// Generates media queries formatted for Vanilla Extract
export const MEDIA_QUERIES: MediaQueries = Object.entries(BREAKPOINTS).reduce(
  (mergeObj, [key, value]) => ({
    ...mergeObj,
    [key]: { "@media": `screen and (min-width: ${value})` },
  }),
  {} as MediaQueries
);

export const FONTS = {
  body: "Roboto, Helvetiva Neue, Helvetica, Aria, sans-serif",
  heading: "Archivo, Helvetiva Neue, Helvetica, Aria, sans-serif",
  monospace: "Menlo, monospace",
};

/*
/* @param 0: 12px.
/* @param 1: 14px.
/* @param 2: 16px.
/* @param 3: 20px.
/* @param 4: 24px.
/* @param 5: 32px.
/* @param 6: 48px.
 */
export const FONT_SIZE_PROPERTIES = {
  0: "12px",
  1: "14px",
  2: "16px",
  3: "20px",
  4: "24px",
  5: "32px",
  6: "48px",
};

export const FONT_VARIATIONS: {
  NORMAL: number;
  MEDIUM: number;
  BOLD: number;
  BLACK: number;
  EXTRA_BOLD: number;
} = {
  NORMAL: 400,
  MEDIUM: 500,
  BOLD: 600,
  EXTRA_BOLD: 700,
  BLACK: 800,
};

// export const SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const SPACE_PROPERTIES = {
  0: "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
};

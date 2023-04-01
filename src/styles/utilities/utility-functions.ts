import { modularScale, shade, tint } from "polished";

export const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

export const createShade = (percentage: number, color: string) => {
  return shade(percentage, color);
};

export const createTint = (percentage: number, color: string) => {
  return tint(percentage, color);
};

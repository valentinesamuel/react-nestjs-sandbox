export type Theme = "light" | "dark";

export type ThemeAction = { type: string; payload: Theme };
export type ColorAction = { type: string; payload: string };

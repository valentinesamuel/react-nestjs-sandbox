import { ColorAction, Theme, ThemeAction } from "./types";

const THEME_ACTION_TYPES = {
  SET_THEME: "SET_THEME",
  GET_THEME: "GET_THEME",
};

const COLOR_ACTION_TYPES = {
  SET_COLOR: "SET_COLOR",
  GET_COLOR: "GET_COLOR",
};

export const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case THEME_ACTION_TYPES.SET_THEME:
      return action.payload;
    case THEME_ACTION_TYPES.GET_THEME:
      return state;
    default:
      return state;
  }
};

export const colorReducer = (state: string, action: ColorAction): string => {
  switch (action.type) {
    case "SET_COLOR":
      return action.payload;
    case "GET_COLOR":
      return state;
    default:
      return state;
  }
};

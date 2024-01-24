"use client";

import { createContext, useContext, useReducer, Dispatch } from "react";
import { ColorAction, Theme, ThemeAction } from "./Theme/types";
import { colorReducer, themeReducer } from "./Theme/reducer";
import { getLocalStorage } from "@/lib/utils";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<ThemeAction>;
  color: string;
  setColor: Dispatch<ColorAction>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

const getInintialTheme = () => {
  const theme = getLocalStorage("theme");
  return theme as Theme;
};

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useReducer(themeReducer, getInintialTheme());
  const [color, setColor] = useReducer(colorReducer, "");

  const value = { theme, setTheme, color, setColor };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}

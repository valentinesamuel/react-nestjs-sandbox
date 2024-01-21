"use client";

import { useThemeContext } from "@/context/theme.context";

const Theme = () => {
  const { theme } = useThemeContext();

  return <div>Current theme is: {theme}</div>;
};

export default Theme;

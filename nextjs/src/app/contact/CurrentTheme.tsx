"use client";
import { useThemeContext } from "@/context/theme.context";
import React from "react";

const CurrentTheme = () => {
  const { theme } = useThemeContext();
  return <div>CurrentTheme is === {theme}</div>;
};

export default CurrentTheme;

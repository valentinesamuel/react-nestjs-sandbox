"use client";
import { useAppSelector } from "@/lib/hooks";

const Theme = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  return <div>Current theme is: {currentTheme}</div>;
};

export default Theme;

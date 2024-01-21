"use client";
import { useAppSelector } from "@/lib/hooks";

const Contact = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  return <div>Current theme is: {currentTheme}</div>;
};

export default Contact;

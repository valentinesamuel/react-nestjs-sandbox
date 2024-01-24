"use client";
import { useThemeContext } from "@/context/theme.context";

function LightButton() {
  const { setTheme } = useThemeContext();

  return (
    <button
      onClick={() => {
        setTheme({
          type: "SET_THEME",
          payload: "light",
        });
      }}
    >
      Put light theme
    </button>
  );
}

export default LightButton;

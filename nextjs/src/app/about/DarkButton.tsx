"use client";
import { useThemeContext } from "@/context/theme.context";

function DarkButton() {
  const { setTheme } = useThemeContext();

  return (
    <button
      onClick={() => {
        setTheme({
          type: "SET_THEME",
          payload: "dark",
        });
      }}
    >
      Put dark theme
    </button>
  );
}

export default DarkButton;

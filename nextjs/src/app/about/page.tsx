"use client";
import { toggleTheme } from "@/lib/features/counter/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const About = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  return (
    <div>
      {currentTheme}
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme("light"))}>
        Put light theme
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme("dark"))}>
        Put dark theme
      </button>
      <Link href={"/contact"}>Go to contact</Link>
    </div>
  );
};

export default About;

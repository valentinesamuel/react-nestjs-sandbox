"use client";
import { useThemeContext } from "@/context/theme.context";
import Link from "next/link";
import Theme from "./Theme";

const About = () => {
  const { setTheme } = useThemeContext();
  return (
    <div>
      <Theme />
      <br />
      <br />
      <br />
      <button onClick={() => setTheme("light")}>Put light theme</button>
      <br />
      <br />
      <button onClick={() => setTheme("dark")}>Put dark theme</button>
      <Link href={"/contact"}>Go to contact</Link>
    </div>
  );
};

export default About;

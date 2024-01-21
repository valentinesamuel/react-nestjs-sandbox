"use client";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Contact = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  return (
    <div>
      Current theme is: {currentTheme}
      <br />
      <br />
      <br />
      <Link href={"/about"}>Go to about page</Link>
    </div>
  );
};

export default Contact;

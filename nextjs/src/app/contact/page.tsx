import Link from "next/link";
import CurrentTheme from "./CurrentTheme";

const Contact = () => {
  return (
    <div>
      <p className="text-4xl">Contact Page</p>
      <br />
      <CurrentTheme />
      <br />
      <br />
      <Link href={"/about"}>Go to about page</Link>
    </div>
  );
};

export default Contact;

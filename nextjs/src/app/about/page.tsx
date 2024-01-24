import Link from "next/link";
import Theme from "./Theme";
import DarkButton from "./DarkButton";
import LightButton from "./LightButton";

const About = () => {
  return (
    <div>
      <Theme />
      <br />
      <br />
      <br />
      <DarkButton />
      <br />
      <br />
      <LightButton />
      <br />
      <br />
      <Link href={"/contact"}>Go to contact</Link>
    </div>
  );
};

export default About;

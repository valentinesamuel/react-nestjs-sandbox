import gsap from "gsap";
import Box from "./Box";
import { useLayoutEffect, useRef } from "react";

function Anima3() {
  const appRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-animate='rotate']", {
        rotate: 45,
        x: 100,
        y: 100,
        backgroundColor: "green",
        duration: 2,
        ease: "bounce",
      });
    }, appRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={appRef}>
      <Box animation="rotate" className="bg-fuchsia-400 w-fit p-4">
        <p className="">
        Box that should rotate
        </p>
      </Box>
    </div>
  );
}

export default Anima3;

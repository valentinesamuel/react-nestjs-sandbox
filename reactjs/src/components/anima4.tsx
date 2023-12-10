import { useLayoutEffect, useRef } from "react";
import Box from "./Box";
import Circle from "./circle";
import gsap from "gsap";

const Anima4 = () => {
  const ele = useRef<HTMLDivElement>(null);
  const tl = useRef<unknown>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotate: -90,
          height: 100,
          width: 100,
          backgroundColor: "red",
        })
        .to(".circle", {
          x: 100,
          height: 100,
          width: 100,
          rotate: 360,
          duration: 2,
          ease: "bounce",
          backgroundColor: "teal",
        });
    }, ele);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ele}>
      <Box className="h-12 w-12">
        <p>Box</p>
      </Box>
      <Circle className="h-12 w-12 rounded-full">
        <p>Circle</p>
      </Circle>
    </div>
  );
};

export default Anima4;

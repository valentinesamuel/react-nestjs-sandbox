import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Anima2 = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        x: 20,
        y: 30,
        height: 100,
        width: 100,
        backgroundColor: "yellow",
        duration: 1,
        ease: "elastic",
      });
      gsap.to(".text", {
        x: 100,
        color: "red",
      });
    },containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={boxRef}></div>
      <p className="p-12 text-lg text w-fit">Hello</p>
    </div>
  );
};

export default Anima2;

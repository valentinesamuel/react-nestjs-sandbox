import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const MannualAnimations = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { x: 10 });
      animate("text", { opacity: 1 });
    };

    animation();
  }, []);

  return (
    <>
      <ul>
        <li style={{ width: "fit-content" }}> This is a list</li>
        <li style={{ width: "fit-content" }}> This is a list</li>
        <li style={{ width: "fit-content" }}> This is a list</li>
      </ul>
      <p ref={scope} className="text">
        Animated
      </p>
    </>
  );
};

export default MannualAnimations;

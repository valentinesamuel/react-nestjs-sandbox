import { useMotionValue, motion, animate, useTransform } from "framer-motion";
import { useEffect } from "react";

const SingleValueAnimation = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
    });

    return controls.stop;
  }, []);

  return (
    <div>
      <motion.p>{rounded}</motion.p>
    </div>
  );
};

export default SingleValueAnimation;

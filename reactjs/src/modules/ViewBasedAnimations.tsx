import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "120vh" }}></div>
      <motion.div
        style={{
          height: "90vh",
          background: "black",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;

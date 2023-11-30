import { motion, MotionConfig } from "framer-motion";
const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="example-button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
        >
          Click me
        </motion.button>
        <motion.button
          className="example-button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 2.05,
            rotate: "-25deg",
          }}
          style={{
            backgroundColor: "red",
          }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;

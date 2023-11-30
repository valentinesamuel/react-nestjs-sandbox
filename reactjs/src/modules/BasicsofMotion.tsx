import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsofMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        layout
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              backgroundColor: "green",
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              backgroundColor: "pink",
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -120, 0],
            }}
            transition={{
              duration: 5,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsofMotion;

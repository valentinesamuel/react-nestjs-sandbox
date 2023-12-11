import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SimpleAnimations() {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              x: 0,
              y: 0,
              backgroundColor: "yellow",
              color: "black",
              padding: 0,
              width: "fit-content",
            }}
            animate={{
              x: [null, 50, 25, 75, 100],
              y: [null, 25, 50, 75, 0],
              backgroundColor: "pink",
              padding: 8,
              width: "fit-content",
              marginBottom: 10,
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "red",
              padding: 16,
              transition: {
                duration: 0.8,
              },
            }}
            exit={{
              x: 0,
              y: 0,
              backgroundColor: "aqua",
              padding: 0,
              width: "fit-content",
            }}
            transition={{ duration: 2, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <p>Simple Animations</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        style={{ backgroundColor: "white" }}
        onClick={() => setIsVisible(!isVisible)}
      >
        Tog Visibility
      </button>
    </>
  );
}

export default SimpleAnimations;

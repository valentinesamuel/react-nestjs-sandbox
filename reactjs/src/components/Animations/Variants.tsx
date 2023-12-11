import { motion, Variants } from "framer-motion";

const variants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 10,
    y: 10,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

const VariantsAnimations = () => {
  const items = [1, 2, 3, 4, 5];

  return items.map((_item, i) => (
    <motion.li custom={i} animate="visible" variants={variants}>
      This is a list
    </motion.li>
  ));
};

export default VariantsAnimations;

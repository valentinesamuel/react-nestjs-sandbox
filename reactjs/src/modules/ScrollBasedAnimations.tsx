import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollBasedAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ["yellow", "green"]);

  return (
    <div>
      <motion.div
        style={{
          scaleX,
          //   scaleX: scrollYProgress,
          background,
          //   background: "blue",
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
        transition={{
          duration: 1,
        }}
      />
      <div style={{ padding: "1.2rem" }}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          unde nam blanditiis recusandae facere quod veniam laboriosam voluptate
          dolor, provident corporis assumenda maxime earum corrupti ad expedita,
          accusamus ipsa repellat modi? Saepe vitae minima unde voluptatum
          tempora molestias ad itaque reiciendis blanditiis. Odit asperiores
          consequuntur culpa vel autem voluptatum eos architecto eum doloremque
          explicabo. Veritatis suscipit minus cumque, rem, a corrupti, modi
          molestiae soluta dolore deserunt debitis eos animi voluptatem mollitia
          aspernatur et. Nulla sit officia rerum, magnam recusandae perspiciatis
          harum illum provident molestiae maiores cumque cum non voluptatem
          aliquam, velit, veniam alias ad voluptatibus obcaecati laudantium
          corporis dignissimos maxime.
        </p>
      </div>
    </div>
  );
};

export default ScrollBasedAnimations;

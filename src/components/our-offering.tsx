"use client";

import { motion } from "framer-motion";
import { solutionContent } from "../../constant/solutionContet";
import { Cards } from "./card-content";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const OurOffering = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      transition={{ duration: 1 }}
      className="mt-20 mb-20"
    >
      <motion.div
        variants={fadeInVariant}
        transition={{ duration: 1, delay: 0.5 }}
        className="py-16"
      >
        <h1 className="font-bold text-center mx-auto text-6xl">
          Our Offerings
        </h1>
      </motion.div>

      <motion.div
        className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-6"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {solutionContent.map(
          ({ bgColor, description, subTitle, textColor, title }) => (
            <motion.div
              key={title}
              variants={fadeInVariant}
              transition={{ duration: 1 }}
            >
              <Cards
                bgColor={bgColor}
                description={description}
                subTitle={subTitle}
                textColor={textColor}
                title={title}
              />
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

"use client";

import PortfolioCard from "@/components/portfolio-card";
import { motion } from "framer-motion";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const LatestProject = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      transition={{ duration: 1 }}
      className="mt-28 mb-28"
    >
      <div>
        <h1 className="text-6xl font-semibold text-center">
          Our Latest Projects
        </h1>
      </div>

      <motion.div
        className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInVariant} transition={{ duration: 1 }}>
          <PortfolioCard
            fullImage="/portfolio/portfolio-c-4.png"
            image="/portfolio/portfolio-4.png"
            title="Mobile Apps"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <PortfolioCard
            fullImage="/portfolio/portfolio-c-5.png"
            image="/portfolio/portfolio-5.png"
            title="Mental Health"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <PortfolioCard
            fullImage="/portfolio/portfolio-c-6.jpg"
            image="/portfolio/portfolio-6.png"
            title="Jewel Gems"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

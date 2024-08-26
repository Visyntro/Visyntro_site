"use client";

import { motion } from "framer-motion";
import PortfolioCard from "./portfolio-card";

// Fade-in animation for the whole section
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Portfolio = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      transition={{ duration: 1 }}
      className="mt-28"
    >
      <div>
        <h2 className="text-6xl font-semibold text-center">Our Portfolio</h2>
      </div>

      <motion.div
        className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-1.png"
          image="/portfolio/portfolio-1.png"
          title="Corporate Flyer"
        />
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-2.png"
          image="/portfolio/portfolio-2.png"
          title="Branding"
        />
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-3.png"
          image="/portfolio/portfolio-3.png"
          title="Social Media Posts"
        />
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-4.png"
          image="/portfolio/portfolio-4.jpg"
          title="Mobile Apps"
        />
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-5.png"
          image="/portfolio/portfolio-5.jpg"
          title="UX Website Design"
        />
        <PortfolioCard
          fullImage="/portfolio/portfolio-c-6.jpg"
          image="/portfolio/portfolio-6.png"
          title="Website Development"
        />
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

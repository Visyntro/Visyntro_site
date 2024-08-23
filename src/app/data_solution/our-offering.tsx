"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cards } from "@/components/card-content";
import { dataContent } from "../../../constant/dataContent";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const OurOffering = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("our-offering");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="our-offering"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInVariant}
      transition={{ duration: 1.5 }} // Adjust duration for slower animation
      className="mt-20 mb-20"
    >
      <div className="py-16">
        <h1 className="font-bold text-center mx-auto text-6xl">
          Our Offerings
        </h1>
      </div>

      <motion.div
        className="py-5 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-6"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {dataContent.map(
          ({ bgColor, description, subTitle, textColor, title }) => (
            <motion.div
              key={title}
              variants={fadeInVariant}
              transition={{ duration: 1.5 }} // Adjust duration for slower animation
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

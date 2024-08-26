"use client";

import { TextEffect } from "@/components/animation-fade";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const AboutNew = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center pl-16 lg:pl-28 pr-12 lg:pr-16 py-10 gap-10 md:gap-1 lg:gap-20 mt-[-3rem]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInVariant}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/image1.png"
            className="h-[50vh] w-[50vh] md:h-[60vh] md:w-[85vh] lg:h-[80vh] lg:w-[80vh]"
            draggable="false"
            alt="About Us"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <TextEffect
            per="char"
            preset="fade"
            className="text-[#5674FD] font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[3rem] lg:leading-[4rem] text-center max-w-4xl md:max-w-3xl"
          >
            “Just as technology evolves, so do we. Explore our cutting-edge
            features.”
          </TextEffect>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        transition={{ duration: 1, delay: 0.9 }}
        className="h-[130vh] md:h-[75vh] lg:h-[55vh] mb-10 bg-[#061451] mt-5 p-5 lg:p-28 flex flex-col md:flex-row md:flex-wrap items-center justify-between overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center justify-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4"
        >
          <img
            src="/test1.png"
            className="h-[20vh] w-[20vh] sm:h-[25vh] sm:w-[25vh]"
            alt="AI Powered"
          />
          <h1 className="text-white text-lg font-semibold text-center mt-5 max-w-sm mx-auto">
            AI Powered
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center justify-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4"
        >
          <img
            src="/test2.png"
            className="h-[20vh] w-[20vh] sm:h-[25vh] sm:w-[25vh]"
            alt="Real-Time Collaboration"
          />
          <h1 className="text-white text-lg font-semibold text-center mt-5 max-w-sm">
            Real-Time Collaboration
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4"
        >
          <img
            src="/test3.png"
            className="h-[20vh] w-[20vh] sm:h-[25vh] sm:w-[25vh]"
            alt="Smart Integration"
          />
          <h1 className="text-white text-lg font-semibold text-center mt-5 max-w-sm">
            Smart Integration
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4"
        >
          <img
            src="/test4.png"
            className="h-[20vh] w-[20vh] sm:h-[25vh] sm:w-[25vh]"
            alt="Adaptive Security"
          />
          <h1 className="text-white text-lg font-semibold text-center mt-5 max-w-sm">
            Adaptive Security
          </h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

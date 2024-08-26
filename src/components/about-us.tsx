"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10 lg:gap-12 h-[90vh] md:h-[60vh] lg:h-[70vh] bg-[#EEF1FF] rounded-b-[11rem] px-6 sm:px-12 md:px-20 lg:px-44 mb-10 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="/image2.png"
          className="lg:mb-[-6rem] h-[40vh] sm:h-[50vh] md:h-[75vh] lg:h-[520px] w-full max-w-full mt-[-5rem] md:mt-0"
          alt="About Us"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h1 className="font-bold text-center md:text-left text-5xl lg:text-6xl mb-2 lg:mb-5">
          Visyntro
        </h1>
        <h2 className="font-semibold text-md lg:text-xl text-center md:text-left">
          About Us
        </h2>
        <h2 className="font-semibold text-md lg:text-xl text-center md:text-left">
          Embracing Our Values
        </h2>
        <p className="max-w-2xl lg:max-w-lg mt-3 lg:mt-5 text-center md:text-left">
          Drive your business forward with state-of-the-art technology and
          expert support, ensuring operational excellence and peak efficiency.
          Elevate your brand’s appeal and message through captivating visual
          designs crafted by industry-leading creatives. Unlock actionable
          insights and fuel strategic decision-making with the power of advanced
          analytics and AI.
        </p>
      </motion.div>
    </motion.div>
  );
};

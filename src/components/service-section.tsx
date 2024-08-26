"use client";

import { homeConstData } from "../../constant/homeConst";
import FlipCard from "./flipcard";
import { motion } from "framer-motion";

export const ServiceSection = () => {
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-24 md:mt-28 lg:mt-36 flex flex-col items-center justify-center"
      >
        <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl">
          Our Services
        </h2>
        <h2 className="font-bold mt-4 text-xl sm:text-lg text-[#4B4DED]">
          One-Stop Solution
        </h2>
        <p className="font-normal text-lg sm:text-xl max-w-lg lg:max-w-xl mt-4 text-center">
          Explore our wide array of services, thoughtfully tailored to address
          diverse needs and ensure every customer leaves fully satisfied.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-5 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mt-6"
      >
        {homeConstData.map(({ description, imageSrc, title }) => (
          <FlipCard
            key={title}
            imageSrc={imageSrc}
            title={title}
            description={description}
          />
        ))}
      </motion.div>
    </div>
  );
};

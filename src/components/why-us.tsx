"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WhyUs = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      transition={{ duration: 1 }}
    >
      <div className="mt-32">
        <div className="px-2 md:px-6 lg:px-10">
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl text-center mx-auto">
            “You have{" "}
            <span className="text-blue-500">challenges, we have solutions</span>
            . We believe{" "}
            <span className="text-blue-500">
              every obstacle is a chance to innovate and achieve success
              together.
            </span>
            ”
          </h1>
        </div>

        <div className="mt-24">
          <Card className="drop-shadow-lg shadow-sm max-w-5xl lg:max-w-7xl mx-auto mb-10 bg-[#EBEFFF] rounded-3xl px-3 md:py-7">
            <CardContent className="flex items-center justify-center">
              <CardHeader>
                <CardTitle className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-[-1rem]">
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
            </CardContent>
          </Card>

          <Card className="drop-shadow-lg shadow-sm max-w-7xl mx-auto mb-10 bg-[#EBEFFF] rounded-3xl px-14 md:px-20 lg:px-28 py-5">
            <CardContent className="flex items-center mb-4 mt-7 h-48">
              <div className="flex-1">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                  Client-Centric Approach
                </h1>
                <p className="text-xl mt-6">
                  We prioritize your needs and satisfaction
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRightVariant}
                transition={{ duration: 1 }}
              >
                <span className="text-[#5674FD] font-extrabold text-[14rem] hidden md:block">
                  01
                </span>
              </motion.div>
            </CardContent>

            <Separator className="bg-black" />

            <CardContent className="flex items-center mb-4 mt-7 h-48">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRightVariant}
                transition={{ duration: 1 }}
              >
                <div className="mr-0 md:mr-10 lg:mr-20">
                  <span className="text-[#5674FD] font-extrabold text-[14rem] hidden md:block">
                    02
                  </span>
                </div>
              </motion.div>
              <div className="">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                  Tailored Strategies
                </h1>
                <p className="text-xl mt-6">
                  Customized marketing plans that align with your specific
                  goals.
                </p>
              </div>
            </CardContent>

            <Separator className="bg-black" />

            <CardContent className="flex items-center mb-4 mt-7 h-48">
              <div className="flex-1">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                  Cutting-Edge Tools
                </h1>
                <p className="text-xl mt-6">
                  Utilization of the latest technology for optimal performance
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRightVariant}
                transition={{ duration: 1 }}
              >
                <span className="text-[#5674FD] font-extrabold text-[14rem] hidden md:block">
                  03
                </span>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;

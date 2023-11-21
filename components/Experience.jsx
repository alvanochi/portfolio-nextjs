import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="py-6 mx-auto max-w-containerSmall"
    >
      <h3 className="py-5 text-sm font-semibold tracking-wider uppercase md:text-base md:py-10 text-primary">
        Education and experience
      </h3>
      <div className="grid grid-cols-1 lg:ml-96">
        {/* Badan Pusat Statistik */}
        <div className="flex justify-between mb-6 lg:px-10">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-base font-medium tracking-wide text-primary hover:text-sky"
            >
              Badan Pusat Statistik
            </a>
            <span className="text-base text-semidark">Entry Data Operator</span>
          </div>
          <div className="flex flex-col mt-1 text-right">
            <span className="text-sm text-semidark">Brebes, Central Java</span>
            <span className="text-sm text-semidark">Jul - Oct 2023</span>
          </div>
        </div>
        {/* Dieng Cyber */}
        <div className="flex justify-between mb-6 lg:px-10">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-base font-medium tracking-wide text-primary hover:text-sky"
            >
              Dieng Cyber
            </a>
            <span className="text-base text-semidark">Web Developer</span>
          </div>
          <div className="flex flex-col mt-1 text-right">
            <span className="text-sm text-semidark">
              Wonosobo, Central Java
            </span>
            <span className="text-sm text-semidark">Jul - Aug 2019</span>
          </div>
        </div>
        {/* Global Technology Solution */}
        <div className="flex justify-between lg:px-10">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-base font-medium tracking-wide text-primary hover:text-sky"
            >
              Global Technology Solution
            </a>
            <span className="text-base text-semidark">IT Support</span>
          </div>
          <div className="flex flex-col mt-1 text-right">
            <span className="text-sm text-semidark">
              Purwokerto, Central Java
            </span>
            <span className="text-sm text-semidark">Feb - Apr 2016</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

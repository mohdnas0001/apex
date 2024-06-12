"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";
import FAQ from "./ui/TalentAcquisitionCard";

const TalentAcquisition = () => {
  return (
    <motion.div // Wrap your main div with motion.div
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation when component is visible
      exit={{ opacity: 0 }} // Animation when component is removed
      transition={{ duration: 0.5 }} // Animation duration
      className="relative mx-auto my-10 h-full w-full max-w-7xl items-center justify-between bg-[#FBFFF2] p-4 lg:p-10"
    >
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex w-full">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={626}
            height={626}
            alt="Image"
            loading={"lazy"}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <motion.div // Wrap your content with motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component is visible
            transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
          >
            {/* <div className="mb-4 items-center justify-between gap-1 rounded-full border border-gray-200 bg-white px-2 py-0 md:flex md:flex-row md:px-4 md:py-1 lg:gap-2">
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="4" r="3.5" fill="#27D939" />
              </svg>
              <p className="font-sans text-xs font-normal leading-6 text-gray-900 md:text-sm lg:text-base">
                Talent Acquisition & Workforce
              </p>
            </div>
            <div className="items start w-full">
              <p className="font-sans text-lg italic text-gray-900 md:text-2xl lg:text-3xl lg:leading-10">
                Talent acquisition at our company{" "}
                <br className="hidden md:block" /> focuses on attracting and
                retaining <br className="hidden md:block" />
                top-tier professionals.
              </p>
            </div> */}
          </motion.div>
          <div className="flex w-full items-start">
            <FAQ />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TalentAcquisition;

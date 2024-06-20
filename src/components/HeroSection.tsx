import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animationStyles = `
  @keyframes dash {
    to {
      stroke-dashoffset: 50; 
    }
  }
`;

const rotationAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5 },
};

const textMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.5 },
};

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      className="relative mx-auto mt-20 flex w-full max-w-7xl flex-col lg:mt-10"
      ref={ref}
    >
      <style>{animationStyles}</style>
      <div className="relative inset-0 flex items-center justify-center md:flex-col">
        <div className="flex flex-col items-center md:mt-16 lg:mt-12 lg:gap-4">
          <motion.div
            className="flex flex-row items-center justify-between gap-1 rounded-full bg-white px-[4px] md:mb-4 md:border md:border-gray-200 md:px-3 md:py-1 lg:gap-2"
            {...textMotion}
          >
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="4" r="3.5" fill="#27D939" />
            </svg>
            <p className="font-sans text-[12px] font-normal leading-6 text-gray-900 md:text-sm lg:text-base">
              APEX Technology
            </p>
          </motion.div>
          <motion.h2
            className="text-center my-4 md:my-1 font-sans leading-8 text-2xl  font-medium text-gray-900 md:leading-10 md:text-2xl md:font-medium lg:w-full lg:text-6xl"
            {...textMotion}
          >
            We offer a seamlessly integrated suite <br className="hidden md:block" /> of technology and
            security solutions to <br className="hidden md:block" /> empower your organization
          </motion.h2>
<div className="relative flex h-10 w-full items-center justify-center rounded-lg md:h-28 lg:h-44 p-2">
  <Image
    src="/Blur.svg"
    alt="Background Image"
    width={353}
    height={161}
    className="absolute inset-0 h-auto w-full md:h-full"
  />
  <motion.button
    className="relative z-10 mt-4 md:mt-0 transform rounded-full bg-black px-8 py-2 md:px-16 md:py-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105"
    {...fadeIn}
  >
    Get Started
  </motion.button>
</div>




        </div>
      </div>
      {/* <svg
        className="hidden h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 780 410"
      >
        <ellipse
          id="green_line"
          cx="400"
          cy="200"
          rx="375"
          ry="165"
          style={{
            fill: "none",
            stroke: "#27D939",
            strokeDasharray: "2, 2",
            animation: "dash 5s linear infinite",
          }}
        />
        <ellipse
          id="red_line"
          cx="400"
          cy="200"
          rx="370"
          ry="160"
          style={{
            fill: "none",
            stroke: "#FD4141",
            strokeDasharray: "2, 2",
            animation: "dash 5s linear infinite",
          }}
        />
        <motion.g initial={false} animate={{ ...fadeIn }}>
          <motion.image
            x="190"
            y="35"
            href="/React.svg"
            width="50"
            height="50"
            {...rotationAnimation}
          />
          <motion.image
            x="229"
            y="30"
            href="/WebAppTag.svg"
            width="100"
            height="84"
          />
          <motion.image
            x="590"
            y="40"
            href="/Flutter.svg"
            width="50"
            height="50"
          />
          <motion.image
            x="630"
            y="25"
            href="/MobileTag.svg"
            width="95"
            height="84"
          />
          <motion.image
            x="55"
            y="255"
            href="/Node.svg"
            width="50"
            height="50"
          />
          <motion.image
            x="90"
            y="253"
            href="/BackendTag.svg"
            width="100"
            height="84"
          />
          <motion.image
            x="561"
            y="318"
            href="/CyberSecurity.svg"
            width="50"
            height="50"
            {...rotationAnimation}
          />
          <motion.image
            x="600"
            y="300"
            href="/CyberSecurityTag.svg"
            width="85"
            height="84"
          />
        </motion.g>
      </svg> */}
    </div>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";

const animationStyles = `
  @keyframes dash {
    to {
      stroke-dashoffset: 50; 
    }
  }
`;

const HeroSection = () => {
  return (
    <div className="flex mx-auto relative mt-10 h-full w-full">
      <style>{animationStyles}</style>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center md:mt-16 lg:mt-12 lg:gap-4">
          <div className="mb-4 flex flex-row items-center justify-between gap-2 rounded-full border border-gray-200 bg-white px-4 py-1">
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
              APEX Technology
            </p>
          </div>
          <h2 className="hidden w-[832px] text-center font-sans font-medium text-gray-900 md:block md:text-2xl lg:text-5xl">
            We offer a seamlessly integrated suite <br /> of technology and
            security solutions to <br /> empower your organization
          </h2>
          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg md:h-28 lg:h-44">
            <Image
              src="/Blur.svg"
              alt="Background Image"
              width={353}
              height={161}
              className="absolute inset-0 h-full w-full"
            />
            <button className="relative z-10 px-4 py-1 transform rounded-lg bg-black font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 text-xs md:px-8 md:py-1 md:text-xs lg:px-14 lg:py-2 lg:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <svg
        className="h-full w-full"
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
        <image x="190" y="35" href="/React.svg" width="50" height="50" />
        <image x="229" y="30" href="/WebAppTag.svg" width="100" height="84" />
        <image x="590" y="40" href="/Flutter.svg" width="50" height="50" />
        <image x="630" y="25" href="/MobileTag.svg" width="95" height="84" />
        <image x="55" y="255" href="/Node.svg" width="50" height="50" />
        <image x="90" y="253" href="/BackendTag.svg" width="100" height="84" />
        <image
          x="561"
          y="318"
          href="/CyberSecurity.svg"
          width="50"
          height="50"
        />
        <image
          x="600"
          y="300"
          href="/CyberSecurityTag.svg"
          width="85"
          height="84"
        />
      </svg>
    </div>
  );
};

export default HeroSection;

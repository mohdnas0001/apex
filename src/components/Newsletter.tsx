import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="relative mx-auto mt-10 h-auto w-full max-w-7xl px-6  md:mt-0 md:px-20">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full flex-col items-center justify-between font-sans">
        <h1 className="text-center w-full font-sans text-lg font-medium text-gray-900 md:block md:text-2xl  lg:text-4xl">
            Get access to our pool of Resources
          </h1>
          <p className="mt-2 text-center text-base font-normal leading-6">
            Discover how our clients have achieved remarkable success with
            Apex&apos;s <br className="hidden md:block" /> tailored strategies.
            Read about their journeys and get inspired by their{" "}
            <br className="hidden md:block" /> accomplishments.
          </p>
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 lg:mt-0 lg:flex-row">
          <input
            type="email"
            placeholder="Enter your email address to get started"
            className="w-full max-w-xs rounded-lg border border-gray-400 bg-white px-2 py-3 font-sans text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:max-w-sm md:py-3 lg:text-sm"
          />
          <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-lg md:h-28 lg:h-44">
            <Image
              src="/Blur.svg"
              alt="Background Image"
              width={353}
              height={161}
              className="absolute inset-0 h-full w-full"
            />
            <button className="relative z-10 transform rounded-lg bg-black px-12 py-3 text-[8px] font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 md:px-8 md:py-1 md:text-xs lg:px-14 lg:py-2 lg:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

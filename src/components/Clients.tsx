"use client";
import React from "react";
import PartnersCarousel from "./ui/Carousel";

const Clients: React.FC = () => {
  return (
    <div className="mt-10 h-full w-full p-2 md:p-4 lg:p-8">
      <div className="w-full items-center justify-center">
        <h1 className="my-4 text-center text-lg font-normal md:text-3xl">
          Clients that trust us
        </h1>
        <p className="my-4 text-center text-sm md:text-lg">
          Since we launched operations in January 2021, we have helped 50+
          companies across the world hire <br className="hidden lg:block" /> the
          technical talent they need.
        </p>
      </div>
      <PartnersCarousel />
    </div>
  );
};

export default Clients;

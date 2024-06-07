"use client";
import React from "react";
import PartnersCarousel from "./ui/Carousel";

const Clients: React.FC = () => {
  return (
    <div className="w-full h-full mt-10 p-2 md:p-4 lg:p-8">
      <div className="w-full items-center justify-center ">
        <h1 className="font-normal text-center text-lg  my-4 md:text-3xl">Clients that trust us</h1>
        <p className="text-center text-sm my-4 md:text-lg">
          Since we launched operations in January 2021, we have helped 50+
          companies across the world hire <br className="hidden lg:block"/> the technical talent they need.
        </p>
      </div>
      <PartnersCarousel/>
    </div>
  );
};

export default Clients;

import React from "react";
import ServicesCard from "./ui/ServicesCard";

const Services: React.FC = () => {
  return (
    <div className="flex my-10 w-full justify-center items-center p-8">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-row justify-center items-center gap-4">
        <div className="flex justify-center items-center">
            <svg
              width="96"
              height="2"
              viewBox="0 0 96 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1"
                x2="95"
                y2="1"
                stroke="#008080"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex px-2 justify-center items-center bg-[#20CFC6] bg-opacity-20 rounded-sm">
            <h1 className="text-center text-lg  font-semibold text-[#008080]">
              OUR SERVICES
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="96"
              height="2"
              viewBox="0 0 96 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="1"
                x2="95"
                y2="1"
                stroke="#008080"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center ">
          <h1 className="font-bold text-black text-center text-[40px]">
            Our Services Can Help You Grow Your Investments and Wealth
          </h1>
          <p className="text-center">
            Guiding You on Your Global Financial Success Journey Through
            Customized & Personalized Financial Consulting Services. Achieve
            Your Goals with Data-Driven Expertise and Secure Your Financial
            Future, Successfully Navigating the Ever-Changing Finance
          </p>
        </div>
    <ServicesCard/>

      </div>
    </div>
  );
};

export default Services;

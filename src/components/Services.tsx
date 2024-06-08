import React from "react";
import ServicesCard from "./ui/ServicesCard";

const Services: React.FC = () => {
  return (
    <div className="my-10 flex w-full items-center justify-center p-8">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <div className="flex items-center justify-center">
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
          <div className="flex items-center justify-center rounded-sm bg-[#20CFC6] bg-opacity-20 px-2">
            <h1 className="text-center text-lg font-semibold text-[#008080]">
              OUR SERVICES
            </h1>
          </div>
          <div className="flex items-center justify-center">
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
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h1 className="text-center text-[40px] font-bold text-black">
            Our Services Can Help You Grow Your Investments and Wealth
          </h1>
          <p className="text-center">
            Guiding You on Your Global Financial Success Journey Through
            Customized & Personalized Financial Consulting Services. Achieve
            Your Goals with Data-Driven Expertise and Secure Your Financial
            Future, Successfully Navigating the Ever-Changing Finance
          </p>
        </div>
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;

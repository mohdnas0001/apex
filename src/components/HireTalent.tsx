import React from "react";
import Image from "next/image";

const HireTalent = () => {
  return (
    <div className="relative mx-auto my-10 h-[820px] w-full max-w-7xl items-center justify-between bg-[#ECF5FF] lg:p-10">
      <div className="flex w-full flex-row gap-6">
        <div className="mt-10 flex flex-col items-start justify-center gap-4 p-4 lg:w-[531px]">
          <p className="text-start font-sans text-4xl font-semibold leading-tight">
            We streamline the process of hiring exceptional teams for your
            projects.
          </p>
          <p className="text-start font-sans text-base font-normal">
            Our platform connects you with skilled professionals who are
            perfectly matched to your needs, ensuring your business achieves its
            goals with efficiency and expertise.
          </p>
          <div className="relative flex w-full items-center justify-start overflow-hidden rounded-lg md:h-12 lg:h-28">
            <Image
              src="/Blur.svg"
              alt="Background Image"
              width={153}
              height={61}
              className="absolute left-0 h-full object-cover"
            />
            <button className="relative z-10 transform rounded-lg bg-black px-4 py-1 text-[8px] font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 md:px-8 md:py-1 md:text-xs lg:px-14 lg:py-2 lg:text-base">
              Hire Talents
            </button>
          </div>
              </div>
              <div>
                  <Image
                  src="/HireTalent.svg"
              alt="Background Image"
              width={153}
              height={61}
                  />
                      
                  
              </div>
      </div>
    </div>
  );
};

export default HireTalent;

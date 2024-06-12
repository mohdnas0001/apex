import React from "react";
import Image from "next/image";

const HireTalent = () => {
  return (
    <div className="relative mx-auto my-10 h-auto w-full max-w-7xl items-center justify-between bg-[#ECF5FF] lg:p-10">
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">
        <div className="mt-10 flex flex-col items-start justify-center gap-4 p-4 lg:w-[531px]">
          <p className="text-center font-sans text-xl font-semibold leading-tight md:text-start md:text-4xl">
            We streamline the process of hiring exceptional teams for your
            projects.
          </p>
          <p className="text-center font-sans text-base font-normal md:text-start md:text-base">
            Our platform connects you with skilled professionals who are
            perfectly matched to your needs, ensuring your business achieves its
            goals with efficiency and expertise.
          </p>
          <div className="relative flex h-12 w-full items-center justify-center overflow-hidden rounded-lg md:h-12 md:justify-start lg:h-28">
            <Image
              src="/Blur.svg"
              alt="Background Image"
              width={153}
              height={161}
              className="absolute h-full object-cover md:left-0"
            />
            <button className="relative z-10 ml-2 transform rounded-lg bg-black px-12 py-2 text-[8px] font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 md:px-8 md:py-1 md:text-xs lg:px-14 lg:py-2 lg:text-base">
              Hire Talents
            </button>
          </div>
        </div>
        <div className="hidden md:block lg:w-auto">
          <div className="relative h-auto w-full">
            <Image
              src="/HireTalent.svg"
              alt="Main Background Image"
              width={600}
              height={600}
              className="h-auto w-full"
            />
            {/* Additional images */}
            <Image
              src="/Ellipse1.png"
              alt="Image 1"
              width={50}
              height={50}
              className="absolute left-24 top-[130px] hidden h-12 w-12 md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse2.png"
              alt="Image 2"
              width={50}
              height={50}
              className="absolute right-24 top-[130px] hidden h-12 w-12 md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse3.png"
              alt="Image 3"
              width={50}
              height={50}
              className="absolute bottom-28 left-24 hidden h-12 w-12 md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse4.png"
              alt="Image 4"
              width={50}
              height={50}
              className="absolute bottom-28 right-24 hidden h-12 w-12 md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse4.png"
              alt="Image 4"
              width={50}
              height={50}
              className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 transform md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse5.png"
              alt="Image 5"
              width={50}
              height={50}
              className="absolute left-1/4 top-1/2 hidden h-12 w-12 -translate-y-1/2 transform md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
            <Image
              src="/Ellipse6.png"
              alt="Image 6"
              width={50}
              height={50}
              className="absolute bottom-1/2 right-1/4 hidden h-12 w-12 translate-y-1/2 transform md:block md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTalent;

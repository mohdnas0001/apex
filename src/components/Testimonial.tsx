import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-7xl px-6 pt-10 md:mt-0 md:px-20">
      <div className="absolute bottom-0 right-0 hidden h-[150px] w-full bg-[#112106] lg:block"></div>

      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="mb-4 flex w-fit flex-row items-center justify-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0 md:px-4 md:py-1 lg:gap-2">
          <svg
            width="7"
            height="8"
            viewBox="0 0 7 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="4" r="3.5" fill="#27D939" />
          </svg>
          <p className="font-sans text-[8px] font-normal leading-6 text-gray-900 md:text-sm lg:text-base">
            214 people have something good to say about Apex
          </p>
        </div>
        <p className="text-center font-sans text-2xl font-semibold leading-8 text-gray-900 md:text-4xl md:leading-10">
          Customers shared their
          <br />
          love for Apex
        </p>
      </div>
      <div className="relative mt-2 flex w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-auto lg:flex-row lg:gap-20">
          <div className="mt-10 flex flex-col items-start justify-center gap-10 text-start font-sans text-sm leading-6 md:mt-28 md:text-base md:leading-8 lg:w-[550px] lg:gap-20">
            <p className="font-regular">
              &quot;Apex exceeded our expectations with their exceptional
              service and innovative solutions. Their commitment to excellence
              and attention to detail have significantly enhanced our business
              operations. We highly recommend Apex to any company seeking
              reliable and top-notch support.&quot;
            </p>
            <div className="flex w-full flex-col items-start justify-end font-sans text-gray-900 md:mt-20 lg:text-white">
              <p className="text-lg font-bold leading-6 md:text-xl">
                John Gavahni
              </p>
              <p className="text-base font-medium leading-6 md:text-lg">
                Director of Versity Enterprises
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              width={325}
              height={280}
              alt="testimoniacal"
              src="/Testimonial.png"
              className="hidden md:block md:w-[325px]" // Adjust width based on screen size
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

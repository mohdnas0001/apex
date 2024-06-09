import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="relative mx-auto h-[820px] w-full max-w-7xl px-20 pt-10">
      {/* Green rectangle background */}
      <div className="absolute bottom-0 right-0 h-[150px] w-full bg-[#112106]"></div>

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
          <p className="font-sans text-xs font-normal leading-6 text-gray-900 md:text-sm lg:text-base">
            214 people have something good to say about apex
          </p>
        </div>
        <p className="text-center font-sans text-4xl font-semibold leading-10 text-gray-900">
          Customers shared their
          <br />
          love for Apex
        </p>
      </div>
      <div className="mt-2com relative flex w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-20 lg:w-auto lg:flex-row">
          <div className="mt-28 flex flex-col items-start justify-center gap-20 text-start font-sans text-base leading-8 lg:w-[550px]">
            <p className="font-regular">
              &quot;Apex exceeded our expectations with their exceptional
              service and innovative solutions. Their commitment to excellence
              and attention to detail have significantly enhanced our business
              operations. We highly recommend Apex to any company seeking
              reliable and top-notch support.&quot;
            </p>
            <div className="mt-20 flex w-full flex-col items-start justify-end font-sans text-white">
              <p className="text-xl font-bold leading-6">John Gavahni</p>
              <p className="text-lg font-medium leading-6">
                Director of Versity Enterprises
              </p>
            </div>
          </div>
          <div>
            <Image
              width={325}
              height={280}
              alt="testimonial"
              src="/Testimonial.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

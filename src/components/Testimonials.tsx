import React from "react";
import { TestimonialCard } from "./ui/TestimonialCard";
import { testimonials } from "../constant/index";

const Testimonials = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-between gap-6 p-8">
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
              OUR TESTIMONIALS
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
          <h1 className="text-[40px] font-bold text-black">
            What Our Customers Say
          </h1>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex w-full flex-wrap justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-[26rem]">
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              image={testimonial.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

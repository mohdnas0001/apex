import React from "react";
import { TestimonialCard } from "./ui/TestimonialCard";
import { testimonials } from "../constant/index";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-between gap-6 my-10 items-center p-8">
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
              OUR TESTIMONIALS
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
          <h1 className="font-bold text-black text-[40px]">
            What Our Customers Say
          </h1>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full flex flex-wrap justify-center gap-2">
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

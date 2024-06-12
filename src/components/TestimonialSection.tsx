"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../app/globals.css";

interface Testimonial {
  feedback: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
}

const testimonials: Testimonial[] = [
  {
    feedback:
      "Apex has been instrumental in our software development process. It provides comprehensive solutions tailored to our needs, allowing us to deliver high-quality software efficiently.",
    clientName: "Micheal Gough",
    clientPosition: "CEO at Google",
    clientImage:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    feedback:
      "With Apex, we can rest assured that our organization's cybersecurity is in safe hands. Its advanced security features and robust solutions help us protect our data and systems effectively.",
    clientName: "Jane Doe",
    clientPosition: "CTO at Microsoft",
    clientImage:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    feedback:
      "Apex is more than just a software platform; it's a comprehensive solution for all our software and cybersecurity needs. Its versatility and reliability make it indispensable for our organization.",
    clientName: "John Smith",
    clientPosition: "Lead Developer at Amazon",
    clientImage:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
];

const TestimonialSectionItem: React.FC<
  Testimonial & { isVisible: boolean }
> = ({ feedback, clientName, clientPosition, clientImage, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isVisible ? 1 : 0.5, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className={`mb-4 w-full md:rounded-lg border border-gray-300 p-4 md:shadow-lg ${
        isVisible ? "" : "blur-sm"
      }`}
    >
      <figure className="mx-auto max-w-screen-md">
        <svg
          className="mx-auto mb-2 h-4 w-full text-gray-400 sm:mb-3 md:h-8"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="text-xs font-medium text-gray-900 md:text-2xl">
            {feedback}
          </p>
        </blockquote>
        <figcaption className="mt-4 flex flex-col items-center justify-center space-x-3 sm:mt-6 md:flex-row">
          <img
            className="h-auto w-6 rounded-full md:h-6"
            src={clientImage}
            alt="profile picture"
          />
          <div className="flex flex-col items-center md:flex-row md:divide-x-2 md:divide-gray-500">
            <div className="text-xs font-medium text-gray-900 md:pr-2 md:text-base">
              {clientName}
            </div>
            <div className="text-xs font-light text-gray-500 md:pl-2 md:text-base">
              {clientPosition}
            </div>
          </div>
        </figcaption>
      </figure>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getDisplayedTestimonials = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <div className="relative mx-auto mt-10 w-full items-center justify-between overflow-hidden p-2">
      <div className="relative my-6 flex w-full flex-col items-center justify-center">
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
          <p className="font-sans text-[8px] font-normal leading-6 text-gray-900 md:text-sm lg:text-sm">
            214 people have something good to say about Apex
          </p>
        </div>
        <h1 className="text-center font-sans text-lg font-medium text-gray-900 md:block md:text-2xl lg:w-[832px] lg:text-4xl">
          Customers shared their love for Apex
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 sm:flex-row">
        <div className="flex w-full justify-center overflow-hidden">
          <AnimatePresence initial={false}>
            {displayedTestimonials.map((testimonial, index) => (
              <TestimonialSectionItem
                key={index}
                feedback={testimonial.feedback}
                clientName={testimonial.clientName}
                clientPosition={testimonial.clientPosition}
                clientImage={testimonial.clientImage}
                isVisible={index === 1}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

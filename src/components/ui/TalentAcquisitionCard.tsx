"use client";

import Image from "next/image";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  icon: string; // Change type to string for the icon file path
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Recruitment Services",
      answer:
        "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
      icon: "/RecruitmentServices.svg",
    },
    {
      question: "Outsourcing Services",
      answer:
        "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.",
      icon: "/OutsourcingServices.svg",
    },
    {
      question: "Onboarding Services",
      answer:
        "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.",
      icon: "/OnboardingServices.svg",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <main className="w-full p-4">
      <div className="my-2 flex items-start justify-center">
        <div className="my-1 w-full">
          <ul className="flex flex-col">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="my-2 w-full rounded-xl bg-white font-sans shadow-lg"
              >
                <h2
                  onClick={() => handleToggle(index)}
                  className="my-1 flex cursor-pointer flex-row items-center justify-between p-3 text-base font-semibold md:my-3"
                >
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={faq.icon}
                      alt={`icon-${index}`}
                      width={40}
                      height={40}
                      className="h-auto w-auto"
                      sizes="(max-width: 640px) 100vw, 40px" // Adjusts image size based on screen size
                    />

                    <span className="font-sans text-lg font-bold md:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 7.08667L11.1667 12.2493C10.525 12.859 9.47503 12.859 8.83336 12.2493L3.40002 7.08667"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h2>
                <div
                  className={`transition-max-height overflow-hidden border-l-2 border-green-600 duration-500 ${
                    activeIndex === index ? "max-h-full" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: activeIndex === index ? `${1000}px` : "0px",
                  }}
                >
                  <p className="p-3 font-sans text-gray-900">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

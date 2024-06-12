import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ServiceCard component
interface ServiceCardProps {
  icon: string;
  serviceName: string;
  serviceDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  serviceName,
  serviceDescription,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full justify-center rounded-lg border border-gray-300 bg-white p-4 shadow-purple-mdlg md:p-6 lg:p-8"
    >
      <div className="start flex flex-col items-start justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={icon}
            alt={serviceName}
            width={30}
            height={30}
            className="mr-4 h-10 w-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-base font-semibold text-gray-900 lg:text-lg">
              {serviceName}
            </h3>
            <p className="text-xs text-gray-600 lg:text-sm">
              {serviceDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Service data
const services: ServiceCardProps[] = [
  {
    serviceName: "Web & App Development",
    serviceDescription:
      "We create user-friendly web applications and mobile apps to elevate your digital presence, drive user engagement, and fuel business growth.",
    icon: "/Web.svg",
  },
  {
    serviceName: "Cybersecurity Solutions",
    serviceDescription:
      "Safeguard your critical data and infrastructure from evolving cyber threats with our robust security solutions.",
    icon: "/Security.svg",
  },
  {
    serviceName: "Network Design & Implementation",
    serviceDescription:
      "Ensure reliable and secure connectivity with our expert network design, implementation, and maintenance services.",
    icon: "/Insights.svg",
  },
  {
    serviceName: "Creative Design",
    serviceDescription:
      "Our design team crafts compelling visuals and user interfaces that enhance your brand identity and user experience. ",
    icon: "/Security.svg",
  },
  {
    serviceName: "Digital Transformation",
    serviceDescription:
      "We guide you through a strategic digital transformation journey, optimizing processes, maximizing the value of technology, and helping you adapt to the changing digital landscape. ",
    icon: "/Insights.svg",
  },
  {
    serviceName: "AI & Automation",
    serviceDescription:
      "We integrate AI solutions to automate tasks, generate data-driven insights, improve decision-making, and unlock new possibilities for efficiency and productivity. ",
    icon: "/Security.svg",
  },
];

const WhatWeDo = () => {
  return (
    <div className="relative mx-auto my-10 h-full w-full items-center justify-between bg-white p-4 lg:p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-sans text-lg font-medium text-gray-900 md:block md:text-2xl lg:w-[832px] lg:text-5xl">
          Take off the hassles of finding <br className="hidden md:block" />
          the right solution providers
        </h1>
        <div className="mt-8 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-3 lg:w-full lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              serviceName={service.serviceName}
              serviceDescription={service.serviceDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

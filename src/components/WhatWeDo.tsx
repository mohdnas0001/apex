import React from "react";
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
    <div className="w-full justify-center rounded-lg border border-gray-300 bg-white p-4 shadow-purple-mdlg md:p-6 lg:p-8">
      <div className="start flex flex-col items-start justify-center gap-2">
        <Image
          src={icon}
          alt={serviceName}
          width={30}
          height={30}
          className="mr-4 h-10 w-10"
        />
        <div className="flex flex-col justify-between gap-1">
          <h3 className="text-base font-semibold text-gray-900 lg:text-lg">
            {serviceName}
          </h3>
          <p className="text-xs text-gray-600 lg:text-sm">
            {serviceDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

// Service data
const services: ServiceCardProps[] = [
  {
    serviceName: "Web & App Development",
    serviceDescription:
      "Our design team crafts compelling visuals and user interfaces that enhance your brand identity and user experience.",
    icon: "/Web.svg",
  },
  {
    serviceName: "Security Features",
    serviceDescription:
      "Our design team crafts compelling visuals and user interfaces that enhance your brand identity and user experience.",
    icon: "/Security.svg",
  },
  {
    serviceName: "Insights",
    serviceDescription:
      "Our design team crafts compelling visuals and user interfaces that enhance your brand identity and user experience.",
    icon: "/Insights.svg",
  },
  {
    serviceName: "Fast and Reliable",
    serviceDescription:
      "Our design team crafts compelling visuals and user interfaces that enhance your brand identity and user experience.",
    icon: "/Fast.svg",
  },
];

const WhatWeDo = () => {
  return (
    <div className="relative mx-auto my-10 h-[900px] w-full items-center justify-between bg-white p-4 lg:p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-sans text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl lg:leading-10">
          Take off the hassles of finding <br className="hidden md:block" />
          the right solution providers
        </h1>
        <div className="mt-8 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:w-[600px] lg:grid-cols-2">
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

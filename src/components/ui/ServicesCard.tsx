import React from "react";

interface Service {
  heading: string;
  subheading: string;
  list: string[];
  icon: React.ReactNode;
}

const ServicesCard: React.FC = () => {
  const containerStyle =
    "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-10";
  const gridContainerStyle =
    "grid max-w-full gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3";

  const services: Service[] = [
    {
      heading: "Website Development:",
      subheading:
        "Our website development service offers end-to-end solutions for creating and launching professional and visually appealing websites.",
      list: ["Computers", "Health", "Reference"],
      icon: (
        <svg
          className="h-12 w-12 text-green-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          ></polygon>
        </svg>
      ),
    },
    {
      heading: "Social Media Marketing:",
      subheading:
        "Our social media marketing service helps businesses establish a strong online presence and engage with their target audience effectively.",
      list: ["Computers", "Health", "Reference"],
      icon: (
        <svg
          className="h-12 w-12 text-green-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          ></polygon>
        </svg>
      ),
    },
    {
      heading: "Content Writing and Copywriting:",
      subheading:
        "Our content writing and copywriting service offers high-quality and engaging content that captivates your audience and drives conversions.",
      list: ["Computers", "Health", "Reference"],
      icon: (
        <svg
          className="h-12 w-12 text-green-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          ></polygon>
        </svg>
      ),
    },
  ];

  return (
    <div className={containerStyle}>
      <div className={gridContainerStyle}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            subheading={service.subheading}
            list={service.list}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

interface ServiceCardProps {
  heading: string;
  subheading: string;
  list: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  heading,
  subheading,
  list,
  icon,
}) => {
  // Updated to use flex-col and center items
  const cardContainerStyle =
    "w-full flex flex-col items-center bg-white rounded-lg shadow-md p-6";
  const iconStyle =
    "flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50";
  // Added text-center to center the heading
  const serviceTitleStyle = "mb-2 font-semibold leading-5 text-center";
  // Added text-center to center the subheading
  const serviceDescriptionStyle = "mb-3 text-sm text-gray-900 text-center";
  // Updated list container style to center it horizontally
  const listContainerStyle = "mb-4 flex justify-center"; // Updated
  // Updated to justify list items to the start
  const listStyle = "ml-1 space-y-2 text-left"; // Updated
  // Updated to remove justify-center from listItemStyle
  const listItemStyle = "flex items-start"; // Updated
  const listIconStyle = "mr-1 w-5 h-5 mt-px text-green-400";
  const learnMoreStyle =
    "inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800";

  return (
    <div className={cardContainerStyle}>
      <div className={iconStyle}>{icon}</div>
      <h6 className={serviceTitleStyle}>{heading}</h6>
      <p className={serviceDescriptionStyle}>{subheading}</p>
      {/* Updated list container to use flex and justify content to center */}
      <div className={listContainerStyle}>
        {" "}
        {/* Updated */}
        <ul className={listStyle}>
          {list.map((item, index) => (
            <li key={index} className={listItemStyle}>
              <span className="mr-1">
                <svg
                  className={listIconStyle}
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <a href="/" aria-label="" className={learnMoreStyle}>
        Learn more
      </a>
    </div>
  );
};

export default ServicesCard;

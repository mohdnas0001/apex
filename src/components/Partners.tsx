import React from "react";
import Image from "next/image";
import "../app/globals.css";

const partners = [
  { id: 1, name: "Google", logo: "/Google.svg" },
  { id: 2, name: "Heinz", logo: "/Heinz.svg" },
  { id: 3, name: "Netflix", logo: "/Netflix.svg" },
  { id: 4, name: "PayPal", logo: "/PayPal.svg" },
];

const Partners = () => {
  return (
    <div className="relative mx-auto mt-10 w-full items-center justify-between overflow-hidden bg-[#E3E3E3] p-2">
      <div className="flex flex-col items-center justify-evenly lg:p-8">
        <div className="items-center justify-start lg:w-[300px]">
          <h1 className="text-center text-sm font-bold leading-5 text-[#262626] md:text-start md:text-2xl md:leading-8">
            Trusted By.
          </h1>
        </div>
        <div className="flex w-full justify-between gap-2 overflow-hidden">
          <div className="animate-slide flex w-full">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={50}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

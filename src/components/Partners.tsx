import React from "react";
import Image from "next/image";

const partners = [
  { id: 1, name: "Google", logo: "/Google.svg" },
  { id: 2, name: "Heinz", logo: "/Heinz.svg" },
  { id: 3, name: "Netflix", logo: "/Netflix.svg" },
  { id: 4, name: "PayPal", logo: "/PayPal.svg" },
];

const Partners = () => {
  return (
    <div className="relative mx-auto mt-10  w-full items-center justify-between bg-[#E3E3E3] p-2">
      <div className="flex flex-col items-center justify-evenly lg:flex-row lg:p-8">
        <div className="items center justify-start lg:w-[300px]">
          <h1 className="text-2xl font-bold leading-8 text-[#262626]">
            1000+ Big brands trust us and work with us.
          </h1>
        </div>
        <div className="flex w-fit justify-between gap-2">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
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
  );
};

export default Partners;

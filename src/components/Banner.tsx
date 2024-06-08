import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mx-auto mt-10 h-full w-full">
      <Image src="/Banner.png" alt="Banner" width={1800} height={300} />
    </div>
  );
};

export default Banner;

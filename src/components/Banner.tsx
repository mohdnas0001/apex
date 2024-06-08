import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mx-auto w-full">
      <div className="hidden md:block">
        <Image src="/Banner.png" alt="Banner" width={1800} height={100} />
      </div>
      <div className="block md:hidden">
        <Image src="/BannerMobile.png" alt="Banner" width={1800} height={100} />
      </div>
    </div>
  );
};

export default Banner;

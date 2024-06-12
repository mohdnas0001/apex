import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="relative mx-auto w-full" ref={ref}>
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

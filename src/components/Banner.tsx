import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="mx-auto relative mt-10 h-full w-full">
      <Image
        src="/Banner.svg"
        alt="Banner"
        width={1800}
        height={300}
      />
    </div>
  );
};

export default Banner;

"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { id: 1, name: "Partner 1", logo: "/Google.svg" },
  { id: 2, name: "Partner 2", logo: "/Heinz.svg" },
  { id: 3, name: "Partner 3", logo: "/Netflix.svg" },
  { id: 4, name: "Partner 4", logo: "/PayPal.svg" },
  { id: 5, name: "Partner 5", logo: "/Take-Two.svg" },
  { id: 6, name: "Partner 6", logo: "/Asus-Logo.svg" },
];

const PartnersCarousel: React.FC = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} style={{ padding: "0 10px" }}>
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;

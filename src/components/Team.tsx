import React from "react";
import Image from "next/image";

interface DirectorCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <Image
        className="rounded-full"
        src={imageUrl}
        alt={name}
        width={176}
        height={176}
      />
      <div className="mt-4 flex h-48 w-full flex-col items-center">
        <p className="mt-4 font-sans text-lg font-bold md:text-xl">{name}</p>
        <p className="font-sans text-base text-gray-600 md:text-lg">
          {position}
        </p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const directors = [
    { name: "Farid Jibril Farouk", position: "MD/CEO", imageUrl: "/Team1.png" },
    { name: "Ibrahim Babangida", position: "CTO", imageUrl: "/Team2.png" },
    {
      name: "Mubarak Aminu",
      position: "Head of Project Management",
      imageUrl: "/Team3.png",
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="mb-8 text-center">
        <h1 className="font-sans text-3xl font-semibold md:text-4xl">
          Our Board of Directors
        </h1>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
        {directors.map((director, index) => (
          <DirectorCard
            key={index}
            name={director.name}
            position={director.position}
            imageUrl={director.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

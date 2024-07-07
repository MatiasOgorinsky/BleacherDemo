import React from "react";
import imageUrls from "../constants/constants";
import Image from "next/image";
import Link from "next/link";

const GameCards = () => {
  return (
    <div className="relative bg-gray-800 md:px-36 md:py-10">
      <div className="bg-gray-700 w-full mx-auto rounded-sm p-5">
        <section className="p-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-100">
            {imageUrls.map((game) => (
              <div key={game.id} className="bg-card text-white relative w-full cursor-pointer rounded-sm shadow-none border-0">
                <Link href={game.link}>
                  <div className="h-64 w-full relative flex items-center rounded-sm justify-center bg-background">
                    <div className="h-64 w-full relative rounded-sm overflow-hidden">
                      <Image src={game.gameImage} layout="fill" objectFit="cover" alt={`Game Image ${game.id}`} className="rounded-sm object-top" />
                    </div>
                    <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#5dadec" }}>
                      <Image src={game.iconImage} width={80} alt={`Game Image ${game.id}`} className="object-contain" />
                    </div>
                  </div>
                  <div className="p-0">
                    <h2 className="relative uppercase mt-2 text-3xl z-2 text-gray-300">{game.name}</h2>
                    <p className="leading-5 mt-1 text-sm text-gray-300">{game.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameCards;

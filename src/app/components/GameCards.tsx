import React from "react";
import imageUrls from "../constants/constants";

const GameCards = () => {
  return (
    <div className="relative bg-gray-800 md:px-36 md:py-10">
      <div className="bg-gray-700 w-full mx-auto rounded-sm p-5">
        <section className="p-4">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-100">
            {imageUrls.map((game) => (
              <div key={game.id} className="bg-card text-white relative w-full cursor-pointer rounded-sm shadow-none border-0">
                <a href={game.link}>
                  <div className="h-64 w-full relative flex items-center rounded-sm justify-center bg-background">
                    <img src={game.gameImage} className="h-full w-11/12 object-cover rounded-sm object-top" alt={`Game Image ${game.id}`} />
                    <div className="absolute -bottom-6 right-2 p-2 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#5dadec" }}>
                      <img src={game.iconImage} className="h-16 w-16 object-contain" alt={`${game.name} Icon`} />
                    </div>
                  </div>
                  <div className="p-0">
                    <h2 className="relative uppercase mt-2 text-3xl font-nba z-2 text-gray-300">{game.name}</h2>
                    <p className="leading-5 mt-1 text-sm text-gray-300">{game.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameCards;

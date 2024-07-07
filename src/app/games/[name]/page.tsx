import GameIframe from "@/app/components/GameIframe";
import React from "react";
import gamesUrls from "../../constants/index";

type GamePageProps = {
  params: {
    name: string;
  };
};

export function generateStaticParams() {
  return gamesUrls.map((game) => ({
    gameName: game.name.toLowerCase(),
  }));
}

export default function GamePage({ params }: GamePageProps) {
  const game = gamesUrls.find((g) => g.name.toLowerCase() === params.name);

  if (!game) {
    return <div>Game not found</div>;
  }

  return <GameIframe source={game.source} />;
}

import Image from "next/image";
import Header from "./components/Header";
import GameCards from "./components/GameCards";

export default function Home() {
  return (
    <>
      <Header />
      <GameCards />
    </>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import GameCards from "./components/GameCards";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <GameCards />
      <FooterSection />
    </>
  );
}

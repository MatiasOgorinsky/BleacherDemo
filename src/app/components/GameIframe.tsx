import React from "react";

interface GameIframeProps {
  source: string;
}

const GameIframe: React.FC<GameIframeProps> = ({ source }) => {
  return (
    <div className="relative bg-[#f6f6f6]">
      <section className="max-w-8xl mx-auto p-4 px-6 md:px-36 mt-0">
        <div className="bg-secondary rounded-2xl h-[700px] w-full">
          <iframe className="inset-0 p-2 w-full h-full rounded-2xl border-none" src={source} referrerPolicy="origin" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
};

export default GameIframe;

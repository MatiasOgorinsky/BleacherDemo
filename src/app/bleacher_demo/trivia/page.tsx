import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/Footer";

const Trivia = () => {
  return (
    <>
      <div className="relative bg-[#f6f6f6]">
        <Header />
        <section className="max-w-8xl mx-auto p-4 px-6 md:px-36 mt-0">
          <div className="relative bg-secondary rounded-2xl h-[700px] w-full">
            <iframe className="absolute inset-0 p-2 w-full h-full rounded-2xl" src="https://play.playgen.io/1b88Jqsyy" frameBorder="0" style={{ border: "0" }} referrerPolicy="origin" allowFullScreen></iframe>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default Trivia;

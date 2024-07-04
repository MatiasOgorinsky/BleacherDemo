import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-black text-gray-300 p-2 h-50">
        <div className="ml-8">
          <h1 style={{ margin: 0, marginRight: "4.5rem" }}>
            <a title="BR Logo" aria-label="Bleacher Report Home" href="https://bleacherreport.com" target="_blank">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoBABBloG39tuVccX87NmnD81Ui-z_1tS7A&s" alt="Brand Logo" className="h-9 w-10" />
            </a>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm font-bold">NBA</button>
          <a className="text-sm font-bold" href="/">
            WORLD FOOTBALL
          </a>
          <button className="text-sm font-bold">NFL</button>
          <a className="text-sm font-bold" href="/">
            AEW
          </a>
          <a className="text-sm font-bold" href="/">
            WWE
          </a>
          <a className="text-sm font-bold" href="/">
            MMA
          </a>
          <a className="text-sm font-bold" href="/">
            BOXING
          </a>
          <button className="text-sm font-bold">SPORTS</button>
          <a className="text-sm font-bold" href="/">
            SCORES
          </a>
        </div>
      </div>
      <nav className="bg-black border-b shadow-lg">
        <div className="flex items-center justify-start px-2 h-16 ml-4  md:ml-10 text-gray-300">
          <span className="font-bold border-r border-primary pr-4 text-sm md:text-base">Puzzles</span>
          <div className="flex flex-wrap gap-6 ml-2 md:ml-4 flex-1">
            <a href="/" className="typography -heading-3 -text--primary text-sm md:text-base font-bold">
              NBA
            </a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              NEWS
            </a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              SCORES
            </a>
            <a className="typography -heading-4 -text--tertiary navLink -disabled text-sm md:text-base font-bold">TEAMS</a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              RUMORS
            </a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              HIGHLIGHTS
            </a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              FANTASY
            </a>
            <a href="/" className="typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold">
              DRAFT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

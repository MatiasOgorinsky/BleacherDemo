import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bg-black text-white flex items-center p-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoBABBloG39tuVccX87NmnD81Ui-z_1tS7A&s"
          alt="Brand Logo"
          className="h-9 w-9 ml-20" // Ajuste de márgenes
        />
      </div>
      <nav className="bg-white border-b shadow-lg">
        <div className="flex items-center justify-start px-2 h-16 ml-20">
          <span className="font-bold border-r border-primary pr-4">Puzzles</span>
          <div className="flex flex-wrap gap-6 ml-4 flex-1">
            <span className="hidden md:flex font-light text-sm">Popular</span>
            <span className="hidden md:flex font-light text-sm">Daily Brain Teasers</span>
            <span className="hidden md:flex font-light text-sm">Word Searches</span>
            <span className="hidden md:flex font-light text-sm">Crossword Challenges</span>
            <span className="hidden md:flex font-light text-sm">Logic Puzzles</span>
            <span className="hidden md:flex font-light text-sm">Sudoku Puzzles</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

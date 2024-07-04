import React from "react";

const Header = () => {
  const navItems = [
    { label: "NBA", href: "/" },
    { label: "NEWS", href: "/" },
    { label: "SCORES", href: "/" },
    { label: "TEAMS", href: "/", disabled: true },
    { label: "RUMORS", href: "/" },
    { label: "HIGHLIGHTS", href: "/" },
    { label: "FANTASY", href: "/" },
    { label: "DRAFT", href: "/" },
  ];

  const headerItems = [
    { label: "NBA", href: "/" },
    { label: "WORLD FOOTBALL", href: "/" },
    { label: "NFL", href: "/" },
    { label: "AEW", href: "/" },
    { label: "WWE", href: "/" },
    { label: "MMA", href: "/" },
    { label: "BOXING", href: "/" },
    { label: "SPORTS", href: "/" },
    { label: "SCORES", href: "/" },
  ];

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
          {headerItems.map((item, index) => (
            <a key={index} className="text-sm font-bold" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <nav className="bg-black border-b shadow-lg">
        <div className="flex items-center justify-start px-2 h-16 ml-4  md:ml-10 text-gray-300">
          <span className="font-bold border-r border-primary pr-4 text-sm md:text-base">Puzzles</span>
          <div className="flex flex-wrap gap-6 ml-2 md:ml-4 flex-1">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className={`typography -heading-4 -text--tertiary navLink text-sm md:text-base font-bold ${item.disabled ? "-disabled" : ""}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

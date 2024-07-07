import React from "react";
import Image from "next/image";
import BrImage from "../assets/BR-image.png";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { label: "PUZZLES", href: "/" },
    { label: "NBA", href: "/" },
    { label: "NEWS", href: "/" },
    { label: "SCORES", href: "/" },
    { label: "TEAMS", href: "/" },
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
        <div className="ml-8 mt-2">
          <h1 className="mr-12">
            <Link href="https://bleacherreport.com" target="_blank">
              <Image src={BrImage} alt="Brand Logo" width={45} height={40} className="ml-4" />
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {headerItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="pr-4 text-xl ">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <nav className="bg-black border-b shadow-lg">
        <div className="flex items-center justify-start px-2 h-16 ml-4 md:ml-10 text-gray-300">
          <div className="flex flex-wrap gap-8 ml-2 flex-1">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="pr-4 text-xl">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

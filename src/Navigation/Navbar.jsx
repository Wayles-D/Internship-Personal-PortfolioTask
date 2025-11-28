import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full px-4 lg:px-10 items-center mt-4 bg-[#0A0A0A] h-15 text-[#C7C7C7] flex justify-between sticky top-0 z-20">
        <div>
          <h1 className="bebas-neue text-2xl">ROBERT GARCIA</h1>
        </div>

        {/* Nav Links */}
        <ul
          className={` lg:flex gap-10 inter-[400] ${
            isOpen
              ? "absolute top-full right-0 bg-[#ffffff] text-black rounded-2xl w-80 py-4 flex flex-col items-start pl-4 z-10"
              : "hidden"
          } lg:static lg:bg-transparent lg:w-auto lg:py-0 lg:flex-row lg:items-center`}
        >
          <li className="lg:hover:text-[#D3E97A]">
            <a href="#">Work</a>
          </li>
          <li className="lg:hover:text-[#D3E97A]">
            <a href="#">About</a>
          </li>
          <li className="lg:hover:text-[#D3E97A]">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button on Mobile */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-between h-4 w-6 lg:hidden"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
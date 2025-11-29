import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path, hash) => {
    setIsOpen(false);
    
    if (path) {
      if (location.pathname !== path) {
        navigate(path);
        // If there's a hash, we need to wait for navigation to complete
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        // Already on the page
        if (hash) {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else if (hash) {
      // Just scrolling on current page (like Contact)
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="w-full px-4 lg:px-10 items-center mt-4 bg-[#0A0A0A] h-15 text-[#C7C7C7] flex justify-between sticky top-0 z-20">
        <div className="cursor-pointer" onClick={() => handleNavigation("/", null)}>
          <h1 className="bebas-neue text-2xl text-white">ROBERT GARCIA</h1>
        </div>

        {/* Nav Links */}
        <ul
          className={` lg:flex gap-10 inter-[400] ${
            isOpen
              ? "absolute top-full right-0 bg-[#ffffff] text-black rounded-2xl w-80 py-4 flex flex-col items-start pl-4 z-10"
              : "hidden"
          } lg:static lg:bg-transparent lg:w-auto lg:py-0 lg:flex-row lg:items-center`}
        >
          <li className="lg:hover:text-[#D3E97A] cursor-pointer">
            <button onClick={() => handleNavigation("/", "work")}>Work</button>
          </li>
          <li className="lg:hover:text-[#D3E97A] cursor-pointer">
            <button onClick={() => handleNavigation("/about", null)}>About</button>
          </li>
          <li className="lg:hover:text-[#D3E97A] cursor-pointer">
            <button onClick={() => handleNavigation(null, "contact")}>Contact</button>
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
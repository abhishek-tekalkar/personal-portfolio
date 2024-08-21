import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div>
          {/* div for logo */}
          <p className="text-3xl font-bold text-white">Portfolio</p>
        </div>
        <div className="block lg:hidden">
          {/* Hamburger icon */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:gap-4 text-2xl text-white`}
        >
          {/* div for menu and links */}
          <ul className="flex flex-col lg:flex-row gap-4">
            <li className="hover:border-b-yellow-500 hover:border-b-4">
              <a href="#home">Home</a>
            </li>
            <li className="hover:border-b-yellow-500 hover:border-b-4">
              <a href="#experience">Experience</a>
            </li>
            <li className="hover:border-b-yellow-500 hover:border-b-4">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:border-b-yellow-500 hover:border-b-4">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:border-b-yellow-500 hover:border-b-4">
              <a href="#achievement">Achievement</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

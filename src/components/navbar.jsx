import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-gray-400 h-16 flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">Ritwik Raj</span>
      </h1>
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li className="hover:text-gray-200"><a href="#about">About</a></li>
        <li className="hover:text-gray-200"><a href="#work">Work</a></li>
        <li className="hover:text-gray-200"><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 py-4">
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#work" className="text-white hover:text-gray-200">Work</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

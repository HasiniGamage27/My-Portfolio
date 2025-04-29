import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-green-600 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-2xl font-bold text-white">HASINI</Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden py-2 space-x-8 font-bold md:flex">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/About" className="text-white hover:text-gray-300">About</Link>
          <Link to="/Education" className="text-white hover:text-gray-300">Education</Link>
          <Link to="/Project" className="text-white hover:text-gray-300">Project</Link>
          <Link to="/Skills" className="text-white hover:text-gray-300">Skills</Link>
          <Link to="/Contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
      
      {/* Mobile Menu - Half Screen Width */}
      {isOpen && (
        <div className="fixed top-0 right-0 flex flex-col items-center w-1/2 h-full py-6 space-y-6 text-white bg-green-600 shadow-lg md:hidden">
          <button 
            className="absolute text-white top-4 right-4" 
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Education" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/Project" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Project</Link>
          <Link to="/Skills" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/Contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

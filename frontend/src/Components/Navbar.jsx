import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const getPath = (item) => {
    return item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-900">PTTCE</div>

          {/* Hamburger Menu Button (visible on small screens) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Programs", "Locations", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(getPath(item),{state:{number:"+919945023670",email:"new@gmail.com",addr:"udupi"}})}
                className="text-gray-800 hover:text-red-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 py-4 px-4">
            {["Home", "About", "Programs", "Locations", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  navigate(getPath(item));
                  setMenuOpen(false); // Close menu after navigating
                }}
                className="block w-full text-left text-gray-800 hover:text-red-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

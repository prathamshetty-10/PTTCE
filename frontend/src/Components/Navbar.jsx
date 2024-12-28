import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const getPath = (item) => {
    return item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-red-900">SportCenter</div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Programs", "Locations", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(getPath(item))}
                className="text-gray-800 hover:text-red-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
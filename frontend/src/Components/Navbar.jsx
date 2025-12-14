import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/uplogo.jpg"; // import your logo

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const programSubmenu = [
    { label: "All Programs", path:"/programs"},
    { label: "PTTCE: Academies", path: "/programs/academies" },
    { label: "PTTCE: School Training", path: "/programs/schoolTraining" },
    { label: "PTTCE: Private Training", path: "/programs/privateTraining" },
    { label: "SportGen", path: "/programs/sportsgen" },
    { label: "Sports Equipment", path: "/programs/sportsEquipment" },
    { label: "Event Management", path: "/programs/eventManagement" },
    { label: "Infrastructure Development", path: "/programs/infrastructureDevelopment" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 md:px-0">
          
          {/* Logo + Site Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className=" text-2xl md:text-3xl font-bold text-black" style={{ fontFamily: "Lora, serif" }}>
              Padukone Centre for Sports
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center relative">

            {/* Normal Menu Items */}
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`pb-1 ${
                  location.pathname === item.path
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-800 hover:text-blue-900"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Programs + Dropdown */}
            <div className="relative flex items-center gap-1">
              <button
                onClick={() => navigate("/programs")}
                className={`pb-1 ${
                  location.pathname.startsWith("/programs")
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-800 hover:text-blue-900"
                } mr-1`}
              >
                Programs
              </button>

              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="text-2xl text-gray-800 hover:text-blue-900"
              >
                <FiChevronDown
                  className={`transition-transform ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-60 z-50">
                  {programSubmenu.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => {
                        navigate(sub.path);
                        setProgramsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => navigate("/contact")}
              className={`pb-1 ${
                location.pathname === "/contact"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              Contact
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 py-4 px-4">

            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left ${
                  location.pathname === item.path
                    ? "text-blue-900"
                    : "text-gray-800 hover:text-blue-900"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Programs Mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigate("/programs");
                  setMenuOpen(false);
                }}
                className="flex-1 text-left"
              >
                Programs
              </button>
              <button onClick={() => setProgramsOpen(!programsOpen)}>
                <FiChevronDown
                  className={`w-7 h-7 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {programsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {programSubmenu.map((sub) => (
                  <button
                    key={sub.label}
                    onClick={() => {
                      navigate(sub.path);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-blue-900"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}

            {/* Contact */}
            <button
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className={`block w-full text-left ${
                location.pathname === "/contact"
                  ? "text-blue-900"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}


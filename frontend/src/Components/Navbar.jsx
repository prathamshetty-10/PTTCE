import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo3.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const programSubmenu = [
    { label: "All Programs", path: "/programs" },
    { label: "PTTCE: Academies", path: "/programs/academies" },
    { label: "PTTCE: School Training", path: "/programs/schoolTraining" },
    { label: "PTTCE: Private Training", path: "/programs/privateTraining" },
    { label: "SportsGen", path: "/programs/sportsgen" },
    { label: "Sports Equipment", path: "/programs/sportsEquipment" },
    { label: "Event Management", path: "/programs/eventManagement" },
    { label: "Infrastructure Development", path: "/programs/infrastructureDevelopment" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">

          {/* ===== MOBILE LOGO ===== */}
          <div className="md:hidden h-full flex items-center">
  <img
    src={logo}
    alt="Logo"
    className="w-32 max-h-full object-contain"
  />
</div>


          {/* ===== DESKTOP LEFT MENU ===== */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-end pr-24">
            <button
              onClick={() => navigate("/")}
              className={`pb-1 text-lg font-semibold ${
                location.pathname === "/"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigate("/about")}
              className={`pb-1 text-lg font-semibold  mr-7 ${
                location.pathname === "/about"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              About
            </button>
          </div>

          {/* ===== CENTER LOGO ===== */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-12 object-contain" />
          </div>

          {/* ===== DESKTOP RIGHT MENU ===== */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-start pl-24">

            <div className="relative flex items-center gap-2 ml-7">
              <button
                onClick={() => navigate("/programs")}
                className={`pb-1 text-lg font-semibold ${
                  location.pathname.startsWith("/programs")
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-800 hover:text-blue-900"
                }`}
              >
                Programs
              </button>

              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="text-2xl hover:text-blue-900"
              >
                <FiChevronDown
                  className={`transition-transform ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-64 z-50 ">
                  {programSubmenu.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => {
                        navigate(sub.path);
                        setProgramsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-lg hover:border hover:border-black "
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className={`pb-1 text-lg font-semibold ${
                location.pathname === "/contact"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              Contact
            </button>
          </div>

          {/* ===== MOBILE HAMBURGER ===== */}
          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU (UNCHANGED) ===== */}
      {menuOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <div className="space-y-3 py-4 px-4">

      <button
        className="block w-full text-left"
        onClick={() => { navigate("/"); setMenuOpen(false); }}
      >
        Home
      </button>

      <button
        className="block w-full text-left"
        onClick={() => { navigate("/about"); setMenuOpen(false); }}
      >
        About
      </button>

      <div className="flex items-center gap-2">
        <button
          className="flex-1 text-left"
          onClick={() => {
            navigate("/programs");
            setMenuOpen(false);
          }}
        >
          Programs
        </button>
        <button onClick={() => setProgramsOpen(!programsOpen)}>
          <FiChevronDown className="w-7 h-7" />
        </button>
      </div>

      {programsOpen && (
        <div className="ml-4 mt-2 space-y-2">
          {programSubmenu.map((sub) => (
            <button
              key={sub.label}
              className="block w-full text-left"
              onClick={() => {
                navigate(sub.path);
                setMenuOpen(false);
              }}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}

      <button
        className="block w-full text-left"
        onClick={() => { navigate("/contact"); setMenuOpen(false); }}
      >
        Contact
      </button>

    </div>
  </div>
)}

    </nav>
  );
}

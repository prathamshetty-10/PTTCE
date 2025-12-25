import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo3.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const programsRef = useRef(null);
  const programsButtonRef = useRef(null);

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

  /* ===== CLICK OUTSIDE (DESKTOP ONLY) ===== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth < 768) return; // ⛔ skip on mobile

      if (
        programsRef.current &&
        !programsRef.current.contains(e.target)
      ) {
        setProgramsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ===== KEYBOARD HANDLER ===== */
  const handleProgramsKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setProgramsOpen((prev) => !prev);
    }

    if (e.key === "Escape") {
      setProgramsOpen(false);
      programsButtonRef.current?.focus();
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">

          {/* ===== MOBILE LOGO ===== */}
          <div className="md:hidden h-full flex items-center">
            <img src={logo} alt="Logo" className="w-32 object-contain" />
          </div>

          {/* ===== DESKTOP LEFT ===== */}
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
              className={`pb-1 text-lg font-semibold mr-7 ${
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

          {/* ===== DESKTOP RIGHT ===== */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-start pl-24">

            {/* Programs */}
            <div className="relative ml-7" ref={programsRef}>
              <button
                ref={programsButtonRef}
                onClick={() => setProgramsOpen(!programsOpen)}
                onKeyDown={handleProgramsKeyDown}
                aria-haspopup="true"
                aria-expanded={programsOpen}
                className={`flex items-center gap-2 pb-1 text-lg font-semibold ${
                  location.pathname.startsWith("/programs") || programsOpen
                    ? "text-blue-900 border-b-2 border-blue-900"
                    : "text-gray-800 hover:text-blue-900"
                }`}
              >
                Programs
                <FiChevronDown
                  className={`text-2xl transition-transform ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-64 z-50">
                  {programSubmenu.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => {
                        navigate(sub.path);
                        setProgramsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2
                                 hover:bg-gray-100 hover:rounded-lg hover:border hover:border-black"
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
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-4">

            <button
              className="text-left w-full"
              onClick={() => { navigate("/"); setMenuOpen(false); }}
            >
              Home
            </button>

            <button
              className="text-left w-full"
              onClick={() => { navigate("/about"); setMenuOpen(false); }}
            >
              About
            </button>

            {/* Mobile Programs */}
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              <span>Programs</span>
              <FiChevronDown
                className={`transition-transform ${
                  programsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {programsOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                {programSubmenu.map((sub) => (
                  <button
                    key={sub.label}
                    className="text-left w-full"
                    onClick={() => {
                      navigate(sub.path);
                      setProgramsOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}

            <button
              className="text-left w-full"
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


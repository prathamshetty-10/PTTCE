import React from "react";
import logo from "../assets/logo3.jpg"; // your logo

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <img
        src={logo}
        alt="Padukone Centre for Sports"
        className="w-56 md:w-80 animate-zoom"
      />
    </div>
  );
}

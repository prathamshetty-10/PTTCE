import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

// Example school images – replace with real pics
import school1 from "../assets/school1.jpeg";
import school2 from "../assets/school2.jpeg";
import school3 from "../assets/school3.jpeg";
import school4 from "../assets/gal4.jpg";
import school5 from "../assets/school5.jpeg";
import school6 from "../assets/school6.jpeg";
import logo from "../assets/pttcelogo.png"

export default function SchoolTraining() {
  const navigate = useNavigate();

  const partneredSchools = [
    {
      name: "Carmel School",
      place: "Moodbidri",
      state: "Karnataka",
      image: school1,
    },
    {
      name: "St Teresa School",
      place: "Mangaluru",
      state: "Karnataka",
      image: school2,
    },
    {
      name: "St. Agnes School",
      place: "Mangaluru",
      state: "Karnataka",
      image: school6,
    },
    {
      name: "Mount Carmel School",
      place: "Mangaluru",
      state: "Karnataka",
      image: school3,
    },
    {
      name: "St Aloysius Gonzaga",
      place: "Mangaluru",
      state: "Karnataka",
      image: school5,
    },
    {
      name: "Milagres English Medium School",
      place: "Kalyanpur",
      state: "Karnataka",
      image: school4,
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Back Button */}
      <div className="mt-16 px-4 md:px-16 pt-6 hidden md:block">
        <button
          onClick={() => navigate("/programs")}
          className="text-blue-900 px-8 py-3 rounded font-semibold hover:text-blue-700 transition-colors uppercase tracking-wider"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          &lt; ALL Programs
        </button>
      </div>

      {/* Heading + Description */}
      <div className="text-center px-4 md:px-16 py-12 md:py-6 max-w-7xl mx-auto mt-9 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          PTTCE: School Training
        </h1>
        {/* Logo under heading */}
        <div className="flex justify-center my-8">
          <img
            src={logo}
            alt="PTTCE Logo"
            className="w-full max-w-5xl md:max-w-xl h-auto md:max-h-56 object-contain"
          />
        </div>

        <p
          className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          At the Padukone Table Tennis Centre for Excellence (PTTCE), we believe that the foundation of any
          sport must be laid during the early years of a child’s development. Our school training initiative
          extends this vision beyond our centres, bringing high-quality table tennis coaching directly to
          campuses across Karnataka.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          The program is designed to integrate seamlessly into school life by offering <strong>after-school
          training sessions right at the school premises</strong>. This makes it convenient for students to pursue
          table tennis without needing to travel, while still receiving structured coaching from certified PTTCE
          instructors. Every session emphasizes discipline, agility, coordination, and the joy of learning, helping
          students grow both physically and mentally.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Through our school partnerships, we aim to build a sustainable grassroots ecosystem for table tennis—
          one that nurtures interest, identifies talent early, and supports young athletes as they progress from
          curious beginners to confident, competitive players.
        </p>
      </div>

      {/* Partnered Schools Section */}
<div className="w-full px-4 md:px-8 py-12">
  <h2
    className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Our Partnered Schools
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
    {partneredSchools.map((school, idx) => (
      <div
        key={idx}
        className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${school.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <h3
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            {school.name}
          </h3>
          <p
            className="text-base text-blue-100"
            style={{ fontFamily: "Lora, serif" }}
          >
            {school.place}, {school.state}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Partner With Us */}
      <div className="px-4 md:px-16 py-16 max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Partner With PTTCE
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          If your school is interested in introducing a structured after-school table tennis program led by
          certified PTTCE coaches, we would be happy to collaborate. Together, we can bring more children into
          the world of sport and create an environment that encourages discipline, confidence, and excellence.
        </p>

        <div className="flex justify-center items-center gap-6">
  {/* Contact Us Button */}
  <button
    onClick={() => navigate("/contact")}
    className="w-82 bg-blue-900 text-white px-12 py-4 rounded text-lg md:text-xl font-semibold hover:bg-blue-800 transition-colors shadow-lg uppercase tracking-wider"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Contact Us
  </button>

  {/* Call Button (enabled on mobile, disabled on desktop) */}
<a
  href="tel:+919481675900"
  className="w-82 px-5 py-4 rounded text-lg md:text-xl font-semibold uppercase tracking-wider
             bg-white text-blue-900 border-2 border-blue-900 text-center
             md:pointer-events-none
             md:cursor-not-allowed
             hover:bg-blue-50 transition"
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  📞 +91 9481675900
</a>

</div>


      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-900 py-6 text-white">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          style={{ fontFamily: "Lora, serif" }}
        >
          © 2025 Padukone Centre Of Sports. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

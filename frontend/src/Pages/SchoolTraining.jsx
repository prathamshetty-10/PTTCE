import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import { Helmet } from "react-helmet-async";

// Example school images – replace with real pics
import school1 from "../assets/school1.jpeg";
import school2 from "../assets/school2.jpeg";
import school3 from "../assets/school3.jpeg";
import school4 from "../assets/gal4.jpg";
import school5 from "../assets/school5.jpeg";
import school6 from "../assets/school6.jpeg";
import school7 from "../assets/school7.jpg"
import school8 from "../assets/school8.jpeg"
import school9 from "../assets/school9.jpeg"
import school10 from "../assets/school10.jpeg"
import school11 from "../assets/school11.jpg"
import school13 from "../assets/school13.jpg"
import logo from "../assets/pttcelogo.png"

export default function SchoolTraining() {
  const navigate = useNavigate();

 const partneredSchools = [
  {
    name: "Carmel School, Moodbidri",
    img1: school7,
    img2: school1,
  },
  {
    name: "St Teresa School, Mangaluru",
    img1: school8,
    img2: school2,
  },
  {
    name: "St. Agnes School, Mangaluru",
    img1: school9,
    img2: school6,
  },
  {
    name: "Mount Carmel School, Mangaluru",
    img1: school13,
    img2: school3,
  },
  {
    name: "St Aloysius Gonzaga, Mangaluru",
    img1: school5,
    img2: school10,
  },
  {
    name: "Milagres English Medium School, Kalyanpur",
    img1: school11,
    img2: school4,
  },
  
];
// ✅ SECTION COMPONENT
const Section = ({ title, img1, img2 }) => (
  <div className="max-w-7xl mx-auto px-4 mb-20">
    <h2
      className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
      style={{ fontFamily: "Oswald, sans-serif" }}
    >
      {title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
        <img
          src={img1}
          alt={`${title} 1`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
        <img
          src={img2}
          alt={`${title} 2`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);


  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <Helmet>
  <title>School Sports Training Programs | Padukone Centre for Sports</title>
  <meta
    name="description"
    content="School sports training programs by Padukone Centre for Sports, led by Ashwin Kumar Padukone, focused on student development and long-term athletic growth."
  />
</Helmet>

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
        
        {/* Logo under heading */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Table tennis academy training in Udupi Karnataka"
            className="w-full max-w-5xl md:max-w-xl h-auto md:max-h-56 object-contain"
          />
        </div>
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide my-10"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          School Training
        </h1>

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
<div className="w-full pt-16">
  <h2
    className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Our Partnered Schools
  </h2>

  {partneredSchools.map((school, index) => (
    <Section
      key={index}
      title={school.name}
      img1={school.img1}
      img2={school.img2}
    />
  ))}
</div>


      {/* Partner With Us */}
      <div className="px-4 md:px-16 pt-1 md:pt-12 pb-14  max-w-7xl mx-auto text-center">
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
          © 2025 Padukone Centre for Sports. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

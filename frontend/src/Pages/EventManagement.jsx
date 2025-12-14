import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.jpeg";
import event6 from "../assets/event6.jpeg";
import event7 from "../assets/event7.jpeg";
import event8 from "../assets/event8.jpeg";

export default function EventManagement() {
  const navigate = useNavigate();

  // Reusable Section Component (2 images per row)
  const ImageRow = ({ title, img1, img2 }) => (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      {title && (
        <h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={img1}
            alt={title || "Event Image 1"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={img2}
            alt={title || "Event Image 2"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col">

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
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
          &lt; All Programs
        </button>
      </div>

      {/* Heading + Description */}
      <div className="text-center px-4 md:px-16 py-16 max-w-6xl mx-auto mt-9 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Event Management
        </h1>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          At Padukone Centre for Sports, we specialize in planning, organizing, and managing premium sports
          events for schools, academies, and institutions. From intimate school sports days to large-scale
          tournaments hosted in professional stadiums, our team ensures a seamless and memorable experience
          for every participant and spectator.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          We organize events either at the required venue (school campuses, grounds, stadiums) or at our own
          PCS academy facilities, depending on the needs and scale of the event. Our flexible approach ensures
          that institutions always get the ideal environment for their sporting occasion.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          We handle every aspect—event flow, scheduling, equipment setup, athlete coordination, officiating,
          branding, scoring, and safety management. Whether it's a multi-sport event, inter-school competition,
          annual day, or a high-performance tournament, our event roadmap guarantees smooth execution at every level.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          With experience organizing events in top stadiums and school campuses across the region, we make
          sports events stress-free for institutions and exciting for children. Our goal is simple — to create
          unforgettable sporting experiences that inspire participation, competition, and joy.
        </p>
      </div>

      {/* YOUTUBE VIDEO SECTION */}
      <div className="md:w-[60vw] w-full mx-auto px-4 mb-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          State Ranking TT Tournament at PTTCE Mangaluru Academy
        </h2>

        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/Oa4iJmhgIDg`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* IMAGE ROWS WITH TITLES */}
      <ImageRow
        title="Yoga Day event hosted at our Surathkal Center"
        img1={event7}
        img2={event8}
      />
      <ImageRow
        title="District level table tennis tournament held at Ajjarkad Indoor Stadium, Udupi"
        img1={event1}
        img2={event2}
      />
      <ImageRow
        title="SportsDay at Canara Nandagokul Preschool, Mangaluru"
        img1={event3}
        img2={event4}
      />
      <ImageRow
        title="Intercollege TT tournament at Mangalore University"
        img1={event5}
        img2={event6}
      />

      {/* CTA SECTION */}
      <div className="text-center px-4 md:px-16 py-16 max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Host Your Next Event With Us
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Whether you’re planning a school sports day, a multi-sport competition, or a large-scale event in a
          stadium, our experienced team will manage everything from planning to execution. Reach out to us to
          make your next sports event impactful, organized, and truly unforgettable.
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

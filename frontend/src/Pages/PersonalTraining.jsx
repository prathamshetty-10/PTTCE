import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import logo from "../assets/pttcelogo.png"
import { Helmet } from "react-helmet-async";

export default function PrivateTraining() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <Helmet>
  <title>Private Sports & Table Tennis Coaching | Padukone Centre for Sports</title>
  <meta
    name="description"
    content="One-on-one private sports and table tennis coaching at Padukone Centre for Sports, guided by Ashwin Kumar Padukone and experienced trainers."
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

      {/* Back to Programs Button */}
      <div className="mt-16 px-4 md:px-16 pt-6 hidden md:block">
        <button
          onClick={() => navigate("/programs")}
          className="text-blue-900 px-8 py-3 rounded font-semibold hover:text-blue-700 transition-colors uppercase tracking-wider"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          &lt; All Programs
        </button>
      </div>

      {/* Heading */}
      <div className="text-center px-4 md:px-16 pt-12 pb-4 md:pt-8 md:pb-2 max-w-7xl mx-auto mt-9 md:mt-0">
        
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
          Private Training
        </h1>

        <p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Padukone Table Tennis Centre for Excellence (PTTCE) offers exclusive one-on-one Table Tennis private coaching delivered directly at your home. If you
          have a table tennis setup or availability to arrange one, our certified coaches will personally visit
          during your preferred hours to provide structured, personalised training that accelerates growth and builds
          strong fundamentals.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          This program is ideal for beginners looking to develop essential technique, school athletes preparing for
          competitions, or advanced players seeking dedicated attention and high-quality corrections that aren’t
          possible in a group environment.
        </p>
        {/* Personal Coaching CTA */}
<h2
    className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
  Searching for Flexible One-on-One Training?
</h2>

<p
  className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  For personalised one-on-one training at your home, feel free to reach out. Our team will assist you in
  understanding session options, available coaching schedules, and how the program can be tailored to your
  goals—whether it's building fundamentals, preparing for school tournaments, or developing competition-level
  consistency. We’ll help you plan sessions that comfortably fit into your routine.
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
      <footer className="w-full bg-blue-900 py-6 text-white mt-16">
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

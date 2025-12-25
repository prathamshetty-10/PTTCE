import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import infra from "../assets/infrapic.jpg"
import { Helmet } from "react-helmet-async";

export default function InfrastructureDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <Helmet>
  <title>Sports Infrastructure Development | Padukone Centre for Sports</title>
  <meta
    name="description"
    content="End-to-end sports infrastructure development services by Padukone Centre for Sports, led by Ashwin Kumar Padukone."
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
          &lt; All Programs
        </button>
      </div>

      {/* Heading */}
      <div className="text-center px-4 md:px-16 pt-16 pb-4 md:pt-8 md:pb-2 max-w-7xl mx-auto mt-12 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-10"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Infrastructure Development
        </h1>

        {/* Intro paragraph */}
      {/* Intro paragraph */}
<p
  className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  We offer complete sports infrastructure development — from expert consultation to full execution.
  Whether you are setting up a new facility or upgrading an existing one, our team ensures that every
  sports space is safe, functional, and thoughtfully designed to meet the specific needs of schools,
  academies, and institutions.
</p>

<p
  className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  Infrastructure plays a vital role in how students learn and how athletes train. Our process begins
  with a clear understanding of your available space, budget, and sporting objectives. Based on these
  inputs, we develop detailed layouts, flooring recommendations, lighting plans, and equipment placement
  strategies that ensure optimal safety, usability, and performance.
</p>

<p
  className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  Beyond advisory and planning, our team also undertakes complete execution of the project. This includes
  flooring installation, lighting setup, equipment layout, and overall facility preparation. By combining
  thoughtful design with precise execution, we transform underused or empty spaces into high-quality,
  future-ready sports environments built for daily training and competitive play.
</p>


          
        
        {/* CTA Section */}
<div className="max-w-7xl mx-auto mt-16 text-center">
  <h2
    className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Plan Your Sports Infrastructure Project With Us
  </h2>

  <p
    className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
    style={{ fontFamily: "Lora, serif" }}
  >
    From building dedicated Table Tennis halls to designing multi-sport facilities, our approach
    balances safety, aesthetics, and performance. If you're planning to develop or upgrade your
    sports infrastructure, our team can guide the planning and deliver the complete setup
    from concept to completion.
  </p>
</div>

      

         <div className="flex justify-center items-center gap-6 mt-8">
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

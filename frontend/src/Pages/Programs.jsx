import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import placeholderImg from "../assets/manipalcenterpic.jpg";
import equipmentpic from "../assets/equipmentpic.jpg";
import eventpic from "../assets/eventpic.jpg";
import infrapic from "../assets/infrapic.jpg";

// Custom Arrow Component
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 z-20 ${
      direction === "prev" ? "left-4" : "right-4"
    } bg-white/80 hover:bg-white text-blue-900 rounded-3xl p-4 transition-all opacity-50 hover:opacity-100`}
  >
    {direction === "prev" ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
  </button>
);


export default function Programs() {
  const navigate = useNavigate();

  const programs = [
    {
      id: "academies",
      title: "PTTCE: Academies",
      description:
        "Training across academies and schools in Mangalore, Suratkal, and Manipal.",
      link: "/programs/academies",
      bgImage: placeholderImg,
    },
    {
      id: "sportsgen",
      title: "Sportsgen",
      description:
        "A foundational program for nursery kids, creating future sporting talents.",
      link: "/programs/sportsgen",
      bgImage: placeholderImg,
    },
    {
      id: "sports-center",
      title: "Padukone Sports Center",
      description:
        "Providing trained coaches for schools across multiple sports.",
      link: "/programs/sports-center",
      bgImage: placeholderImg,
    },
    {
      id: "equipment",
      title: "Sports Equipment",
      description:
        "Procuring and supplying high-quality sports equipment for schools and academies.",
      link: "/programs/equipment",
      bgImage: equipmentpic,
    },
    {
      id: "events",
      title: "Event Management",
      description: "End-to-end management of sporting events and tournaments.",
      link: "/programs/events",
      bgImage: eventpic,
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description:
        "Developing world-class sports facilities, including courts and playing areas.",
      link: "/programs/infrastructure",
      bgImage: infrapic,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      <div className="mt-16">
        <Slider {...settings}>
          {programs.map((program) => (
            <div key={program.id} className="relative w-full h-[91vh]">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${program.bgImage})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-3xl text-white">
                <h2
                  className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {program.title}
                </h2>
                <p
                  className="text-xl md:text-2xl mb-8 leading-relaxed"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {program.description}
                </p>
                <button
                  onClick={() => navigate(program.link)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors uppercase tracking-wider"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-300 py-6">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p>
            © 2024 Padukone Table Tennis Center for Excellence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}


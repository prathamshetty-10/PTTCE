import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import academyImg from "../assets/manglorecenterpic.jpg";
import schoolImg from "../assets/gal7.jpg"
import equipmentpic from "../assets/equipmentpic.jpg";
import eventpic from "../assets/eventpic1.jpg";
import infrapic from "../assets/infrapic.jpg";
import sportsGen from "../assets/sportsgen.jpg"
import pt from "../assets/pt.png"

// Custom Arrow Component for Slider
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
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderSectionRef = useRef(null);

  const programs = [
    {
      id: "academies",
      title: "PTTCE: Academies",
      description:
        "Specialized table tennis coaching delivered across our academies in Mangalore, Suratkal, and Manipal, shaping skilled and confident players.",
      link: "/programs/academies",
      bgImage: academyImg,
    },
    
    {
      id: "sports-center",
      title: "PTTCE: School Training",
      description:
        "After-school table tennis coaching for students, helping them develop strong fundamentals, improve reflexes, and cultivate a love for the game.",
      link: "/programs/schoolTraining",
      bgImage: schoolImg,
    },
    {
      id: "PTTCE:Private Training",
      title: "PTTCE: Private Training",
      description:
       "One-on-one table tennis coaching conducted at your home, with our certified coach visiting to provide personalized training and strong skill development",
      link: "/programs/privateTraining",
      bgImage: pt,
    },
    {
      id: "sportsgen",
      title: "Sportsgen",
      description:
        "A foundational program for nursery kids, designed to develop coordination, basic motor skills, and a love for sports, fostering curiosity and active engagement from an early age.",
      link: "/programs/sportsgen",
      bgImage: sportsGen,
    },
    {
      id: "equipment",
      title: "Sports Equipment",
      description:
        "Procuring and delivering premium sports equipment for schools and academies, ensuring they have dependable, top-grade gear to support effective sports training.",
      link: "/programs/sportsEquipment",
      bgImage: equipmentpic,
    },
    {
      id: "events",
      title: "Event Management",
      description: "Comprehensive end-to-end management of sporting events and tournaments, delivering well-organized, efficient, and memorable sporting experiences.",
      link: "/programs/eventManagement",
      bgImage: eventpic,
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description:
        "Developing world-class sports facilities, including advanced courts and well-designed playing areas that support professional-level training.",
      link: "/programs/infrastructureDevelopment",
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
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next),
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <div className="min-h-screen w-full flex flex-col  bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      {/* Heading */}
      <div className="mt-16 text-center py-20 px-4">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Our Programs
        </h1>
        <p
          className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto"
          style={{ fontFamily: "Lora, serif" }}
        >
          Explore our diverse range of programs designed to nurture talent, build skills,
          and provide world-class training across multiple sports and disciplines.
        </p>
      </div>

      {/* Timeline Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        {programs.map((program, index) => (
          <button
            key={program.id}
            onClick={() => {
              // Scroll to the slider smoothly
              const navbarHeight = 80; // adjust if your navbar height is different
    const sliderTop = sliderSectionRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sliderTop - navbarHeight,
      behavior: "smooth",
    });
              sliderRef.current.slickGoTo(index)}}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeIndex === index
                ? "bg-blue-900 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            {program.title}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div  ref={sliderSectionRef} className="mb-20">
        <Slider ref={sliderRef} {...settings}>
          {programs.map((program) => (
            <div key={program.id} className="relative w-full h-[91vh]">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${program.bgImage})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-3xl text-white">
                <h2
                  className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {program.title}
                </h2>
                <p
                  className="text-xl md:text-2xl mb-8 mt-3 leading-relaxed"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {program.description}
                </p>
                <button
  onClick={() => navigate(program.link)}
  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors uppercase tracking-wider"
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  {program.cta || "Learn More"}
</button>


              </div>
            </div>
          ))}
        </Slider>
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


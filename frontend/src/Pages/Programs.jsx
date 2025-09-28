import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import placeholderImg from "../assets/manipalcenterpic.jpg"; // replace with actual images if available
import equipmentpic from "../assets/equipmentpic.jpg"
import eventpic from "../assets/eventpic.jpg"
import infrapic from "../assets/infrapic.jpg"

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

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Programs Sections */}
      {programs.map((program, index) => (
        <div
          key={program.id}
          className="relative h-screen w-full bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${program.bgImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content aligned left */}
          <div className="relative z-10 max-w-2xl text-left text-white px-8 md:px-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {program.title}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              {program.description}
            </p>

            <button
              onClick={() => navigate(program.link)}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}

      

      {/* Footer */}
      <footer className="w-full bg-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            © 2024 Padukone Table Tennis Center for Excellence. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

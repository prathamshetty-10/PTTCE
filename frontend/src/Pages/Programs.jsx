import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

export default function Programs() {
  const navigate = useNavigate();

  const programs = [
    {
      id: "academies",
      title: "PTTCE: Academies",
      description: "Training across academies and schools in Mangalore, Suratkal, and Manipal.",
      link: "/programs/academies"
    },
    {
      id: "sportsgen",
      title: "Sportsgen",
      description: "A foundational program for nursery kids, creating future sporting talents.",
      link: "/programs/sportsgen"
    },
    {
      id: "sports-center",
      title: "Padukone Sports Center",
      description: "Providing trained coaches for schools across multiple sports.",
      link: "/programs/sports-center"
    },
    {
      id: "equipment",
      title: "Sports Equipment",
      description: "Procuring and supplying high-quality sports equipment for schools and academies.",
      link: "/programs/equipment"
    },
    {
      id: "events",
      title: "Event Management",
      description: "End-to-end management of sporting events and tournaments.",
      link: "/programs/events"
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description: "Developing world-class sports facilities, including courts and playing areas.",
      link: "/programs/infrastructure"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Programs Header */}
      <div className="w-full pt-[110px] pb-[100px] bg-blue-900 mb-[80px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the six key verticals offered by PTTCE. Each program is designed to enhance and develop sporting excellence across different domains.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col mb-9"
              >
                <div className="relative h-64">
                  <img
                    src="/api/placeholder/600/400"
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {program.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 flex-1">
                    {program.description}
                  </p>
                  <button 
                    onClick={() => navigate(program.link)}
                    className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Join Our Programs?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards excellence in table tennis. Contact us to learn more about our programs and enrollment process.
          </p>
          <button 
            onClick={() => navigate("/contact")}
            className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Padukone Table Tennis Center for Excellence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
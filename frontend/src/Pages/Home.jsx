import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col relative ">
      {/* Navbar - Fixed and full width */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar/>
      </div>

      {/* Main content - Adjusted for fixed navbar */}
      <div className="w-full mt-16 mx-0 "> {/* mt-16 accounts for fixed navbar height */}
        {/* Hero Section - Full width */}
        <div className="min-h-screen w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 z-10" />
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-7xl font-bold mb-8 text-center">
              Transform Your Game
            </h1>
            <p className="text-2xl mb-12 max-w-3xl text-center leading-relaxed">
              Join our elite sports training center and unlock your true potential with world-class coaching and facilities
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => navigate("/about")}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Programs Section - Full width */}
        <div className="w-full py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our diverse range of specialized training programs designed to elevate your performance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { 
                  title: "Youth Development",
                  desc: "Comprehensive sports training program designed specifically for young athletes aged 8-16",
                  icon: "🌟"
                },
                { 
                  title: "Elite Performance",
                  desc: "Advanced training regime for competitive athletes aiming for professional excellence",
                  icon: "🏆"
                },
                { 
                  title: "Specialized Training",
                  desc: "Sport-specific programs focusing on technique, strength, and tactical development",
                  icon: "⚡"
                }
              ].map((program) => (
                <div 
                  key={program.title} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src="/api/placeholder/400/300"
                      alt={program.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 text-4xl">
                      {program.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                    <button 
                      className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      onClick={() => navigate("/programs")}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Full width */}
        <div className="w-full py-24 bg-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-800/50" />
          <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { title: "Expert Coaches", count: "25+", desc: "Professional trainers" },
                { title: "Active Members", count: "1000+", desc: "Satisfied athletes" },
                { title: "Success Rate", count: "95%", desc: "Achievement rate" },
                { title: "Training Hours", count: "10k+", desc: "Hours completed" }
              ].map((stat) => (
                <div key={stat.title} className="text-center text-white">
                  <div className="text-5xl font-bold mb-4">{stat.count}</div>
                  <div className="text-xl font-semibold mb-2">{stat.title}</div>
                  <div className="text-blue-200">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Full width */}
        <div className="w-full py-24 relative bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-900">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
              Take the first step towards achieving your athletic goals. Join our community of dedicated athletes and experienced coaches.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => navigate("/contact")}
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                View Locations
              </button>
              <button 
                onClick={() => navigate("/programs")}
                className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Programs
              </button>
            </div>
          </div>
        </div>

        {/* Footer - Full width */}
        <footer className="w-full bg-blue-900 text-white py-12">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">SportCenter</h3>
            <p className="text-blue-200">© 2024 SportCenter. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}


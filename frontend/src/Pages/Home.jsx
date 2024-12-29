import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col relative ">
      {/* Navbar - Fixed and full width */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      {/* Main content - Adjusted for fixed navbar */}
      <div className="w-full mt-16 mx-0 ">
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
              Join our elite sports training center and unlock your true
              potential with world-class coaching and facilities
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
              <h2 className="text-5xl font-bold mb-6 text-blue-900">
                Our Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our diverse range of specialized training programs
                designed to elevate your performance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Youth Development",
                  desc: "Comprehensive sports training program designed specifically for young athletes aged 8-16",
                  icon: "🌟",
                },
                {
                  title: "Elite Performance",
                  desc: "Advanced training regime for competitive athletes aiming for professional excellence",
                  icon: "🏆",
                },
                {
                  title: "Specialized Training",
                  desc: "Sport-specific programs focusing on technique, strength, and tactical development",
                  icon: "⚡",
                },
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
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {program.desc}
                    </p>
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

        {/* Reviews Section */}
        <div className="w-full py-24 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">
                What People Say About Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here's what our clients have to say about their experience with
                us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Dr. Keshav Prabhu",
                  rating: 5,
                  review:
                    "PTTCE is excellent academy for learning table tennis sport. Ashwin Sir is the dedicated teacher, coach, guide and trainer. Absolutely fantastic facilities and fitness coaching for students. If you want to learn and excel...it is Pdukone Table Tennis Center for excellence.",
                },
                {
                  name: "Elson Noronha",
                  rating: 5,
                  review:
                    "A very Good Academy For Aspiring Table tennis players starting from professional level to beginner level. Ashwin Sir Is Just Excellent and his way of teaching kids and Adults Is Beyond Imagination and creativity at its peak.",
                },
                {
                  name: "Snehal Prabhu",
                  rating: 5,
                  review:
                    "Looking for a Professional Accadamy along with The Best All Round Dedicated Coach for ur Ward - Ur at rgt place. Along with His Superb team. They are Fantastic. My all the Best to PADUKUNE Academy n its STUDENTS . Keep Rocking.",
                },
                {
                  name: "Vaibhav Bhat",
                  rating: 5,
                  review:
                    "PTTCE is a game-changer. Exceptional coaching and facilities. Highly recommended!",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                    {review.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-lg font-medium mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
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



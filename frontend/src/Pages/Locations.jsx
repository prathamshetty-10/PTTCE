import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import mlr from "../assets/pttce.jpg";

export default function Locations() {
  const navigate = useNavigate();

  const locations = [
    {
      name: "Manipal Center",
      description: "Our Manipal center offers a comprehensive training facility equipped with top-notch equipment and amenities. Located conveniently in the heart of Manipal, this center is perfect for players at all levels looking to train with the best.",
      address: "[Add full address here]",
      contact: "+91 9876543210",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM"
    },
    {
      name: "Suratkal Center",
      description: "The Suratkal center is designed for those passionate about table tennis, offering well-maintained tables and a focused training environment. Our experienced coaches provide personalized attention to help players develop their skills.",
      address: "[Add full address here]",
      contact: "+91 9876543211",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM"
    },
    {
      name: "Mangalore Center",
      description: "Located in Mangalore, this center serves as our flagship facility, featuring multiple tables and professional training programs. We also collaborate with schools around Mangalore, providing coaching programs tailored to nursery kids under the \"Sportsgen\" initiative.",
      address: "[Add full address here]",
      contact: "+91 9876543212",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Locations Header */}
      <div className="w-full pt-[110px] pb-[100px] bg-blue-900 mb-[80px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            PTTCE has centers in Manipal, Suratkal, and Mangalore, where we provide high-quality training to table tennis enthusiasts of all skill levels.
          </p>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div 
                key={location.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Location Image */}
                <div className="h-48 relative">
                  <img
                    src={mlr}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {location.name}
                  </h3>
                </div>

                {/* Location Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {location.description}
                  </p>
                  
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-900 font-semibold min-w-20">Address:</span>
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-900 font-semibold min-w-20">Contact:</span>
                      <span className="text-gray-600">{location.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-900 font-semibold min-w-20">Hours:</span>
                      <span className="text-gray-600">{location.hours}</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button 
                    onClick={() => navigate("/contact")}
                    className="mt-6 w-full bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                  >
                    Contact This Center
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

      {/* Map Section Placeholder */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Find Us on the Map</h2>
          <div className="bg-gray-200 h-96 rounded-xl">
            {/* Map integration would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration Coming Soon
            </div>
          </div>
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

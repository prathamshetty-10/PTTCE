import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import surat from "../assets/surathcenterpic.jpg";
import mlr from "../assets/manglorecenterpic.jpg";
import mani from "../assets/manipalcenterpic.jpg";
import mapPic1 from "../assets/mlrcenter.png";
import mapPic2 from "../assets/surathcenter.png";
import mapPic3 from "../assets/manipalcenter.png";

export default function Locations() {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: "Mangalore Center",
      description:
        'Located in Mangalore, this center serves as our flagship facility, featuring multiple tables and professional training programs. We also collaborate with schools around Mangalore, providing coaching programs tailored to nursery kids under the "Sportsgen" initiative.',
      address: "[Add full address here]",
      contact: "+91 9876543212",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM",
      mapsQuery: "Fr+Muller+Indoor+Stadium",
      mapImage: mapPic1,
      bgImage: mlr,
    },
    {
      name: "Suratkal Center",
      description:
        "The Suratkal center is designed for those passionate about table tennis, offering well-maintained tables and a focused training environment. Our experienced coaches provide personalized attention to help players develop their skills.",
      address: "[Add full address here]",
      contact: "+91 9876543211",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM",
      mapsQuery: "Govinda+Dasa+Commercial+Complex",
      mapImage: mapPic2,
      bgImage: surat,
    },
    {
      name: "Manipal Center",
      description:
        "Our Manipal center offers a comprehensive training facility fully equipped with top-notch equipment and modern amenities. Located conveniently in the heart of Manipal, this center is perfect for players at all levels looking to train with the very best.",
      address: "[Add full address here]",
      contact: "+91 9876543210",
      hours: "Mon-Sat, 8:00 AM - 8:00 PM",
      mapsQuery: "Udupi+City+Central+Public+Library+Manipal",
      mapImage: mapPic3,
      bgImage: mani,
    },
  ];

  const scrollToMap = (location) => {
    setSelectedLocation(location);
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to ensure render
  };

  const openInGoogleMaps = (location) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Locations Sections */}
      {locations.map((location, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative w-full flex items-center py-8 md:py-0 ${index === 0 ? 'mt-20 md:mt-24' : ''}`}
          >
            {/* Two Column Layout */}
            <div className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Text Side */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-12 md:py-16">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {location.name}
                  </h2>
                  <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                    {location.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 text-sm md:text-base mb-10 text-gray-800" style={{ fontFamily: 'Lora, serif' }}>
                    <p>
                      <span className="font-semibold">Address:</span> {location.address}
                    </p>
                    <p>
                      <span className="font-semibold">Contact:</span> {location.contact}
                    </p>
                    <p>
                      <span className="font-semibold">Hours:</span> {location.hours}
                    </p>
                  </div>

                  {/* Single Button */}
                  <button
                    onClick={() => scrollToMap(location)}
                    className="bg-blue-900 text-white px-8 py-3 rounded text-sm md:text-base font-semibold hover:bg-blue-800 transition-colors shadow-md uppercase tracking-wider"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    Find on Map
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div 
                className="w-full md:w-1/2 bg-cover bg-center min-h-[400px] md:min-h-0"
                style={{ backgroundImage: `url(${location.bgImage})` }}
              >
                <div className={`w-full h-full ${isEven ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-black/10`}></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Map Section - only appears when a location is selected */}
      {selectedLocation && (
        <div ref={mapRef} className="w-full py-16 bg-white mb-11">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Find Us on Map
            </h2>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div
                className="cursor-pointer"
                onClick={() => openInGoogleMaps(selectedLocation)}
              >
                <img
                  src={selectedLocation.mapImage}
                  alt={`Map for ${selectedLocation.name}`}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {selectedLocation.name}
                  </h3>
                  <p className="text-sm text-blue-100" style={{ fontFamily: 'Lora, serif' }}>
                    Click to open in Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p style={{ fontFamily: 'Lora, serif' }}>
            © 2024 Padukone Table Tennis Center for Excellence. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
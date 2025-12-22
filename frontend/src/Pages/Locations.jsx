import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import surat from "../assets/homepic1.jpg";
import mlr from "../assets/infrapic.jpg";
import mani from "../assets/manipalcenterpic.jpg";
import mapPic1 from "../assets/mlrcenter.png";
import mapPic2 from "../assets/surathcenter.png";
import mapPic3 from "../assets/manipalcenter.png";
import logo from "../assets/pttcelogo.png"

export default function Locations() {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: "Mangalore Center",
      description:
        'Located in Mangalore, this center serves as our flagship facility, featuring multiple tables and professional training programs. It offers structured table tennis coaching for players across different age groups and skill levels.',
      address: "VV87 + G94, Kankanady, Mangaluru, Karnataka 575002",
      contact: "+91 9481675900",
      hours: "Mon-Sat, 4:30 PM - 8:30 PM",
      mapsQuery: "Fr+Muller+Indoor+Stadium",
      mapImage: mapPic1,
      bgImage: mlr,
    },
    {
      name: "Suratkal Center",
      description:
        "The Suratkal center is designed for those passionate about table tennis, offering well-maintained tables and a focused training environment. Our experienced coaches provide personalized attention to help players develop their skills.",
      address: "Edapally - Panvel Highway, Hosabettu, Surathkal, Karnataka 575014",
      contact: "+91 9481675900",
      hours: "Mon-Sat, 4:30 PM - 8:30 PM",
      mapsQuery: "Govinda+Dasa+Commercial+Complex",
      mapImage: mapPic2,
      bgImage: surat,
    },
    {
      name: "Manipal Center",
      description:
        "Our Manipal center offers a comprehensive training facility fully equipped with top-notch equipment and modern amenities. Located conveniently in the heart of Manipal, this center is perfect for players at all levels looking to train with the very best.",
      address: "8QQP + XHV, HUDCO Colony, Ananth Nagar, Manipal, Karnataka    576104",
      contact: "+91 9481675900",
      hours: "Sat and Sun, 9:30 AM - 12:30 PM",
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
    <div className="min-h-screen w-full flex flex-col  bg-gradient-to-br from-blue-100 via-white to-blue-200">
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
          className=" text-blue-900 px-8 py-3 rounded font-semibold hover:text-blue-700 transition-colors uppercase tracking-wider "
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          &lt;   All Programs
        </button>
      </div>

      {/* Heading and PTTCE Intro */}
      <div className="text-center px-4 md:px-16 py-12 md:py-8 max-w-6xl mx-auto mt-9 md:mt-0">
        
{/* Logo under heading */}
<div className="flex justify-center mb-8">
  <img
    src={logo}
    alt="PTTCE Logo"
    className="w-full max-w-5xl md:max-w-xl h-auto md:max-h-56 object-contain"
  />
</div>
<h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide my-10"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
         Academies
        </h1>


        

        <p
  className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
          The Padukone Table Tennis Center for Excellence (PTTCE) is dedicated to nurturing the next generation
          of table tennis players through a holistic training approach. Combining expert coaching, state-of-the-art
          facilities, and a focus on discipline and sportsmanship, PTTCE aims to develop not only technical skills,
          but also coordination, agility, and a deep passion for the sport. Our academies offer programs for school
          children and beginners, providing them with a strong foundation and fostering a love for table tennis
          that can last a lifetime.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Explore our centers below to find out more about training programs, schedules, and facilities designed
          to bring out the best in every young athlete.
        </p>
      </div>

      {/* Locations Sections */}
      {locations.map((location, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative w-full flex items-center py-8 md:py-0 ${index === 0 ? 'mt-8 md:mt-12' : ''}`}
          >
            <div className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Text Side */}
              <div className="w-full md:w-1/2 flex items-center justify-center  px-8 md:px-16 py-12 md:py-16">
                <div className="max-w-xl">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-900 uppercase tracking-wide"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {location.name}
                  </h2>
                  <p
                    className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed text-justify"
                    style={{ fontFamily: 'Lora, serif' }}
                  >
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

                  {/* Buttons */}
<div > {/* gap-6 increases spacing */}
  {/* Find on Map Button */}
  <button
    onClick={() => scrollToMap(location)}
    className=" bg-blue-900 text-white px-8 py-3 rounded text-sm md:text-base font-semibold hover:bg-blue-800 transition-colors shadow-lg uppercase tracking-wider w-[70%]"
    style={{ fontFamily: 'Oswald, sans-serif' }}
  >
    Find on Maps
  </button>

  
</div>


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

      {/* Map Section */}
      {selectedLocation && (
        <div ref={mapRef} className="w-full py-20  mb-1">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2
                    className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-blue-900 uppercase tracking-wide"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                  Find Us On Maps
                  </h2>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="cursor-pointer" onClick={() => openInGoogleMaps(selectedLocation)}>
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
      {/* Join Our Academy CTA */}
<div className="px-4 md:px-16 py-16 max-w-6xl mx-auto text-center">
  <h2
    className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Join the PTTCE Academy
  </h2>

  <p
    className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
    style={{ fontFamily: "Lora, serif" }}
  >
    Whether your child is taking their first steps in table tennis or looking to train seriously in a
    professional environment, PTTCE offers structured coaching, world-class facilities, and a culture
    that inspires discipline, confidence, and a lifelong love for the sport. Join our academy and be
    part of a journey that shapes champions on and off the table.
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
      <footer className="w-full bg-blue-900  py-6 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center" style={{ fontFamily: 'Lora, serif' }}>
          <p>
           © 2025 Padukone Centre for Sports. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

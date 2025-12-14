import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

// IMPORT ALL IMAGES
import sportsgenCanara1 from "../assets/sportsgen.jpg";
import sportsgenCanara2 from "../assets/sportsgen2.jpg";

import sportsgenSiddhivinayaka1 from "../assets/sportsgen3.jpg";
import sportsgenSiddhivinayaka2 from "../assets/sportsgen4.jpg";

import sportsgenStTheresa1 from "../assets/sportsgen5.jpg";
import sportsgenStTheresa2 from "../assets/sportsgen6.jpg";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const sliderSettings2 = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  beforeChange: () => {
    // Pause all videos when sliding
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((frame) => {
      frame.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  },
  
  // 👇 This is the main fix 
  centerPadding: "310px",  // show left & right image partially

  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "45px", // small peek in mobile
      }
    }
  ]
};

const gallery = [
  { 
    id: "RSTASaKbt20", 
    caption: "SportsGen at Canara Nandagokul Preschool " 
  },
  { 
    id: "RHNuyXrvV4M", 
    caption: "SportsGen at St. Teresa School" 
  },
  { 
    id: "nh8fS2mW0II", 
    caption: "SportsGen at Canara Nandagokul Preschool" 
  }
];



export default function SportsGen() {
  const navigate = useNavigate();

  // ✅ SECTION COMPONENT (kept inside component but before return)
  const Section = ({ title, img1, img2 }) => (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      <h2
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
    <img
      src={img1}
      alt={`${title} 1`}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
    <img
      src={img2}
      alt={`${title} 2`}
      className="w-full h-full object-cover"
    />
  </div>
</div>

    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col">

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
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

      {/* Heading + Description */}
      <div className="text-center px-4 md:px-16 py-16 max-w-6xl mx-auto mt-9 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          SportsGen
        </h1>

       <p
  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  SportsGen is our flagship foundation program created to introduce young children to the world of
  movement, fitness, and sports. At an age where curiosity is high and habits are still forming,
  SportsGen provides a structured environment for children to explore physical activity through fun,
  engaging, and age-appropriate exercises.
</p>

<p
  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  The need for SportsGen arises from today’s lifestyle—where screen time dominates, outdoor play has
  reduced, and children often miss the chance to develop essential physical skills early in life.
  Our program bridges this gap by focusing on fundamental movement patterns: balance, flexibility,
  coordination, reflex development, agility, and motor skill enhancement. These skills form the base
  for every sport and contribute significantly to a child’s overall physical and cognitive growth.
</p>

<p
  className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  Through SportsGen, we send a trained coaching team directly to schools, making sports education
  accessible, convenient, and meaningful. Our goal is simple yet impactful—to help children discover
  the joy of movement, become more confident in their bodies, and develop an early interest in sports.
  By nurturing these abilities at a young age, we lay the foundation for healthier lifestyles,
  improved attention and discipline, and a future generation that truly values fitness and sportsmanship.
</p>

      </div>

      {/* LOCATIONS */}
      <Section
        title="SportsGen at Canara Nandagokul Preschool, Mangaluru"
        img1={sportsgenCanara1}
        img2={sportsgenCanara2}
      />

      <Section
        title="SportsGen at Sri Siddhivinayaka Residential School, Kundapura, Udupi"
        img1={sportsgenSiddhivinayaka1}
        img2={sportsgenSiddhivinayaka2}
      />

      <Section
        title="SportsGen at St. Theresa's ICSE School, Mangaluru"
        img1={sportsgenStTheresa1}
        img2={sportsgenStTheresa2}
      />
      {/* SportsGen Shorts Slider Section */}
<div className="w-full py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Heading */}
    <h2
      className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12"
      style={{ fontFamily: "Oswald, sans-serif" }}
    >
      Rising Stars in Motion
    </h2>

    <Slider {...sliderSettings2}>
  {gallery.map((video, index) => (
    <div key={index} className="px-4">

      {/* Video */}
      <div className="relative w-full max-w-[300px] mx-auto h-[80vh] max-h-screen rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <div className="text-center mt-4">
        <p
          className="text-lg md:text-xl font-semibold text-blue-900"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          {video.caption}
        </p>
      </div>

    </div>
  ))}
</Slider>


  </div>
</div>




      {/* Partner With Us - CTA Section */}
<div className="text-center px-4 md:px-16 py-16 max-w-6xl mx-auto">
  <h2
    className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
    style={{ fontFamily: "Oswald, sans-serif" }}
  >
    Bring SportsGen to Your School
  </h2>

  <p
    className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
    style={{ fontFamily: "Lora, serif" }}
  >
    SportsGen is more than a physical activity class—it is a structured early-age
    sports development program designed to build confident, active, and energetic young learners.
    If your school wishes to introduce foundational sports training that improves flexibility,
    balance, motor skills, and overall physical well-being, our certified SportsGen coaches are ready to help.
    Together, we can cultivate a generation of children who love movement, value fitness,
    and develop a strong affinity towards sports from an early age.
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
      <footer className="w-full bg-blue-900 py-6 text-white">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          style={{ fontFamily: "Lora, serif" }}
        >
          © 2025 Padukone Centre Of Sports. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

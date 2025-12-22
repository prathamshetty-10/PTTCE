import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import event1 from "../assets/event1.jpeg"
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.jpeg";
import event5 from "../assets/event5.jpeg";
import event7 from "../assets/event7.jpeg";
import event8 from "../assets/event8.jpeg";
import event9 from "../assets/event9.jpeg";
import event10 from "../assets/event10.jpeg";
import event11 from "../assets/event11.jpeg";
import event12 from "../assets/event12.jpeg";
import event13 from "../assets/event13.jpeg";
import event14 from "../assets/event14.jpeg";
import event15 from "../assets/event15.jpeg";
import event16 from "../assets/event16.jpeg";
import event17 from "../assets/event17.jpeg";
const eventRows = [
  {
    item1: {
      src: event2,
      title: "District Level TT Tournament at Ajjarkad Indoor Stadium, Udupi",
    },
    item2: {
      src: event7,
      title: "Yoga Day event hosted at our Surathkal Center",
    },
  },
  {
    item1: {
      src: event3,
      title: "Sports Day at Canara Nandagokul Preschool, Mangaluru",
    },
    item2: {
      src: event5,
      title: "Intercollege TT tournament at Mangalore University",
    },
  },
  {
    item1: {
      src: event1,
      title: "Aics interschool TT tournament organised at St Theresa School",
    },
    item2: {
      src: event4,
      title: "Inter Mahe TT Tournament organised by PTTCE",
    },
  },
  {
    item1: {
      src: event8,
      title: "Summer Camp organised at Little Rock Indian School",
    },
    item2: {
      src: event9,
      title: "RGUHS Zonal winners Father Muller Medical College",
    },
  },
  {
    item1: {
      src: event10,
      title: "Karnataka State Ranking TT Tournament 2024 under the aegis of KTTA.",
    },
    item2: {
      src: event11,
      title: "Zonal level ICSE schools TT tournament",
    },
  },
  {
    item1: {
      src: event12,
      title: "Inter district tournament at milagres kallianpur. 3rd edition",
    },
    item2: {
      src: event13,
      title: "Karnataka state games 2025 held at Manipal",
    },
  },
  {
    item1: {
      src: event14,
      title: "Yoga Day Event at Father Muller Indoor Stadium, Mangaluru",
    },
    item2: {
      src: event15,
      title: "TT training camp held at UVA Meridian, Koteshwara",
    },
  },
  {
    item1: {
      src: event16,
      title: "Training Camp at Mangaluru University",
    },
    item2: {
      src: event17,
      title: "World TT Day Event at Father Muller Indoor Stadium, Mangaluru",
    },
  },
  
  
];
const MediaRow = ({ item1, item2 }) => {
  if (!item1 || !item2) return null;

  return (
    <div className="w-full px-4 md:px-8 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">

      {[item1, item2].map((item, idx) => (
        <div
          key={idx}
          className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3
              className="text-xl md:text-2xl"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {item.title}
            </h3>
          </div>
        </div>
      ))}

    </div>
  );
};




export default function EventManagement() {
  const navigate = useNavigate();


  
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
      <div className="text-center px-4 md:px-16 pt-12 pb-4 md:pt-8 md:pb-2 max-w-7xl mx-auto mt-9 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Event Management
        </h1>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          At Padukone Centre for Sports, we specialize in planning, organizing, and managing premium sports
          events for schools, academies, and institutions. From intimate school sports days to large-scale
          tournaments hosted in professional stadiums, our team ensures a seamless and memorable experience
          for every participant and spectator.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          We organize events either at the required venue (school campuses, grounds, stadiums) or at our own
          PCS academy facilities, depending on the needs and scale of the event. Our flexible approach ensures
          that institutions always get the ideal environment for their sporting occasion.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          We handle every aspect—event flow, scheduling, equipment setup, athlete coordination, officiating,
          branding, scoring, and safety management. Whether it's a multi-sport event, inter-school competition,
          annual day, or a high-performance tournament, our event roadmap guarantees smooth execution at every level.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          With experience organizing events in top stadiums and school campuses across the region, we make
          sports events stress-free for institutions and exciting for children. Our goal is simple — to create
          unforgettable sporting experiences that inspire participation, competition, and joy. Explore events we organized..
        </p>
      </div>

      {/* YOUTUBE VIDEO SECTION */}
      <div className="md:w-[60vw] w-full mx-auto px-4 mb-20 mt-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          State Ranking TT Tournament at PTTCE Mangaluru Academy
        </h2>

        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/Oa4iJmhgIDg`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      

      {eventRows.map((row, index) => (
  <MediaRow
    key={index}
    item1={row.item1}
    item2={row.item2}
  />
))}


      {/* CTA SECTION */}
      <div className="text-center px-4 md:px-16 py-16 max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Host Your Next Event With Us
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Whether you’re planning a school sports day, a multi-sport competition, or a large-scale event in a
          stadium, our experienced team will manage everything from planning to execution. Reach out to us to
          make your next sports event impactful, organized, and truly unforgettable.
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
          © 2025 Padukone Centre for Sports. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

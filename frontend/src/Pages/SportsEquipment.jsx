import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Slider from "react-slick";
import {
  FaTableTennis,
  FaBasketballBall,
  FaVolleyballBall,
  FaChild,
  FaDumbbell,
  FaCubes,
  FaThLarge,
  FaSwimmer,
  FaRunning,
  FaLightbulb,
  FaGripLines,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import {
  MdSportsHandball,
  MdSportsTennis,
  MdOutlineSportsGymnastics,
  MdOutlineSportsEsports,
  MdOutlineSports,
  MdOutlineFitnessCenter,
} from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";






import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tableTennisImg from "../assets/eqip0.png";
import racketsBallsImg from "../assets/equip1.png";
import ttFlooringImg from "../assets/equip2.png";
import ttRobotsImg from "../assets/equip3.png";
import ttTrainingSystemImg from "../assets/equip4.png";
import ttAccessoriesImg from "../assets/equip5.png";

import basketballImg from "../assets/equip8.png";
import basketballBoardImg from "../assets/equip9.png";

import badmintonImg from "../assets/equip10.png";
import polesNetsImg from "../assets/equip11.png";
import goalPostsImg from "../assets/equip12.png";

import pickleballImg from "../assets/equip13.png";

import gymnasticsImg from "../assets/equip14.png";
import kidsGymImg from "../assets/equip15.png";
import matsImg from "../assets/equip16.png";
import trainingEquipImg from "../assets/equip17.png";

import poolTableImg from "../assets/equip61.png";
import footballImg from "../assets/equip62.png";
import funBoardsImg from "../assets/equip71.png";
import stringHockeyImg from "../assets/equip72.png";

import miniTTImg from "../assets/equip73.png";
import yogaMatsImg from "../assets/equip18.png";
import carromImg from "../assets/equip63.png";


/* ---------- Custom Slider Arrows ---------- */
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 ${
      direction === "prev" ? "left-6" : "right-6"
    } bg-white shadow-lg text-blue-900 rounded-full p-4
       hover:bg-blue-900 hover:text-white transition-all`}
  >
    {direction === "prev" ? <FaChevronLeft size={22} /> : <FaChevronRight size={22} />}
  </button>
);


const equipmentCategories = [
  { name: "Table Tennis", icon: <FaTableTennis /> },
  { name: "Rackets & Balls", icon: <FaTableTennis /> },
  { name: "TT Flooring", icon: <FaGripLines /> },
  { name: "Robot Trainers", icon: <MdOutlineSportsEsports /> },
  { name: "TT Training Systems", icon: <MdOutlineSports /> },
  { name: "TT Accessories", icon: <FaCubes /> },

  { name: "Basketball", icon: <FaBasketballBall /> },
  { name: "Basketball Boards", icon: <FaThLarge /> },

  { name: "Badminton", icon: <MdSportsHandball /> },
  { name: "Poles & Nets", icon: <FaVolleyballBall /> },
  { name: "Goal Posts", icon: <FaRunning /> },

  { name: "Pickleball", icon: <MdSportsTennis /> },

  { name: "Gymnastics", icon: <MdOutlineSportsGymnastics /> },
  { name: "Kids Gym", icon: <FaChild /> },
  { name: "Mats", icon: <GiGymBag /> },
  { name: "Training Equipment", icon: <GiRunningShoe /> },

  { name: "Pool Table", icon: <FaGamepad /> },
  { name: "Football", icon: <MdOutlineSports /> },
  { name: "Fun Boards", icon: <FaThLarge /> },
  { name: "String Hockey", icon: <FaGripLines /> },

  { name: "Mini 4-in-1 TT Table", icon: <FaTableTennis /> },
  { name: "Yoga Mats", icon: <GiMeditation /> },
  { name: "Carrom Boards", icon: <FaCubes /> },
];


const equipmentSlides = [
  {
    title: "Table Tennis Equipment",
    image: tableTennisImg,
    description:
      "Professional-grade table tennis tables, nets, and match-ready setups suitable for training centers, schools, and competitive play.",
  },
  {
    title: "Rackets & Balls",
    image: racketsBallsImg,
    description:
      "Wide range of rackets and balls designed for beginners to advanced players, ensuring control, durability, and consistency.",
  },
  {
    title: "Table Tennis Flooring",
    image: ttFlooringImg,
    description:
      "High-quality anti-slip flooring systems that enhance footwork, reduce injury risk, and support intensive training.",
  },
  {
    title: "Robot Training Machines",
    image: ttRobotsImg,
    description:
      "Advanced robot trainers with programmable drills to improve reaction time, spin control, and match readiness.",
  },
  {
    title: "TT Training Systems",
    image: ttTrainingSystemImg,
    description:
      "Structured training aids and multi-ball systems designed for systematic skill development.",
  },
  {
    title: "TT Accessories",
    image: ttAccessoriesImg,
    description:
      "Essential accessories including nets, barriers, scoreboards, bat covers, and maintenance tools.",
  },
  {
    title: "Basketball Equipment",
    image: basketballImg,
    description:
      "Indoor and outdoor basketballs, training equipment, and court essentials for schools and academies.",
  },
  {
    title: "Basketball Backboards",
    image: basketballBoardImg,
    description:
      "Durable backboards, rings, and mounting systems for recreational and professional courts.",
  },
  {
    title: "Badminton Equipment",
    image: badmintonImg,
    description:
      "Badminton rackets, shuttlecocks, and court equipment suitable for training and competition.",
  },
  {
    title: "Poles & Nets",
    image: polesNetsImg,
    description:
      "Multi-sport poles and net systems compatible with badminton, volleyball, and pickleball courts.",
  },
  {
    title: "Goal Posts",
    image: goalPostsImg,
    description:
      "Strong and weather-resistant goal posts suitable for schools and training grounds.",
  },
  {
    title: "Pickleball Equipment",
    image: pickleballImg,
    description:
      "Pickleball paddles, nets, and accessories for recreational and competitive use.",
  },
  {
    title: "Gymnastics Equipment",
    image: gymnasticsImg,
    description:
      "Gymnastics apparatus supporting flexibility, balance, and core strength training.",
  },
  {
    title: "Kids Gym Equipment",
    image: kidsGymImg,
    description:
      "Safe and engaging gym equipment designed for early physical development and coordination.",
  },
  {
    title: "Mats",
    image: matsImg,
    description:
      "Shock-absorbing mats suitable for gymnastics, martial arts, yoga, and general training.",
  },
  {
    title: "Training Equipment",
    image: trainingEquipImg,
    description:
      "Strength, agility, and conditioning tools including cones, ladders, and resistance equipment.",
  },
  {
    title: "Pool Table",
    image: poolTableImg,
    description:
      "Professional pool tables and accessories for recreation centers and clubs.",
  },
  {
    title: "Football Equipment",
    image: footballImg,
    description:
      "Football training and match equipment including balls, markers, and goal accessories.",
  },
  {
    title: "Fun Boards",
    image: funBoardsImg,
    description:
      "Interactive balance and coordination boards designed for fun fitness training.",
  },
  {
    title: "String Hockey",
    image: stringHockeyImg,
    description:
      "Compact and engaging hockey systems ideal for indoor recreational play.",
  },
  {
    title: "Mini 4-in-1 TT Table",
    image: miniTTImg,
    description:
      "Multi-game table combining table tennis and other recreational games for versatile use.",
  },
  {
    title: "Yoga Mats",
    image: yogaMatsImg,
    description:
      "Comfortable and durable yoga mats suitable for training, stretching, and recovery.",
  },
  {
    title: "Carrom Boards",
    image: carromImg,
    description:
      "High-quality carrom boards designed for smooth play and long-lasting performance.",
  },
];


export default function SportsEquipment() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    
    beforeChange: (_, next) => setActiveIndex(next),
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,

 
   
  };
  

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Fonts */}
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

      {/* Heading + Intro */}
      <div className="text-center px-4 md:px-16 py-12 md:py-8 max-w-6xl mx-auto mt-9 md:mt-0">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-6"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Sports Equipment
        </h1>

        <p
  className="text-lg md:text-xl text-gray-700  leading-relaxed text-justify"
  style={{ fontFamily: "Lora, serif" }}
>
  Padukone Centre for Sports (PCS) partners with Major sporting companies like 
  <strong> STAG Global</strong> to supply high-quality sports equipment to schools,
  academies, clubs, institutions etc. This partnership ensures access to
  professional-grade equipment that meets international standards for training,
  competition, and durability, supporting players at every stage of development —
  from foundational training tools to advanced performance equipment. For detailed
  specifications and customized solutions, our team can share a complete sports
  equipment brochure upon request.
</p>

      </div>

      {/* Equipment Icon Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-16 px-4">
        {equipmentCategories.map((item, index) => (
          <button
            key={item.name}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${
              activeIndex === index
                ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            }`}
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>

     {/* Slider */}
<div className="w-full mb-24 overflow-hidden ">
  <Slider ref={sliderRef} {...settings}>
    {equipmentSlides.map((slide, index) => (
      <div key={index} className="px-4 md:px-0">
        <div className="bg-white rounded-2xl  overflow-hidden flex flex-col md:flex-row h-[660px] md:h-[530px]  mx-auto  max-w-7xl border border-blue-900">
          
          {/* Image */}
          <div className="w-full md:w-2.5/4 h-86 sm:h-1/2 md:h-auto">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h3
              className="text-2xl sm:text-3xl font-bold text-blue-900 uppercase mb-3 md:mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {slide.title}
            </h3>

            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "Lora, serif" }}
            >
              {slide.description}
            </p>
          </div>

        </div>
      </div>
    ))}
  </Slider>
</div>



      {/* CTA */}
      <div className="px-4 md:px-16 pb-12 pt-0 md:pt-4 mb-6  max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 uppercase tracking-wide"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Need Sports Equipment Details?
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-5xl mx-auto text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Whether you’re setting up or upgrading a sports facility, or looking to purchase high-quality equipment for personal use, our expert team is here to help. Contact us to receive our complete sports equipment brochure along with tailored guidance for your needs.
        </p>

        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-900 text-white px-12 py-4 rounded text-lg md:text-xl font-semibold hover:bg-blue-800 transition-colors shadow-lg uppercase tracking-wider"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Contact Us
          </button>

          <a
            href="tel:+919481675900"
            className="px-5 py-4 rounded text-lg md:text-xl font-semibold uppercase tracking-wider
                       bg-white text-blue-900 border-2 border-blue-900 text-center
                       md:pointer-events-none md:cursor-not-allowed hover:bg-blue-50 transition"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            📞 +91 9481675900
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-900 py-6 text-white text-center">
        © 2025 Padukone Table Tennis Center for Excellence. All rights reserved.
      </footer>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Slider from "react-slick";
import {
  FaTableTennis,
  FaBasketballBall,
  FaVolleyballBall,
  FaChild,
  FaCubes,
  FaThLarge,
  FaRunning,
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
} from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { Helmet } from "react-helmet-async";






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
  { name: "Foosball", icon: <MdOutlineSports /> },
  { name: "Fun Boards", icon: <FaThLarge /> },
  { name: "String Hockey", icon: <FaGripLines /> },

  { name: "Super Mini Tables", icon: <FaTableTennis /> },
  { name: "Yoga Mats", icon: <GiMeditation /> },
];


const equipmentSlides = [
  {
    title: "Table Tennis Equipment",
    image: tableTennisImg,
    description:
      "Our range of indoor table tennis tables is designed for consistent bounce, long-lasting durability, and professional-level play. From daily training environments to elite showcourts, we offer premium models including the Roma 24, Gold Showcourt, Automatic 2.0, Americas 16, Dark Editions, Flex, and Stealth TT Tables. Ideal for academies, institutions, clubs, and serious home players seeking reliable, tournament-ready performance.",
  },
  {
    title: "Rackets & Balls",
    image: racketsBallsImg,
    description:
      "Our table tennis racquet customization service is designed to deliver optimal control, comfort, and performance for players at every level. From beginners to competitive athletes, we offer expert guidance on blade and rubber selection, professional pasting using ITTF-approved glue, and precise rubber cutting for a clean, balanced finish. We also supply high-quality training and match balls that ensure consistent bounce and durability. Ideal for academies, institutions, clubs, and players seeking reliable, match-ready equipment.",
  },
  {
    title: "Table Tennis Flooring",
    image: ttFlooringImg,
    description:
      "Our table tennis flooring is designed to support high-intensity movement, providing excellent stability, safety, and playing comfort. Built to withstand heavy foot traffic and repeated impact, it offers advanced shock absorption to help reduce injury risk. Featuring anti-skid performance, abrasion resistance, sound insulation, and easy maintenance, our flooring ensures consistent play in demanding environments. The Flex 4500 Table Tennis Flooring is ideal for academies, clubs, and professional training facilities.",
  },
  {
    title: "Robot Training Machines",
    image: ttRobotsImg,
    description:
      "Our table tennis robots are designed to enhance training efficiency, consistency, and skill development for players of all levels. From beginners to competitive athletes, we offer advanced models including the S27 TT Robot, 989G TT Robot, 989D TT Robot, and B3 TT Robot. Ideal for academies, clubs, and serious home players, these robots provide precise ball placement, adjustable spin, and speed control to simulate real-match conditions and accelerate improvement.",
  },
  {
    title: "TT Training Systems",
    image: ttTrainingSystemImg,
    description:
      "Our Interactive Table Tennis Training Systems are designed to enhance precision, reaction time, and footwork through advanced, AI-powered technology. The FastPong grid of 8 illuminated squares provides instant visual feedback on the table surface, helping players improve accuracy and decision-making. With motion sensors, audio feedback, and app-based tracking, the system monitors progress, creates personalized training routines, and offers real-time performance insights.",
  },
  {
    title: "TT Accessories",
    image: ttAccessoriesImg,
    description:
      "Our table tennis nets, posts, and accessories provide everything needed for professional and recreational play. We offer high-quality options including Snap-On TT Nets and Posts, Expert TT Nets and Posts, Expert Cotton Nets, Metal Nets, Referee Chairs, Umpire Tables, Towel Stands, Ball Trolleys, Table Covers, Pyramid Surrounds, Scoreboards, Racket Cases, Ball Pickers, Web X Clues, Shoes, Bags, and Socks. Designed for durability, convenience, and tournament-ready performance.",
  },
  {
    title: "Basketball Equipment",
    image: basketballImg,
    description:
      "Our basketball equipment range is designed for training, recreation, and competitive play. We offer portable height-adjustable basketball poles, portable poles, fixed heavy-duty poles, and height-adjustable systems, along with high-quality basketballs for indoor and outdoor use. Ideal for schools, academies, clubs, and home courts, our equipment delivers durability, stability, and reliable performance.",
  },
  {
    title: "Basketball Backboards and Accessories",
    image: basketballBoardImg,
    description:
      "Our basketball backboards and accessories are built for dependable indoor and outdoor play. The range includes transparent, wall-mounted, height-adjustable, and weatherproof backboards, along with heavy-duty galvanized basketball rings featuring multiple spring options and nets. Practical additions such as ball cages and ball trolleys make this setup ideal for schools, academies, clubs, and professional courts.",
  },
  {
    title: "Badminton Equipment",
    image: badmintonImg,
    description:
      "Our badminton equipment range supports training, recreation, and competitive play. We offer portable poles, portable pole-and-net sets with carry bags, nylon and cotton nets, along with quality rackets and shuttlecocks. Complemented by durable badminton flooring, this range is ideal for schools, academies, clubs, and indoor sports facilities seeking reliable, complete badminton setups.",
  },
  {
    title: "Poles & Nets",
    image: polesNetsImg,
    description:
      "Our poles and nets range supports multiple sports and flexible court setups. We offer portable and fixed lawn tennis poles, along with volleyball poles and nets designed for stability and long-lasting performance. Ideal for schools, academies, clubs, and recreational facilities, these systems provide reliable installation for both training and competitive play.",
  },
  {
    title: "Goal Posts",
    image: goalPostsImg,
    description:
      "Our goal posts and nets are designed for training and competitive play across multiple sports. The range includes portable and fixed football goal posts, handball goal posts, and durable nylon and hexagonal nets built for long-lasting performance. Ideal for schools, academies, clubs, and sports grounds, these systems offer strength, stability, and reliable playability.",
  },
  {
    title: "Pickleball Equipment",
    image: pickleballImg,
    description:
      "Our pickleball equipment range is designed for both recreational and competitive play. We offer club net sets, global net sets, and portable backyard net sets, along with premium Carbon X and Blade X pickleball paddles. Complete with indoor and outdoor pickleball balls, this range is ideal for clubs, schools, academies, and home players seeking reliable, match-ready pickleball setups.",
  },
  {
    title: "Gymnastics Equipment",
    image: gymnasticsImg,
    description:
      "Our gymnastics equipment range is designed to support safe training and competitive performance at all levels. It includes vaulting tables and horses, elite competition apparatus such as parallel bars with fiberglass rails, balancing beams, horizontal and asymmetric bars, and Roman rings. Complemented by trampolines, springboards, and vaulting boxes, this range is ideal for schools, academies, and professional gymnastics training facilities.",
  },
  {
    title: "Kids Gym Equipment",
    image: kidsGymImg,
    description:
      "Our kids gym equipment is designed for safe, fun, and engaging physical development. It includes crash landing mats, colorful gymnastic benches, cantilever and swing bars, trapezoid sets, multi blocks, incline mats, foam steps, donuts, fun cubes, and multi-colour mats, along with swing bar mats. Ideal for schools, activity zones, and early learning centers, it promotes balance, coordination, strength, and confidence in children.",
  },
  {
    title: "Mats",
    image: matsImg,
    description:
      "Our sports mats are designed for safety, durability, and performance across multiple sports. The range includes pole vault and high jump landing mats, judo mats with covers, wrestling mats with covers, kabaddi mats, kho-kho mats, dribble mats, and multipurpose mats. Ideal for schools, academies, and training centers, these mats provide protection, comfort, and reliable performance for athletes of all levels.",
  },
  {
    title: "Training & Athletic Equipment",
    image: trainingEquipImg,
    description:
      "Our training and athletic equipment is designed for performance, durability, and safety. The range includes folding hurdles, high jump stands, relay batons, starting blocks, javelins, shot puts, rubber discuses, line marking machines, ladders, cones, hoops, and markers. Ideal for schools, academies, and training facilities, these tools support speed, agility, coordination, and overall athletic development.",
  },
  {
    title: "Pool Table",
    image: poolTableImg,
    description:
      "Our pool tables combine style, versatility, and professional playability. We offer premium models including the Pool Table Model X (with cues, balls, and triangle included), the Series 1 multi-purpose table (TT table, dining table, and pool table in one), and the Pool Table Flex. Designed for clubs, recreation centers, and serious home players, these tables deliver consistent play, durability, and a sleek, multi-functional setup for both practice and leisure.",
  },
  {
    title: "Foosball",
    image: footballImg,
    description:
      "Our foosball tables are designed for fun, durability, and professional-level play in both indoor and outdoor settings. Featuring stainless steel rods, stable frames, and high-quality playing surfaces, they ensure smooth gameplay and long-lasting performance. Suitable for schools, clubs, recreation centers, and home use, our foosball tables combine robust construction, precise control, and competitive design, making them ideal for casual play, training, or tournaments.",
  },
  {
    title: "Fun Boards",
    image: funBoardsImg,
    description:
      "Our Fun Boards are designed to make learning and play more engaging for all age groups. Compact and easy to use, they include 2-in-1 Ludo & Chess Boards and 2-in-1 Ludo & Ladder Boards, offering multiple games in a single setup. Ideal for schools, activity zones, recreation areas, and homes, these boards encourage fun, strategy, and social interaction in a simple, space-saving format.",
  },
  {
    title: "String Hockey",
    image: stringHockeyImg,
    description:
      "Our String Hockey sets are designed for fun on the go, combining portability, quality, and stylish design. Available in String Hockey and Wooden String Hockey variants, they are easy to set up and perfect for quick recreational play. Ideal for homes, schools, and activity zones, these games encourage coordination, friendly competition, and engaging indoor entertainment.",
  },
  {
    title: "Super Mini Tables",
    image: miniTTImg,
    description:
      "Our Super Mini Tables are designed to bring safe, engaging play to kids of all ages. Compact, portable, and easy to set up, they are perfect for fun on the go while prioritizing security and child safety. Our range includes the Super Mini 3-in-1 Table (table tennis, chess, and ludo), Super Mini Fun TT Table, and Super Mini Bubbles TT Table etc. Ideal for homes, schools, activity zones, and play areas, these tables encourage active play, coordination, and enjoyment.",
  },
  {
    title: "Yoga Mats",
    image: yogaMatsImg,
    description:
      "Our yoga mats combine comfort, durability, and stability for effective practice at all levels. We offer Mantra Plain Mats and Mantra Asana Mats, designed for stretching, meditation, and yoga training. Ideal for homes, studios, schools, and fitness centers, these mats provide non-slip surfaces and long-lasting quality for a safe and focused practice.",
  },
 
];


export default function SportsEquipment() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderSectionRef = useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    
    beforeChange: (_, next) => setActiveIndex(next),
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,

 
   
  };
  

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <Helmet>
  <title>Sports Equipment Supply & Installation | Padukone Centre for Sports</title>
  <meta
    name="description"
    content="Sports equipment supply and installation services by Padukone Centre for Sports, led by Ashwin Kumar Padukone, for academies and individuals."
  />
</Helmet>


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
      <div className="text-center px-4 md:px-16 py-12 md:py-8 max-w-7xl mx-auto mt-9 md:mt-0">
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
  equipment brochure upon request. Explore our equipments..
</p>

      </div>

      {/* Equipment Icon Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 mt-4 md:mt-12 px-4">
        {equipmentCategories.map((item, index) => (
          <button
            key={item.name}
            onClick={() => {
              // Scroll to the slider smoothly
              const navbarHeight = 85; // adjust if your navbar height is different
    const sliderTop = sliderSectionRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sliderTop - navbarHeight,
      behavior: "smooth",
    });
              sliderRef.current.slickGoTo(index)}}
            className={`flex items-center gap-2 md:gap-3 px-4 py-1 md:px-6 md:py-3 rounded-full border transition-all ${
              activeIndex === index
                ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                : "border-blue-900 text-blue-900 md:hover:bg-blue-900 md:hover:text-white"
            }`}
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>

     {/* Slider */}
<div ref={sliderSectionRef} className="w-full mb-24 overflow-hidden ">
  <Slider ref={sliderRef} {...settings}>
    {equipmentSlides.map((slide, index) => (
      <div key={index} className="px-4 md:px-0">
        <div className="bg-white rounded-2xl  overflow-hidden flex flex-col md:flex-row h-[670px] md:h-[530px]  mx-auto  max-w-7xl border border-blue-900">
          
          {/* Image */}
          <div className="w-full md:w-2.4/4 h-86 md:h-auto">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-start md:mt-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-blue-900 uppercase mb-3 md:mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {slide.title}
            </h3>

            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
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
      <div className="px-4 md:px-16 pb-12 pt-0 md:pt-4 mb-6  max-w-7xl mx-auto text-center">
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
          <br /><br />
We also welcome sports equipment brands, manufacturers, and suppliers interested
in partnering with us for distribution, installation, and collaborative projects.
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
        © 2025 Padukone Centre for Sports. All rights reserved.
      </footer>
    </div>
  );
}

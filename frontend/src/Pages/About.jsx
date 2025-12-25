import React from "react";
import Navbar from "../Components/Navbar.jsx";
import { Helmet } from "react-helmet-async";

// Placeholder images
import about1 from "../assets/gal10.jpg";
import about2 from "../assets/sportsgen.jpg";
import founderImg1 from "../assets/founder2.jpeg"
import founderImg2 from "../assets/founder.jpeg"
import assistantCoachImg1 from "../assets/assistant3.jpg"
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import face1 from "../assets/face1.jpeg"
import face2 from "../assets/face2.jpeg"
import face3 from "../assets/face3.jpeg"
import face4 from "../assets/face4.jpeg"
import face5 from "../assets/face5.jpeg"
import face6 from "../assets/face6.jpeg"
import face7 from "../assets/face7.jpeg"
import face8 from "../assets/face8.jpeg"
import face9 from "../assets/face9.jpeg"
import face11 from "../assets/face11.jpeg"
import face13 from "../assets/face13.jpeg"
import face14 from "../assets/face14.jpeg"
import face15 from "../assets/face15.jpeg"
import face16 from "../assets/face16.jpeg"
import face17 from "../assets/face17.jpg"
import face18 from "../assets/face18.jpeg"
import face19 from "../assets/face19.jpeg"
import face20 from "../assets/face20.jpeg"
import face21 from "../assets/face21.jpeg"
import face22 from "../assets/face22.jpeg"
import face23 from "../assets/face23.jpeg"
import face24 from "../assets/face24.jpeg"
import face25 from "../assets/face25.jpeg"


const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 z-20 ${
      direction === "prev" ? "-left-5" : "-right-5"
    } bg-white/80 hover:bg-white text-blue-900 rounded-3xl p-4 transition-all opacity-50 hover:opacity-100`}
  >
    {direction === "prev" ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
  </button>
);



const achievers = [
{
name: "Aditya S M",
title: "Gold Medalist, Commonwealth Games 2022",
image: face1,
},
{
name: "Elson Noronha",
title: "Olympian, Tokyo Olympics 2020",
image: face2,
},
{
name: "Shashank Bhat",
title: "Olympian, Tokyo Olympics 2020",
image: face3,
},
{
name: "Vinay Pranav",
title: "Olympian, Tokyo Olympics 2020",
image: face9,
},
{
name: "P Parindran",
title: "World Rank #4, Women’s Doubles 2022",
image: face6,
},
{
name: "Ishani Harish",
title: "Olympian, Tokyo Olympics 2020",
image: face7,},
{
name: "Abhijith Pai",
title: "Olympian, Tokyo Olympics 2020",
image: face4,
},
{
name: "Coral Lobo",
title: "World Rank #4, Women’s Doubles 2022",
image: face5,
},
{
name: "Sathwika",
title: "Olympian, Tokyo Olympics 2020",
image: face8,
},


{
name: "Ananya Prabhu",
title: "World Rank #4, Women’s Doubles 2022",
image: face11,
},
{
name: "Sanman Malpe",
title: "Olympian, Tokyo Olympics 2020",
image: face13,
},
{
name: "Prashasthi Shetty",
title: "World Rank #4, Women’s Doubles 2022",
image: face14,
},
{
name: "Poornima Raj",
title: "World Rank #4, Women’s Doubles 2022",
image: face15,
},
{
name: "Guruprasad",
title: "Olympian, Tokyo Olympics 2020",
image: face16,
},
{
name: "Vian Mascarenhas",
title: "Olympian, Tokyo Olympics 2020",
image: face17,
},
{
name: "Diya",
title: "World Rank #4, Women’s Doubles 2022",
image: face18,
},
{
name: "Aarna Sadotra",
title: "World Rank #4, Women’s Doubles 2022",
image: face19,
},
{
name: "Latha Ashok",
title: "Olympian, Tokyo Olympics 2020",
image: face20,
},
{
name: "Clara",
title: "Olympian, Tokyo Olympics 2020",
image: face21,
},
{
name: "Thara",
title: "World Rank #4, Women’s Doubles 2022",
image: face22,
},
{
name: "Riona Mendonca",
title: "World Rank #4, Women’s Doubles 2022",
image: face23,
},
{
name: "Velonia Mascarenhas",
title: "World Rank #4, Women’s Doubles 2022",
image: face24,
},
{
name: "Harsha Varthaan ",
title: "World Rank #4, Women’s Doubles 2022",
image: face25,
},
];


const sliderSettings = {
dots: false,
infinite: true,
speed: 600,
slidesToShow: 4,
slidesToScroll: 2,
autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
arrows: true,
prevArrow: <CustomArrow direction="prev" />,
nextArrow: <CustomArrow direction="next" />,
responsive: [
{
breakpoint: 1280,
settings: {
slidesToShow: 3,
},
},
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
},
},
{
breakpoint: 640,
settings: {
slidesToShow: 1,
centerMode: true,
centerPadding: "40px", // shows left & right peek on mobile
arrows: false, // optional: cleaner on phone
},
}]}

export default function AboutPCS() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200">
    <Helmet>
  <title>About Us | Padukone Centre for Sports</title>
  <meta
    name="description"
    content="Learn about Padukone Centre for Sports, founded and led by Ashwin Kumar Padukone, and our mission to develop athletes through professional coaching and sports programs."
  />
</Helmet>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page Header */}
      <div className="mt-24 text-center px-4 md:px-16 py-10 max-w-5xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide mb-8"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          About Padukone Centre for Sports

        </h1>
      </div>

      {/* Full-width Intro Paragraphs */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-8">
        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Padukone Centre for Sports (PCS) is a passionate sports development organization dedicated to transforming the
          grassroots sporting culture. Founded by Coach Ashwin Kumar Padukone, PCS began with a simple goal:
          to make high-quality sports training accessible to every child.
        </p>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          The journey started long before the company was formally established. Coach Ashwin spent years coaching
          children across Mangalore and Manipal — in school corridors, rented halls, and even at his own home. Everywhere
          he went, he found talent waiting to be nurtured, children eager to learn, and families who only needed the right
          opportunity to help their kids grow in sport.
        </p>
      </div>

      {/* Row 1 — Paragraph → Image */}
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 px-6 md:px-12">
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
              style={{ fontFamily: "Lora, serif" }}
            >
              In 2022, PCS took shape professionally with the launch of the first Padukone Table Tennis Centre for
              Excellence at Father Muller Indoor Stadium. With international-standard lighting, and
              premium Stag Black America tables, the centre set a new benchmark for table tennis infrastructure in the
              region. What began as a single academy soon expanded into Suratkal and then into leading schools across
              Mangalore through structured after-school sports programs.
              <br /><br />
              From the start, PCS has aimed to build confidence, discipline, fitness, and strong fundamentals in every
              child. Sports, for us, go beyond medals — they cultivate resilience, teamwork, and a positive mindset that
              shapes a child’s life both on and off the court.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={about1} alt="Table tennis academy training in Udupi Karnataka" className="w-full h-[400px] object-cover rounded-xl shadow-xl" />
          </div>
        </div>
      </div>

      {/* Row 2 — Image → Paragraph */}
      <div className="w-full py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 px-6 md:px-12">
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
              style={{ fontFamily: "Lora, serif" }}
            >
              As PCS grew, it introduced SportsGen — an early physical development program for children aged 4 to 8.
              Through fun, movement-based activities, young learners develop balance, coordination, agility, and a love
              for staying active. Today, SportsGen runs across multiple schools, helping build physical literacy from the
              earliest age groups.
              <br /><br />
              PCS has now evolved into a developing multi-sport ecosystem with certified coaches, improved facilities, and
              growing partnerships. The organization continues to expand into more schools, more locations, more
              sports — all while providing competitive exposure through events and training programs.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={about2} alt="Table tennis academy training in Udupi Karnataka" className="w-full h-[400px] object-cover rounded-xl shadow-xl" />
          </div>
        </div>
      </div>

      {/* Remaining text block */}
<div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
  <p
    className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
    style={{ fontFamily: "Lora, serif" }}
  >
    PCS remains committed to giving every child the chance to play, grow, and dream big. From humble beginnings in
    borrowed halls to modern academies, the organization has guided students from their first steps in sport to
    competitive arenas across district, state, and national levels. Built on passion, trust, and a belief in the
    transformative power of sport, PCS strives to nurture stronger athletes, individuals, and a brighter sporting
    future for the communities it serves.
  </p>
</div>
{/* About Founder Section */}
<div className="w-full pb-16 md:py-16">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center">
      Our Founder & Head Coach
    </h2>

    {/* Row 1 — Personal Background & Certifications */}
    <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
      {/* Image */}
      <div className="md:w-1/2">
        <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg">
          <img 
            src={founderImg1} 
            alt="Ashwin Kumar Padukone and Table tennis academy training in Udupi Karnataka"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Text */}
      <div className="md:w-1/2">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
          Ashwin Kumar Padukone is an ITTF Level 3 Certified Coach with over 15 years of professional playing 
          and coaching experience. He is one of only four ITTF Level 1 Course Conductors and Coach Trainers 
          in India, bringing world-class expertise to the Padukone Table Tennis Centre for Excellence (PTTCE). 
          Ashwin holds a Bachelor in Automobile Engineering and a Bachelor in Physical Education, blending 
          academic knowledge with high-level sports coaching. Early in his career, he trained under Mr. Richard 
          McAfee, Head Coach of USA and senior ITTF trainer, gaining insights into elite-level coaching 
          methodologies.
        </p>
      </div>
    </div>

    {/* Row 2 — Coaching Achievements & Vision */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
      {/* Image */}
      <div className="md:w-1/2">
        <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg">
          <img 
            src={founderImg2} 
            alt="Table tennis academy training in Udupi Karnataka" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Text */}
      <div className="md:w-1/2">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
          Ashwin has coached numerous State and National level players, conducted high-performance camps in 
          cities like Indore and Noida, and contributed extensively to grassroots development of table tennis 
          in India. Currently, he serves as a nominated member of the Development and Education Committee of the 
          Table Tennis Federation of India and has been featured in ITTF articles highlighting his coaching impact. 
          Through his vision at PCS, Ashwin emphasizes not only technical excellence but also discipline, resilience, 
          teamwork, and confidence in young athletes. His dedication ensures every child, regardless of background, 
          has the opportunity to grow, compete, and achieve their sporting potential while fostering a love for 
          the game and lifelong life skills.
        </p>
      </div>
    </div>

  </div>
</div>
{/* Assistant Coach Section */}
<div className="w-full pb-16 md:py-16">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center">
      Our Assistant Coach
    </h2>

    {/* Single Row — Image → Paragraph */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-[80%] h-96 overflow-hidden rounded-xl shadow-lg">
          <img 
            src={assistantCoachImg1} 
            alt="Table tennis academy training in Udupi Karnataka"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Text */}
      <div className="md:w-1/2">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
          Swaroop G is an internationally certified table tennis coach at the Padukone Table Tennis Centre 
          for Excellence, training state, national, and para-athlete players. A distinguished player himself, 
          he began his journey in Class 6, won multiple state and university gold medals, and represented 
          Mangalore University at the All India South Zone Nationals.
          <br /><br />
          During his MBA at NITK Surathkal, he won the gold medal at the National Table Tennis Championship 
          held at NIT Silchar, receiving the trophy from the Hon’ble Chief Minister of Assam. Swaroop brings 
          his experience, passion, and international coaching knowledge to PCS, helping young athletes develop 
          their skills and achieve excellence on and off the table.
        </p>
      </div>
    </div>

  </div>
</div>
{/*slider*/}
<section className="w-full pb-20 pt-18 md:pt-10 ">
<div className="w-full md:max-w-7xl md:mx-auto md:px-6">
<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center">
      Faces of PCS
    </h2>


<div className="relative">
<Slider {...sliderSettings}>
{achievers.map((item, i) => (
<div key={i} className="px-4">
<div className="relative bg-blue-800/60 rounded-2xl overflow-hidden h-[420px]">
<img
src={item.image}
alt={item.name}
className="absolute inset-0 w-full h-full object-cover"
/>


{/* Gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


{/* Text overlay */}
<div className="absolute bottom-0 w-full p-6 text-center">
<h3 className="text-xl font-semibold mb-2 text-white">
{item.name}
</h3>

</div>
</div>
</div>
))}
</Slider>
</div>
</div>
</section>


{/* Explore Programs Section */}
<div className="w-full  pb-20 pt-18">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
      Unlock Your Potential with our Programs
    </h2>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-700 mb-10 text-justify">
      Discover a range of programs tailored for every age and skill level — from early development for young children 
      to competitive coaching for state, national, and para-athletes. Build skills, confidence, and a lifelong love for sport!
    </p>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="/programs" 
        className="inline-block px-8 py-4 bg-blue-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
      >
        Explore Programs
      </a>
      
    </div>
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

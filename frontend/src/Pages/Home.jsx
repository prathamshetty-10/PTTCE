import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar.jsx";
import { AiFillStar } from "react-icons/ai";
import vdo from "../assets/transformvdo2.mp4";

// Individual imports for achievement images
import ach2 from "../assets/ach2.jpg";
import ach3 from "../assets/ach3.jpg";
import ach4 from "../assets/ach4.jpg";
import ach5 from "../assets/ach5.jpg";
import ach6 from "../assets/ach6.jpeg";
import ach7 from "../assets/ach7.jpg";
import ach8 from "../assets/ach8.jpg";
import ach9 from "../assets/ach9.jpeg";
import ach10 from "../assets/ach10.jpeg";
import ach11 from "../assets/ach11.jpeg";
import ach12 from "../assets/ach12.jpeg";
import ach13 from "../assets/ach13.jpeg";

import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal8 from "../assets/gal8.jpeg";
import gal9 from "../assets/gal9.jpg";
import gal10 from "../assets/gal10.jpg";
import gal11 from "../assets/gal11.jpg";
import gal12 from "../assets/gal12.jpg";
import gal13 from "../assets/gal13.jpg";
import gal14 from "../assets/sportsgen2.jpg"
import gal15 from "../assets/gal14.jpg"
import gal16 from "../assets/gal15.jpeg"
import gal17 from "../assets/event18.jpeg"
import about from "../assets/homeAbout.jpg"
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
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

// Inside your Home component
const sliderSettings1 = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  centerMode: true,
  
  // 👇 This is the main fix 
  centerPadding: "200px",  // show left & right image partially

  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "23px", // small peek in mobile
      }
    }
  ]
};
const sliderSettings2 = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  centerMode: true,
  
  // 👇 This is the main fix 
  centerPadding: "120px",  // show left & right image partially

  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "23px", // small peek in mobile
      }
    }
  ]
};



export default function Home() {
  const navigate = useNavigate();
  const achievements = [
  { 
    img: ach5, 
    desc: "PTTCE students from Mangalore excelled at the Karnataka Mini Olympics 2025 in Bengaluru. The Dakshina Kannada Boys Team won Silver, and the Boys Doubles pair Cahill & Rishith also secured Silver." 
  },

  { 
    img: ach2, 
    desc: "PTTCE student Rachith B.H. of Ryan International School, Kulai, finished 4th at the CISCE National U-14 Table Tennis Tournament 2025 in Irinjalakuda, reaching the Semi-Finals in his debut national appearance." 
  },

  { 
    img: ach3, 
    desc: "Gahana from Delhi Public School MRPL secured 3rd place in the U-14 Girls Singles at the CBSE Cluster VIII Table Tennis Tournament in Kalaburagi." 
  },

  { 
    img: ach4, 
    desc: "PTTCE’s U-19 Boys team from Little Rock Indian School, Brahmavar won Silver at the CBSE Cluster VIII Tournament in Kalaburagi, qualifying for the CBSE Nationals in Gujarat." 
  },

  { 
    img: ach6, 
    alter: ach13,
    desc: "PTTCE student Thara N represented SBI Karnataka at the SBI All India Inter-Circle Table Tennis Tournament 2025–26 in Mumbai, winning two Silvers (Women’s Team & Doubles) and one Bronze (Mixed Doubles)." 
  },

  { 
    img: ach7, 
    desc: "PTTCE students of St. Theresa School, Bendur delivered strong results at the AICS Inter-School Tournament, securing multiple podium finishes across U-14 and U-17 categories." 
  },

  { 
    img: ach8, 
    desc: "PTTCE students from St. Aloysius Gonzaga School, Mangalore earned 2nd Runner-Up in the U-14 Girls category at the AICS Inter-School Table Tennis Tournament." 
  },

  { 
    img: ach9, 
    desc: "Angelina won the Bronze medal in the Under-11 Girls category at the Hospet State Ranking Tournament." 
  },

  { 
  img: ach10, 
  desc: "The Women’s Team from Father Muller Medical College secured 2nd place at the RGUHS Zonal Level Tournament." 
},

{ 
  img: ach11, 
  desc: "PTTCE students from Delhi Public School, MRPL Mangalore won the Bronze medal in the Under-17 Boys category at the CBSE Cluster TT Tournament." 
},

{ 
  img: ach12, 
  desc: "PTTCE students from Little Rock Indian School, Brahmavar won the Bronze medal in the Under-14 Boys category at the CBSE Cluster TT Tournament." 
}


];


  const gallery = [
     
    { img: gal10, desc:" Head Coach Ashwin Kumar Padukone guiding kids during a TT coaching session."},
    { img: gal8, desc:"A proud moment as our Mangaluru academy hosts the State Ranking TT Tournament."},
    { img: gal2, desc:""},
    { img: gal3, desc:"Indian TT Head Coach Narayanan Ravichandran visits our academy and interacts with young players."},
    
    { img: gal9, desc:"St. Teresa School hosts the inter-school Zonal TT competition organized by PTTCE."},
    { img: gal4, desc:"PTTCE: Milagres English Medium School, Kalyanpura, Karnataka"},
    { img: gal14, desc:"Sportsgen program at Canara Nandagokul Preschool, Mangaluru, Karnataka"},
    { img: gal5, desc:""},
   
    { img: gal6, desc:"PTTCE: Mount Carmel Central School, Mangaluru, Karnataka"},
    
    { img: gal12, desc:"Head Coach Ashwin Kumar Padukone with assistant coaches Shashank Bhat, Abhijith Pai, Elson, Aarna, Vinay, Vian, Aditya, and Nithish."},
    { img: gal7, desc:"PTTCE: Saint Teresa School, Mangaluru, Karnataka"},
    { img: gal15, desc:"SportsGen at Sri Siddhivinayaka Residential School, Kundapura, Udupi"},
    { img: gal11, desc:""},
    { img: gal13, desc:"Head Coach Ashwin Kumar Padukone with assistant coaches Aditya, Swaroop and Sujith. "},
    { img: gal16, desc:"Yoga Day event at Surathkal Center"},
    { img: gal17, desc:"World TT Day event at Surathkal Center"}

  ]

  const reviews = [
    
    {
      name: "Dr. Keshav Prabhu",
      rating: 5,
      review: "PTTCE is excellent academy for learning table tennis sport. Ashwin Sir is the dedicated teacher, coach, guide and trainer. Absolutely fantastic facilities and fitness coaching for students."
    },
    {
      name: "Pratham Shetty",
      rating: 5,
      review: "PTTCE has truly raised the bar. The coaching is top-notch, the facilities are excellent, and the overall training experience is outstanding. Highly recommended for anyone serious about improving their game"
    },
    {
      name: "Varun Prabhu",
      rating: 5,
      review: "A very Good Academy For Aspiring Table tennis players starting from professional level to beginner level. Ashwin Sir Is Just Excellent and his way of teaching kids and Adults Is just amazing."
    },
    {
      name: "Ansh Sureshan",
      rating: 5,
      review: "Looking for a Professional Academy along with The Best All Round Dedicated Coach for ur Ward - Ur at rgt place. Along with His Superb team. They are Fantastic."
    },
    
  ];

  const faqs = [
    {
      question: "What facilities do you offer?",
      answer: "From beginner to elite, our diverse training programs combine advanced facilities, dedicated fitness support, and expert coaching. Visit our Programs section to discover what suits you best."
    },
    {
      question: "How can I enroll?",
      answer: "You can enroll online by visiting our contact page or calling +91 9481675900."
    },
    {
      question: "Are there programs for beginners?",
      answer: "Yes! We offer beginner-friendly programs designed to build foundational skills."
    },
    {
      question: "What are the training timings?",
      answer: "Our training schedules are flexible, with morning, afternoon, and evening slots available."
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col relative bg-gradient-to-r from-blue-100 via-white to-blue-200">
   <Helmet>
  <title>Padukone Centre for Sports | Sports Academy in Mangaluru, Manipal and Surathkal, Karnataka</title>
  <meta
    name="description"
    content="Padukone Centre for Sports, led by Ashwin Kumar Padukone, is a professional table tennis and multi-sports academy serving Mangaluru, Surathkal, Udupi & Manipal."
  />
</Helmet>



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

      <div className="w-full mt-16">
        {/* Hero Section */}
        <div className="w-full relative h-[91vh]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={vdo} type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div> 
          <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 h-full">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Empowering the Future of Sports
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl text-center leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
              World-class coaching, modern infrastructure, and accessible sports education for every child.
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              <button onClick={() => navigate("/programs")} className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Explore Programs
              </button>
              <button onClick={() => navigate("/about")} className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                About Us
              </button>
            </div>
          </div>
        </div>

       

       {/* About Section */}
<div className="w-full mt-[15px] md:mt-[40px] pb-12 pt-10">
  <div className="max-w-7xl mx-auto px-4">

    {/* Centered Heading */}
    <h1
      className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 text-center"
      style={{ fontFamily: "Oswald, sans-serif" }}
    >
      Padukone Centre for Sports
    </h1>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text */}
      <div>
        <p
          className="text-lg md:text-xl text-gray-700 text-justify"
          style={{ fontFamily: "Lora, serif" }}
        >
          Padukone Centre for Sports (PCS) is a sports development organization dedicated to strengthening grassroots sports in Karnataka through a professional and athlete-centric approach. Founded by Coach Ashwin Kumar Padukone, PCS is committed to delivering high-quality training that blends structured coaching methodologies, experienced mentorship, and modern, well-equipped facilities. Since establishing its first Table Tennis Academy in 2022 at Father Muller Indoor Stadium, PCS has steadily expanded its presence to Mangalore, Manipal, and Suratkal. Across all centres, the focus remains on building strong fundamentals, discipline, confidence, and consistency, while nurturing a deep appreciation for sport in an environment that values growth, effort, and long-term athlete development.
        </p>
      </div>

      {/* Right: Image */}
      <div>
        <img
          src={about}
          alt="About Padukone Centre For Sports, Table tennis academy training in Udupi Karnataka"
          className="w-full h-[360px] object-cover rounded-lg shadow-lg"
        />
      </div>

    </div>

    {/* Button Below Grid */}
    <div className="mt-12 flex justify-center">
      <button
        onClick={() => navigate("/about")}
        className="bg-blue-900 text-white px-14 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Know More
      </button>
    </div>

  </div>
</div>


        {/* Achievements Slider */}
<div className="w-full py-16 mt-[10px]">
  <div className="md:max-w-[85vw] mx-auto md:px-2">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2
        className="text-5xl font-bold text-blue-900"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Moments of Excellence
      </h2>
    </div>

    <Slider {...sliderSettings1}>
      {achievements.map((item, index) => (
        <div key={index} className="px-4">

          {/* Card */}
          <div className="w-full h-[78vh] md:h-[80vh] bg-white rounded-2xl  overflow-hidden flex flex-col border border-blue-900">

            {/* Image – desktop & tablet */}
<div className="w-full h-[65%] md:h-[80%] hidden sm:block">
  <img
    src={item.img}
    alt={`Achievement ${index + 1}`}
    className="w-full h-full object-cover"
  />
</div>

{/* Image – phone */}
<div className="w-full h-[65%] block sm:hidden">
  <img
    src={item.alter || item.img}
    alt={`Achievement ${index + 1}`}
    className="w-full h-full object-cover"
  />
</div>


            {/* Text – guaranteed visible */}
            {item.desc && item.desc.trim() !== "" && (
              <div className="flex-1 px-6 py-5 flex items-center justify-center">
                <p
                  className="text-gray-800 text-center text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "Lora, serif", whiteSpace: "pre-line" }}
                >
                  {item.desc}
                </p>
              </div>
            )}

          </div>
        </div>
      ))}
    </Slider>

  </div>
</div>



       

    

        {/* Reviews Section */}
        <div className="w-full py-16 mt-[10px]">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                What People Say About Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-900">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>{review.name}</h3>
                  <div className="flex items-center text-yellow-500 text-lg font-medium mb-4">
                    {[...Array(review.rating)].map((_, i) => <AiFillStar key={i} />)}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg md:text-xl" style={{ fontFamily: 'Lora, serif' }}>{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
         {/* Gallery Slider */}
<div className="w-full py-16 mt-[15px] md:mt-[40px]">
  <div className="md:max-w-[95vw] mx-auto md:px-2">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald' }}>
        Memories in Frames
      </h2>
    </div>

    <Slider {...sliderSettings2}>
      {gallery.map((item, index) => (
        <div key={index} className="px-4"> 
          <div className="relative w-full h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden ">

            {/* Main Image */}
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt="Table tennis academy training in Udupi Karnataka"
            />

            {/* Description (Only if desc is not empty) */}
            {item.desc && item.desc.trim() !== "" && (
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-4">
                <p className="text-white text-center text-lg font-medium">
                  {item.desc}
                </p>
              </div>
            )}

          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>


        {/* FAQ Section */}
        <div className="w-full pt-16 pb-12 mt-[10px]">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                FAQs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-blue-900">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>{faq.question}</h3>
                  <p className="text-gray-600 text-lg md:text-xl" style={{ fontFamily: 'Lora, serif' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Explore Programs Section */}
<div className="w-full  py-20">
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
    </div>
  );
}

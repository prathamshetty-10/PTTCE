import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import { AiFillStar } from "react-icons/ai";
import vdo from "../assets/transformvdo2.mp4";

// Individual imports for achievement images
import bgImg from '../assets/achBG3.jpg';
import ach2 from "../assets/ach2.jpg";
import ach3 from "../assets/ach3.jpg";
import ach4 from "../assets/ach4.jpg";
import ach5 from "../assets/ach5.jpg";
import ach6 from "../assets/ach6.jpg";
import ach7 from "../assets/ach7.jpg";
import ach8 from "../assets/ach8.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";
import gal6 from "../assets/gal6.jpg";
import gal7 from "../assets/gal7.jpg";
import gal8 from "../assets/gal8.jpg";
import gal9 from "../assets/gal9.jpg";
import gal10 from "../assets/gal10.jpg";
import gal11 from "../assets/gal11.jpg";
import gal12 from "../assets/gal12.jpg";
import gal13 from "../assets/gal13.jpg";
import gal14 from "../assets/sportsgen2.jpg"
import gal15 from "../assets/gal14.jpg"
import gal16 from "../assets/gal15.jpeg"
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
const sliderSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1, // shows part of side cards
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "0px",
  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,
};
const sliderSettings2 = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
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
        centerPadding: "20px", // small peek in mobile
      }
    }
  ]
};



export default function Home() {
  const navigate = useNavigate();
  const achievements = [
    
  { 
    img: ach5, 
    desc: "PTTCE students from Mangalore delivered an impressive performance at the Karnataka Mini Olympics 2025 held in Bengaluru. The Dakshina Kannada Boys Team secured Silver, and the Boys Doubles pair of Cahill and Rishith also won Silver. A proud display of teamwork and dedication!" 
  },

  { 
    img: ach2, 
    desc: "PTTCE’s student Rachith B.H. of Ryan International School, Kulai, represented at the CISCE National U-14 Table Tennis Tournament 2025 held at Don Bosco Central School, Irinjalakuda. He finished 4th after a strong run to the Semi-Finals—a remarkable achievement in his very first national appearance!" 
  },

  { 
    img: ach3, 
    desc: "Our student Gahana from Delhi Public School MRPL secured 3rd place in the Under-14 Girls Singles category at the CBSE Cluster VIII Table Tennis Tournament held at SRN Mehta CBSE School, Kalaburagi. A proud moment showcasing her grit and performance!" 
  },

  { 
    img: ach4, 
    desc: "A proud achievement for PTTCE as our U-19 Boys team—Advaith, Jash, Vedanth, and Shreyas from Little Rock Indian School, Brahmavar—won the Silver medal at the CBSE Cluster VIII Tournament in Kalaburagi. They have now qualified for the CBSE Nationals in Gujarat!" 
  },


  { 
    img: ach6, 
    desc: "We are thrilled to share that PTTCE student Thara N represented SBI Karnataka at the SBI All India Inter-Circle Table Tennis Tournament 2025–26 in Mumbai. She returned with two Silver medals (Women’s Team and Women’s Doubles) and one Bronze (Mixed Doubles). An exceptional all-round performance!" 
  },

  { 
    img: ach7, 
    desc: "PTTCE students of St. Theresa School, Bendur delivered outstanding performances at the AICS Inter-School Table Tennis Tournament held at Kanachur Public School. U-14 Boys secured 1st place, U-14 Girls 2nd place, U-17 Boys 1st place, and U-17 Girls 1st place." 
  },

  { 
    img: ach8, 
    desc: "PTTCE students representing St. Aloysius Gonzaga School, Mangalore put up a spirited performance in the AICS Inter-School Table Tennis Tournament. The Under-14 Girls team—Gianna, Joann, Advika, and Shyna—secured 2nd Runner-Up. Congratulations to the team for their dedication and teamwork!" 
  }
];

  const gallery = [
     
    { img: gal10, desc:" Head Coach Ashwin Kumar Padukone guiding kids during a TT coaching session at our Mangaluru academy."},
    { img: gal8, desc:"A proud moment as our Mangaluru academy hosts the State Ranking TT Tournament."},
    { img: gal2, desc:""},
    { img: gal3, desc:"Indian TT Head Coach Narayanan Ravichandran visits our academy and interacts with young players."},
    
    { img: gal9, desc:"St. Teresa School hosts the inter-school Zonal TT competition organized by PTTCE."},
    { img: gal4, desc:"PTTCE: Milagres English Medium School, Kalyanpura, Karnataka"},
    { img: gal14, desc:"Sportsgen program at Canara Nandagokul Preschool, Mangaluru, Karnataka"},
    { img: gal5, desc:""},
   
    { img: gal6, desc:"PTTCE: Mount Carmel Central School, Mangaluru, Karnataka"},
    
    { img: gal12, desc:"Head Coach Ashwin Kumar Padukone with assistant coaches Shashank Bhat, Abijith Pai, Elson, Aarna, Vinay, Vian, Aditya, and Nithish."},
    { img: gal7, desc:"PTTCE: Saint Teresa School, Mangaluru, Karnataka"},
    { img: gal15, desc:"SportsGen at Sri Siddhivinayaka Residential School, Kundapura, Udupi"},
    { img: gal11, desc:""},
    { img: gal13, desc:"Head Coach Ashwin Kumar Padukone with assistant coaches Aditya, Swaroop and Sujith. "},
    { img: gal16, desc:"Yoga Day event at Surathkal Center"}

  ]

  const reviews = [
    {
      name: "Shashank Bhat",
      rating: 5,
      review: "PTTCE has truly raised the bar. The coaching is top-notch, the facilities are excellent, and the overall training experience is outstanding. Highly recommended for anyone serious about improving their game"
    },
    {
      name: "Dr. Keshav Prabhu",
      rating: 5,
      review: "PTTCE is excellent academy for learning table tennis sport. Ashwin Sir is the dedicated teacher, coach, guide and trainer. Absolutely fantastic facilities and fitness coaching for students."
    },
    {
      name: "Elson Noronha",
      rating: 5,
      review: "A very Good Academy For Aspiring Table tennis players starting from professional level to beginner level. Ashwin Sir Is Just Excellent and his way of teaching kids and Adults Is Beyond Imagination."
    },
    {
      name: "Snehal Prabhu",
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
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
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

        {/* Achievements Slider */}
<div className="w-full py-16 mt-[15px] md:mt-[40px] "> {/* reduced vertical padding */}
  <div className="max-w-[95vw] mx-auto px-2"> {/* almost full width */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
        Achievements
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
        Celebrating milestones and excellence achieved by our talented athletes.
      </p>
    </div>

    <Slider {...sliderSettings}>
      {achievements.map((item, index) => (
        <div key={index} className="px-2">
          <div className="relative w-full h-[90vh] rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
          style={{
              backgroundImage: `url(${bgImg})`, // background image here
              backgroundSize: "cover",      // cover the whole container
              backgroundPosition: "center", // center it
            }}>
            {/* Image */}
            <img
              src={item.img}
              alt={`Achievement ${index + 1}`}
              className="max-w-full h-full object-contain "
            />

            {/* Description overlay */}
            <div className="absolute bottom-0 w-full bg-white/90 p-6 max-h-[50%] md:max-h-[35%] overflow-y-auto">
              <p className="text-gray-700 text-lg leading-relaxed font-medium text-center" style={{ fontFamily: 'Lora, serif' , whiteSpace: "pre-line"}}>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

        {/* About Section */}
        <div className="w-full flex items-center mt-[15px] md:mt-[40px] pb-10 pt-10">
          <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-[55%]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Padukone Centre of Sports
              </h2>
              <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Lora, serif' }}>
  Padukone Centre for Sports (PCS) is a sports development organization transforming the grassroots sports ecosystem in Karnataka. Founded by Coach Ashwin Kumar Padukone, PCS works to make high-quality training accessible to every child. Since launching its first Table Tennis Academy in 2022 at Father Muller Indoor Stadium, PCS has expanded to Mangalore, Manipal, and Suratkal, empowering young athletes through structured coaching, modern infrastructure, and strong school partnerships.
</p>

<p className="text-lg text-gray-700" style={{ fontFamily: 'Lora, serif' }}>
  At PCS, we nurture young talent by building passion, discipline, and teamwork while helping students grow physically, mentally, and emotionally. Our inclusive environment and expert guidance encourage children to explore their potential, enjoy healthy competition, and develop confidence. Along with skill development, we focus on character, resilience, and community—celebrating every achievement and fostering a lifelong love for sport.
</p>



              <div className="mt-8">
                <button onClick={() => navigate("/about")} className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Know More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={about} alt="About Us Image" className="w-full h-[400px] object-cover rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
        {/* Gallery Slider */}
<div className="w-full py-16 mt-[15px] md:mt-[40px]">
  <div className="max-w-[95vw] mx-auto px-2">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald' }}>
        Memories in Frames
      </h2>
    </div>

    <Slider {...sliderSettings2}>
      {gallery.map((item, index) => (
        <div key={index} className="px-4"> 
          <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-xl">

            {/* Main Image */}
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt=""
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


    

        {/* Reviews Section */}
        <div className="w-full py-16 mt-[15px] md:mt-[40px]">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                What People Say About Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>{review.name}</h3>
                  <div className="flex items-center text-yellow-500 text-lg font-medium mb-4">
                    {[...Array(review.rating)].map((_, i) => <AiFillStar key={i} />)}
                  </div>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full pt-16 pb-12 mt-[15px] md:mt-[40px]">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>
                FAQs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900" style={{ fontFamily: 'Oswald, sans-serif' }}>{faq.question}</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Lora, serif' }}>{faq.answer}</p>
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
    <p className="text-lg md:text-xl text-gray-700 mb-10">
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
          © 2025 Padukone Centre Of Sports. All rights reserved.
        </div>
      </footer>
      </div>
    </div>
  );
}

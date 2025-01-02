import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import { AiFillStar, AiOutlineEnvironment } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mlr from "../assets/pttce.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
      direction === 'prev' ? 'left-4' : 'right-4'
    } bg-white/80 hover:bg-white text-blue-900 rounded-3xl p-4 transition-all opacity-10 hover:opacity-100`}
  >
    {direction === 'prev' ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
  </button>
);


export default function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,    // Ensures the loop is infinite
    speed: 500,        // Speed of the slide transition (in ms)
    slidesToShow: 1,   // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true,    // Enables auto-sliding
    autoplaySpeed: 3000, // Adjust speed for auto transition
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    pauseOnHover: false, // Pauses on hover to improve user experience
  };
  

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      <div className="w-full mt-16">
        <div className="w-full">
          <Slider {...settings}>
            <div className="relative">
              <div className="w-full h-[91vh] bg-gradient-to-r from-blue-900/90 to-blue-600/80 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center text-white px-4">
                  <h1 className="text-7xl font-bold mb-8 text-center">
                    Transform Your Game
                  </h1>
                  <p className="text-2xl mb-12 max-w-3xl text-center leading-relaxed">
                    Join our elite sports training center and unlock your true
                    potential with world-class coaching and facilities.
                  </p>
                  <div className="flex gap-6">
                    <button
                      onClick={() => navigate("/about")}
                      className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => navigate("/contact")}
                      className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {[mlr, mlr].map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 2}`}
                  className="w-full h-[91vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
                <div className="absolute bottom-8 left-8 text-white z-20">
                  <h2 className="text-4xl font-bold mb-2">Dummy Heading {index + 2}</h2>
                  <p className="text-lg">This is a dummy description for slide {index + 2}.</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Programs Section */}
        <div className="w-full py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our diverse range of specialized training programs designed to elevate your performance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Youth Development",
                  desc: "Comprehensive sports training program designed specifically for young athletes aged 8-16",
                  icon: "🌟",
                },
                {
                  title: "Elite Performance",
                  desc: "Advanced training regime for competitive athletes aiming for professional excellence",
                  icon: "🏆",
                },
                {
                  title: "Specialized Training",
                  desc: "Sport-specific programs focusing on technique, strength, and tactical development",
                  icon: "⚡",
                },
              ].map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src="/api/placeholder/400/300"
                      alt={program.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 text-4xl">
                      {program.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => navigate("/programs")}
              >
                All Programs
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full py-24 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">
                What People Say About Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here's what our clients have to say about their experience with us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Dr. Keshav Prabhu",
                  rating: 5,
                  review: "PTTCE is excellent academy for learning table tennis sport. Ashwin Sir is the dedicated teacher, coach, guide and trainer. Absolutely fantastic facilities and fitness coaching for students.",
                },
                {
                  name: "Elson Noronha",
                  rating: 5,
                  review: "A very Good Academy For Aspiring Table tennis players starting from professional level to beginner level. Ashwin Sir Is Just Excellent and his way of teaching kids and Adults Is Beyond Imagination.",
                },
                {
                  name: "Snehal Prabhu",
                  rating: 5,
                  review: "Looking for a Professional Accadamy along with The Best All Round Dedicated Coach for ur Ward - Ur at rgt place. Along with His Superb team. They are Fantastic.",
                },
                {
                  name: "Shashank Bhat",
                  rating: 5,
                  review: "PTTCE is a game-changer. Exceptional coaching and facilities. Highly recommended!",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900">
                    {review.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-lg font-medium mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="w-full py-24 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">Our Locations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit one of our centers and experience top-class facilities and coaching.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: "Manipal Center", img: "/api/placeholder/400/300" },
                { name: "Surathkal Center", img: "/api/placeholder/400/300" },
                { name: "Mangalore Center", img: "/api/placeholder/400/300" },
              ].map((location) => (
                <div
                  key={location.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={location.img}
                    alt={location.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-blue-900">
                      {location.name}
                    </h3>
                    <div className="text-lg text-gray-600 mt-4 flex items-center">
                      <AiOutlineEnvironment className="text-xl mr-2" />
                      Located at the heart of the city, easily accessible
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full bg-blue-900 text-white py-12">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-4xl hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-blue-900 text-white py-12">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">SportCenter</h3>
            <p className="text-blue-200">© 2024 SportCenter. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}







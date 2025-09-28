import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import { AiFillStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import homepic1 from "../assets/homepic1.jpg";
import vdo from "../assets/transformvdo.mp4"
import mlr from "../assets/pttce.jpg";
import logo from "../assets/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 ${
      direction === "prev" ? "left-4" : "right-4"
    } bg-white/80 hover:bg-white text-blue-900 rounded-3xl p-4 transition-all opacity-10 hover:opacity-100`}
  >
    {direction === "prev" ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
  </button>
);

export default function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true, // Ensures the loop is infinite
    speed: 500, // Speed of the slide transition (in ms)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    pauseOnHover: false,
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      <div className="w-full mt-16">
        {/* Hero Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {/* First Slide with Video Background */}
            <div className="relative">
              <div className="w-full h-[91vh] relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={vdo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 h-full">
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

            {/* Other Slides */}
            {[homepic1, homepic1].map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 2}`}
                  className="w-full h-[91vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-10" />
                <div className="absolute bottom-8 left-8 text-white z-20">
                  <h2 className="text-4xl font-bold mb-2">Dummy Heading {index + 2}</h2>
                  <p className="text-lg">This is a dummy description for slide {index + 2}.</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* About Section */}
        <div className="w-full flex items-center mt-[40px] pb-10 pt-10">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-blue-900">About Us</h2>
            </div>
            <div className="flex mb-0">
              <div className="w-[50%] flex flex-col items-center justify-center">
                <p className="text-lg text-gray-700 max-w-md">
                  Our elite sports training center offers professional coaching,
                  state-of-the-art facilities, and a personalized approach to
                  help you achieve your goals.
                </p>
                <div className="text-center mt-16">
                  <button
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => navigate("/about")}
                  >
                    Know More
                  </button>
                </div>
              </div>
              <div className="w-[50%] pl-[100px] pb-10 h-[400px]">
                <img
                  src={logo}
                  alt="About Us Image"
                  className="w-[100%] h-[95%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="w-full pb-24 pt-12 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our diverse range of specialized training programs
                designed to elevate your performance
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
                      src={mlr}
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

        {/* Locations Section */}
        <div className="w-full pb-24 pt-12 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">Our Locations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit one of our centers and experience top-class facilities and
                coaching.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: "Manipal Center", img: mlr },
                { name: "Surathkal Center", img: mlr },
                { name: "Mangalore Center", img: mlr },
              ].map((location) => (
                <div
                  key={location.name}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={location.img}
                      alt={location.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900">
                      {location.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => navigate("/locations")}
              >
                Locations
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full py-24 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">
                What People Say About Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here's what our clients have to say about their experience with
                us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Dr. Keshav Prabhu",
                  rating: 5,
                  review:
                    "PTTCE is excellent academy for learning table tennis sport. Ashwin Sir is the dedicated teacher, coach, guide and trainer. Absolutely fantastic facilities and fitness coaching for students.",
                },
                {
                  name: "Elson Noronha",
                  rating: 5,
                  review:
                    "A very Good Academy For Aspiring Table tennis players starting from professional level to beginner level. Ashwin Sir Is Just Excellent and his way of teaching kids and Adults Is Beyond Imagination.",
                },
                {
                  name: "Snehal Prabhu",
                  rating: 5,
                  review:
                    "Looking for a Professional Accadamy along with The Best All Round Dedicated Coach for ur Ward - Ur at rgt place. Along with His Superb team. They are Fantastic.",
                },
                {
                  name: "Shashank Bhat",
                  rating: 5,
                  review:
                    "PTTCE is a game-changer. Exceptional coaching and facilities. Highly recommended!",
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
                  <p className="text-gray-600 leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full h-[91vh] flex items-center bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-blue-900">FAQs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to commonly asked questions
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Question 1 */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  What facilities do you offer?
                </h3>
                <p className="text-gray-600">
                  We provide advanced training facilities, fitness centers, and
                  expert coaching for all skill levels.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  How can I enroll?
                </h3>
                <p className="text-gray-600">
                  You can enroll online by visiting our registration page or
                  contacting our support team.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  Are there programs for beginners?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer beginner-friendly programs designed to build
                  foundational skills.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  What are the training timings?
                </h3>
                <p className="text-gray-600">
                  Our training schedules are flexible, with morning, afternoon,
                  and evening slots available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Us at PTTCE
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience world-class training with our ITTF certified coaches
              and facilities. Whether you're a beginner or an advanced player,
              we have programs designed for all skill levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate("/locations")}
                className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Find Our Centers
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-blue-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>
              © 2024 Padukone Table Tennis Center for Excellence. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

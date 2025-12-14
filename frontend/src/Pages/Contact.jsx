import React, { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import Navbar from "../Components/Navbar.jsx";
import logo from "../assets/logo2.png";
import {contactRoute} from "../API/Routes.js";
import { FaUser, FaUsers, FaSchool, FaCalendarAlt, FaBuilding, FaUserPlus, FaHandHoldingUsd, FaBriefcase, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactType: "",
  });

  const contactTypes = [
    { label: "Athlete", icon: <FaUser /> },
    { label: "Sports Team", icon: <FaUsers /> },
    { label: "Academy", icon: <FaSchool /> },
    { label: "School", icon: <FaSchool/> },
    { label: "Event Organiser", icon: <FaCalendarAlt /> },
    { label: "Corporate", icon: <FaBuilding /> },
    { label: "New Member", icon: <FaUserPlus /> },
    { label: "Sponsor", icon: <FaHandHoldingUsd /> },
    { label: "Career Seeker", icon: <FaBriefcase /> },
    { label: "Other", icon: <FaUser/> },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactType = (type) => {
    setFormData({ ...formData, contactType: type });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.contactType) {
      toast.error("Please select who you are");
      setLoading(false);
      return;
    }


    try {
      const { data } = await axios.post(`${contactRoute}`, formData);

      if (data.status === true) {
        toast.success("Message Sent");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.msg || "Failed to send Message");
      }
    } catch (error) {
      console.error("Error sending Message", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative  bg-gradient-to-br from-blue-100 via-white to-blue-200 ">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Page Heading */}
      <div className="mt-16 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
          REACH OUT TO US
        </h1>
        <p className="text-xl text-gray-700 mt-3" style={{ fontFamily: 'Lora, serif' }}>
          Choose your category, fill in details, and get in touch with us.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-20 px-4 pb-20 pt-10">
        {/* Left: Are You Section */}
        <div className="md:w-1/2 flex flex-col items-start gap-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Are You?</h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            {contactTypes.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => handleContactType(label)}
                className={`flex items-center gap-4 px-6 py-6 rounded-2xl border text-lg font-medium transition-all shadow-md w-full 
    border-2 border-blue-900 ${
                  formData.contactType === label
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Lora, serif' }}
              >
                <div className="text-3xl">{icon}</div>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white p-12 rounded-3xl shadow-2xl 
    border-2 border-blue-900">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-2 rounded-xl 
    border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  style={{ fontFamily: 'Lora, serif' }}
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium  mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-2 rounded-xl 
    border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  style={{ fontFamily: 'Lora, serif' }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium  mb-2" style={{ fontFamily: 'Lora, serif' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-2 rounded-xl 
    border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                style={{ fontFamily: 'Lora, serif' }}
                required
              />
            </div>

            

            <div>
              <label className="block text-base font-medium  mb-2" style={{ fontFamily: 'Lora, serif' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-2 rounded-xl 
    border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none"
                style={{ fontFamily: 'Lora, serif' }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-3 uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
      {/* logo*/}
<div className="flex items-center justify-center">
<img
    src={logo}
    alt="Center Logo"
    className="
              
    border-2 border-blue-900
      w-11/12 sm:w-3/4 md:w-2/3  // responsive widths for mobile, tablet, desktop
      h-auto                       // maintain aspect ratio
      max-h-[280px]                 // optional max height
      object-cover mb-10 shadow-xl rounded-2xl
       transition-all duration-300
    "
  />
  </div>
    <div className="max-w-7xl mx-auto px-4 pb-24 pt-12 md:pt-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-stretch">

    {/* Mail Us */}
    <div className="flex flex-col">
      <h3
        className="text-3xl font-bold text-blue-900 mb-6 uppercase"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Mail Us
      </h3>

    <a
  href="mailto:padukonecentreforsports24@gmail.com"
  className="
    flex flex-col justify-center
    w-full h-full
    bg-white
    border-2 border-blue-900
    rounded-2xl
    px-10 py-10
    text-xl font-semibold tracking-wider
    text-blue-900
    hover:bg-blue-50
    transition
  "
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  <span>📧 padukonecentreforsports24</span>
  <span className="mt-1">@gmail.com</span>
</a>


    </div>

    {/* Call Us */}
    <div className="flex flex-col">
      <h3
        className="text-3xl font-bold text-blue-900 mb-6 uppercase"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Call Us
      </h3>

      <a
  href="tel:+919481675900"
  className="
    flex flex-col justify-center
    w-full h-full
    bg-white
    border-2 border-blue-900
    rounded-2xl
    px-10 py-10
    text-xl font-semibold  tracking-wider
    text-blue-900
    hover:bg-blue-50
    transition
    md:pointer-events-none
    md:cursor-not-allowed
  "
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  📞 +91 9481675900
  <span className=" mt-3 text-xl tracking-normal">
    Ashwin Kumar Padukone
  </span>
</a>

    </div>

    {/* Social Media */}
    <div className="flex flex-col">
      <h3
        className="text-3xl font-bold text-blue-900 mb-6 uppercase"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Our Social Media
      </h3>

     <div className="flex flex-col gap-8">
  
  <a
  href="https://www.instagram.com/padukonecenterforsports"
  target="_blank"
  rel="noreferrer"
  className="
    flex items-start
    bg-white
    border-2 border-blue-900
    rounded-2xl
    px-8 py-4
    text-lg font-semibold uppercase tracking-wider
    text-blue-900
    hover:bg-blue-50
    transition
  "
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  <FaInstagram className="text-pink-600 text-3xl mr-4" />
  <span className="normal-case tracking-normal">
    @padukonecenterforsports
  </span>
</a>


   <a
  href="https://www.instagram.com/pttce"
  target="_blank"
  rel="noreferrer"
  className="
    flex items-start
    bg-white
    border-2 border-blue-900
    rounded-2xl
    px-8 py-4
    text-lg font-semibold uppercase tracking-wider
    text-blue-900
    hover:bg-blue-50
    transition
  "
  style={{ fontFamily: "Oswald, sans-serif" }}
>
  <FaInstagram className="text-pink-600 text-3xl mr-4" />
  <span className="normal-case tracking-normal">
    @pttce
  </span>
</a>

</div>


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
  );
}
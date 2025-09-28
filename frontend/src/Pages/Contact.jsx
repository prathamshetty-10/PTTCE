import React, { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import Navbar from "../Components/Navbar.jsx";
import logo from "../assets/logo.png";
import {contactRoute} from "../API/Routes.js";
import { FaUser, FaUsers, FaSchool, FaChalkboardTeacher, FaCalendarAlt, FaBuilding, FaUserPlus, FaHandHoldingUsd, FaBriefcase, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    center: "",
    contactType: "",
  });

  const contactTypes = [
    { label: "Athlete", icon: <FaUser /> },
    { label: "Sports Team", icon: <FaUsers /> },
    { label: "Academy", icon: <FaSchool /> },
    { label: "Coach", icon: <FaChalkboardTeacher /> },
    { label: "Event Organiser", icon: <FaCalendarAlt /> },
    { label: "Corporate", icon: <FaBuilding /> },
    { label: "New Member", icon: <FaUserPlus /> },
    { label: "Sponsor", icon: <FaHandHoldingUsd /> },
    { label: "Career Seeker", icon: <FaBriefcase /> },
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
    <div className="min-h-screen w-full flex flex-col relative bg-gray-50">
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
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Are You?</h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            {contactTypes.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => handleContactType(label)}
                className={`flex items-center gap-4 px-6 py-6 rounded-2xl border text-lg font-medium transition-all shadow-md w-full ${
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
        <div className="md:w-1/2 bg-white p-12 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  style={{ fontFamily: 'Lora, serif' }}
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  style={{ fontFamily: 'Lora, serif' }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                style={{ fontFamily: 'Lora, serif' }}
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                Center
              </label>
              <select
                name="center"
                value={formData.center}
                onChange={handleChange}
                className="w-full px-5 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                style={{ fontFamily: 'Lora, serif' }}
                required
              >
                <option value="">Select a center</option>
                <option value="Mangalore">Mangalore</option>
                <option value="Surathkal">Surathkal</option>
                <option value="Manipal">Manipal</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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

    {/* Logo + Social Media at bottom */}
<div className="flex flex-col items-center py-24 bg-gray-50">
  {/* Logo */}
  <img
    src={logo}
    alt="Center Logo"
    className="w-96 md:w-[500px] h-auto mb-10 shadow-lg"
  />

  {/* Social icons just below the logo */}
  <div className="flex gap-10 text-4xl text-blue-900">
    <a href="mailto:hannibalj588@gmail.com">
      <FaEnvelope className="hover:text-blue-600 transition-colors" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram className="hover:text-pink-600 transition-colors" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
      <FaFacebookF className="hover:text-blue-700 transition-colors" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube className="hover:text-red-600 transition-colors" />
    </a>
  </div>
</div>


      {/* Footer */}
      <footer className="w-full bg-gray-300  py-6">
        <div className="max-w-7xl mx-auto px-4 text-center" style={{ fontFamily: 'Lora, serif' }}>
          <p>
            © 2024 Padukone Table Tennis Center for Excellence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import {contactRoute} from "../API/Routes.js";
import { useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Contact() {
  const location = useLocation();
  const number = location.state.number;
  const addr = location.state.addr;
  const email = location.state.email;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900">
        <Navbar />
      </div>

      <div className="w-full mt-16">
        {/* Hero Section */}
        <div className="relative h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 z-10" />
          <img
            src="/api/placeholder/1920/1080"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-xl max-w-2xl text-center">
              Have questions? We're here to help. Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full py-14 bg-white">
          <div className="max-w-4xl mx-auto p-[80px] rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v1m0 14v1m8-8h1m-14 0h1M4.22 4.22l.707.707m12.727 12.727l.707.707m0-12.728l-.707.707m-12.727 0l-.707.707"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="w-full py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">{addr}</p>
              </div>
              <div className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Call Us</h3>
                <p className="text-gray-600">{number}</p>
              </div>
              <div
  className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
  onClick={() => window.open(`mailto:${email}`, '_blank')}
>
  <div className="text-3xl mb-4">✉️</div>
  <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
</div>

              <div
                className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                onClick={() => window.open(`https://wa.me/${number}`, '_blank')}
              >
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">WhatsApp</h3>
              </div>
              <div
                className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                onClick={() => window.open('https://www.instagram.com', '_blank')}
              >
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Instagram</h3>
              </div>
              <div
                className="text-center shadow-2xl py-[80px] rounded-3xl hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                onClick={() => window.open('https://www.facebook.com', '_blank')}
              >
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Facebook</h3>
              </div>
            </div>
          </div>
        </div>
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



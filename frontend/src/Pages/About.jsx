import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import founderImg from "../assets/logo.png"; // Replace with actual image path
import ittfCertification from "../assets/logo.png"; // Replace with actual image
import nationalMedal from "../assets/logo.png"; // Replace with actual image
import trainingCamp from "../assets/logo.png"; // Replace with actual image

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* About Us Header */}
      <div className="w-full pt-[110px] pb-[100px] bg-blue-900 mb-[80px]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Padukone Table Tennis Center for Excellence is dedicated to promoting excellence in table tennis 
            through professional training, world-class facilities, and expert coaching.
          </p>
        </div>
      </div>

      {/* About Founder Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={founderImg} 
                  alt="Ashwin Kumar Padukone" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Founder</h2>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ashwin Kumar Padukone</h3>
              <p className="text-gray-700 mb-6">
                Ashwin Kumar Padukone is an International Table Tennis Federation (ITTF) Level 3 Certified Coach 
                with over 15 years of professional playing and coaching experience. As one of only four ITTF Level 1 
                Course Conductors and Coaches Trainers in India, he brings world-class expertise to the Padukone 
                Table Tennis Centre for Excellence.
              </p>
              <p className="text-gray-700 mb-6">
                Currently serving as a nominated member of the Development and Education Committee of the Table Tennis 
                Federation of India, Ashwin is dedicated to advancing the sport throughout the country.
              </p>
              <div className="flex items-center mt-8">
                <a href="mailto:Ashwinkp.tabletennis@gmail.com" className="text-blue-600 font-medium flex items-center mr-8">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Ashwinkp.tabletennis@gmail.com
                </a>
                <a href="tel:+919481675900" className="text-blue-600 font-medium flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  +91 9481675900
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qualifications Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Qualifications & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bachelor of Automobile Engineering</li>
                <li>• Bachelor of Physical Education</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">ITTF Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ITTF Level 3 Certified Coach (2016)</li>
                <li>• ITTF Level 2 (2015)</li>
                <li>• ITTF Level 1 (2013)</li>
                <li>• ITTF Level 1 Course Conductor (2017)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Professional Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 15+ years of professional coaching</li>
                <li>• Member, Development and Education Committee, Table Tennis Federation of India</li>
                <li>• Trained under Mr. Richard McAfee, Head Coach of USA and senior trainer of ITTF</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 relative">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={nationalMedal}
                    alt="National Medal"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  Playing Achievements
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    National Silver Medalist in SGFI Games (2005-2006)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    State Silver Medal (2005)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Master's Games State Silver Medal (2022)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Multiple District Level Tournament Victories
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 relative">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={trainingCamp}
                    alt="Training Camp"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  Coaching Achievements
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Trained many State and National Level Players
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Conducted High Performance Camps in Indore
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Conducted High Performance Camps in Noida
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Featured in ITTF Website Articles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizational Skills Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Events & Tournaments</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-8 text-lg">
              At PTTCE, we pride ourselves on organizing professional tournaments and events to promote 
              table tennis and provide competitive opportunities for players of all levels.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Regular Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• District Ranking Tournaments</li>
                  <li>• Torpedoes TT League</li>
                  <li>• Torpedoes Sports Carnival</li>
                  <li>• PTTCE League Tournaments</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Official Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chief Referee for University Tournaments</li>
                  <li>• Chief Referee for District Level Tournaments</li>
                  <li>• Working toward hosting State Ranking Tournament in Mangalore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ITTF Recognition Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">International Recognition</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-full h-80 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={ittfCertification} 
                  alt="ITTF Certification" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Featured in ITTF</h3>
              <p className="text-gray-700 mb-6">
                Ashwin Kumar Padukone has been recognized by the International Table Tennis Federation 
                and featured in articles on their official website.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://www.ittf.com/2017/09/28/first-ashwin-kumar-padukon-tenth-india/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <h4 className="text-lg font-medium text-blue-800">First for Ashwin Kumar Padukone, tenth for India</h4>
                  <p className="text-sm text-blue-600 mt-1">www.ittf.com | September 28, 2017</p>
                </a>
                <a 
                  href="https://www.ittf.com/2017/05/16/tag-team-christian-lillieroos-hands-duties-richard-mcafee/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <h4 className="text-lg font-medium text-blue-800">Tag team, Christian Lillieroos hands duties to Richard McAfee</h4>
                  <p className="text-sm text-blue-600 mt-1">www.ittf.com | May 16, 2017</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us at PTTCE</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience world-class training with our ITTF certified coaches and facilities.
            Whether you're a beginner or an advanced player, we have programs designed for all skill levels.
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
          <p>© 2024 Padukone Table Tennis Center for Excellence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
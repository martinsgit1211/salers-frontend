// pages/Landing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/ChatGPT Image Apr 10, 2025, 12_20_10 PM.png";
import Nav from "../components/Nav";

function Landing() {
    
  
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col justify-between">
        <Nav/>
        {/* Main section */}
        <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pb-10">
          {/* Text Content */}
          <div className="max-w-lg mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Connect <span className="text-yellow-400">Manufacturers</span>
              <br />
              & Wholesalers
            </h2>
            <p className="mt-6 text-gray-300">
              A smart marketplace to streamline supply chains, reduce delays and grow your wholesale business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/manufacturer/register"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
              >
                Join as Manufacturer
              </Link>
              <Link
                to="/wholesaler/register"
                className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Join as Wholesaler
              </Link>
            </div>
          </div>
  
          {/* Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <img
              src={illustration}
              alt="Manufacturers and Wholesalers"
              className="w-full object-contain"
            />
          </div>
        </main>
      </div>
    );
  }
  
  export default Landing;
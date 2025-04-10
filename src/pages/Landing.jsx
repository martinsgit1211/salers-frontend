// pages/Landing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/ChatGPT Image Apr 10, 2025, 12_20_10 PM.png";

function Landing() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col justify-between">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 relative">
          <h1 className="text-2xl font-bold">
            wholesale<span className="text-yellow-400">Hub</span>
          </h1>
  
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
  
          {/* Links */}
          <div className={`md:flex gap-4 text-sm absolute md:static top-16 left-0 w-full md:w-auto px-6 bg-[#0f0f0f] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
            <Link to="/manufacturer/login" className="block py-2 hover:underline">
              Login (M)
            </Link>
            <Link to="/wholesaler/login" className="block py-2 hover:underline">
              Login (W)
            </Link>
            <Link
              to="/manufacturer/register"
              className="block md:inline ml-0 md:ml-2 px-4 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition my-2 md:my-0"
            >
              Sign up (M)
            </Link>
            <Link
              to="/wholesaler/register"
              className="block md:inline ml-0 md:ml-2 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition mb-2 md:mb-0"
            >
              Sign up (W)
            </Link>
          </div>
        </nav>
  
        {/* Main section */}
        <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
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
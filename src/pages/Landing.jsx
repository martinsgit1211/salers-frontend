import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/illustration.png";
import Nav from "../components/Nav";

function Landing() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      <Nav />

      <main className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 flex-grow overflow-x-hidden">
        {/* Text Section */}
        <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Connect <span className="text-yellow-400">Manufacturers</span>
            <br />
            & Wholesalers
          </h2>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            A smart marketplace to streamline supply chains, reduce delays and
            grow your wholesale business.
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
              className="bg-white text-yellow-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Join as Wholesaler
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <img
            src={illustration}
            alt="Manufacturers and Wholesalers"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}

export default Landing;

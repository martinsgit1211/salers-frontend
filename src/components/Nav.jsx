import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full lg:border-b-1 lg:border-b-yellow-500 px-4 sm:px-15 pt-4 bg-[#0f0f0f] z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="text-[2.2em] sm:text-[3em] md:text-[3em] lg:text-[3.2em] font-bold">
          Sale<span className="text-yellow-400">Hub</span>
        </Link>
        {/* Hamburger menu for mobile & tablets */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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

        {/* Desktop Nav - hidden on smaller screens */}
        <div className="hidden lg:flex items-center gap-10 text-sm">
            <div className="flex gap-4 border-r-1 border-r-yellow-500 pr-10">
          <Link to="/wholesaler/login" className="px-4 py-2 border text-white border-white rounded-lg hover:bg-white hover:text-black transition">
            Login (W)
          </Link>
          <Link
            to="/wholesaler/register"
            className="px-4 py-2 text-yellow-800 bg-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Sign up (W)
          </Link>

            </div>
            <div className="flex gap-4">
          <Link to="/manufacturer/login" className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
            Login (M)
          </Link>
          <Link
            to="/manufacturer/register"
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Sign up (M)
          </Link>

            </div>
        </div>
      </div>

      {/* Mobile/Tablet Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-t-yellow-400 mt-4 flex flex-col gap-4 items-center text-[1.1em] bg-[#0f0f0f] pb-6">
          <Link to="/wholesaler/login" 
          className="px-10 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition mt-4 px-8"
          >
            Login (W)
          </Link>
          <Link
            to="/wholesaler/register"
            className="rounded-lg px-4 transition border-white hover:border hover:border-white hover:text-white hover:bg-black hover:text-white bg-white text-black py-2 px-8"
          >
            Sign up (W)
          </Link>
          <Link to="/manufacturer/login" className="px-10 py-2 border border-yellow-400 rounded-lg text-yellow-400 hover:bg-black transition hover:text-black hover:bg-yellow-400">
            Login (M)
          </Link>
          <Link
            to="/manufacturer/register"
            className="px-8 px-4 py-2 text-black hover:border hover:border-yellow-400 rounded-lg bg-yellow-400 hover:text-yellow-400 hover:bg-black transition"
          >
            Sign up (M)
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

import React, {useState} from "react";  
import {Link} from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            {/* Navbar */}
        <nav className="flex justify-between items-center px-6 pt-4 relative">
          <h1 className="text-[1 rem] font-bold">
            Wholesale<span className="text-yellow-400">Hub</span>
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
          <div className={`md:flex mt-2 py-6 h-[100vh] md:h-auto gap-4 text-sm absolute md:static top-16 left-0 w-full md:w-auto px-6 bg-[#0f0f0f] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
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
        </>
    )
}

export default Nav;
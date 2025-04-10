import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-4 sm:px-8 lg:px-16 py-12">
      {/* Footer Nav Section */}
      <div className="border-t border-yellow-700 pt-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm mb-8 px-2 text-center">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Jobs</a>
          <a href="#" className="hover:text-white transition">Accessibility</a>
          <a href="#" className="hover:text-white transition">Partners</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-gray-400 text-xl">
          <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition"><FaXTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaGithub /></a>
          <a href="#" className="hover:text-white transition"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <div className="bg-[#0f0f0f] py-4 text-center text-gray-400 mt-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SaleHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

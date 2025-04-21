import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Package, ShoppingCart, User } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa"; // For the toggle button (hamburger and close icons)

function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const links = {
    manufacturer: [
      { label: "My Products", icon: <Package size={18} />, to: "/manufacturer/products" },
      { label: "Orders", icon: <ShoppingCart size={18} />, to: "/manufacturer/orders" },
      { label: "Profile", icon: <User size={18} />, to: "/manufacturer/profile" },
    ],
    wholesaler: [
      { label: "Browse Products", icon: <Package size={18} />, to: "/wholesaler/products" },
      { label: "My Orders", icon: <ShoppingCart size={18} />, to: "/wholesaler/orders" },
      { label: "Profile", icon: <User size={18} />, to: "/wholesaler/profile" },
    ],
  };

  // Function to toggle the sidebar open and closed
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 md:hidden text-white p-3 rounded-full ${
          isOpen ? "bg-yellow-400" : "bg-gray-700"
        }`}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 w-0 transition-all duration-300 ease-in-out fixed h-full top-0 left-0 overflow-y-auto z-10 bg-[#1a1a1a] py-8 ${
          isOpen ? "w-64" : "w-0"
        }`}
      >
        <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 md:hidden text-white p-3 rounded-full ${
          isOpen ? "bg-yellow-400" : "bg-gray-700"
        }`}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
        <h1 className="text-xl font-bold mb-6 text-yellow-400">SaleHub</h1>
        <nav className="flex flex-col gap-4">
          {links[role]?.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="flex items-center gap-3 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

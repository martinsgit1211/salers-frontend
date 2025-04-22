import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, ShoppingCart, User, LogOut } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../auth/AuthContext"; // adjust the path if needed

function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

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

  const handleLogout = () => {
    if (role === "manufacturer") {
      localStorage.removeItem("manufacturerToken");
      localStorage.removeItem("manufacturerUser");
      navigate("/manufacturer/login");
    } else if (role === "wholesaler") {
      localStorage.removeItem("wholesalerToken");
      localStorage.removeItem("wholesalerUser");
      navigate("/wholesaler/login");
    }

    logout(); // clear context if needed
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
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
        <h1 className="text-xl font-bold mb-6 text-yellow-400 px-4">SaleHub</h1>
        <nav className="flex flex-col gap-4 px-4">
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

          {/* Logout Option */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-red-500 hover:text-white rounded transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

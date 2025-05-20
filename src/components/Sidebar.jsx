import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, ShoppingCart, User, LogOut } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../auth/AuthContext"; // Adjust path as needed

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
    if (user?.role === "manufacturer") {
      localStorage.removeItem("manufacturerToken");
      localStorage.removeItem("manufacturerUser");
      navigate("/manufacturer/login");
    } else if (user?.role === "wholesaler") {
      localStorage.removeItem("wholesalerToken");
      localStorage.removeItem("wholesalerUser");
      navigate("/wholesaler/login");
    }
    logout();
  };

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div>
      {/* Toggle Button (Hamburger / Close) */}
     
      <button
        onClick={toggleSidebar}
        className="absolute top-1 left-4 md:hidden text-white p-3 z-20 rounded-full"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-10 z-10 md:block md:bg-transparent"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-[#1a1a1a] py-8 px-4 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} md:translate-x-0 md:w-64`}
      >
        <h1 className="text-xl font-bold mb-6 text-yellow-400">SaleHub</h1>
        <button
        onClick={toggleSidebar}
        className="absolute top-5 left-40 md:hidden text-white p-3 z-20 rounded-full"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

        <nav className="flex flex-col gap-4">
          {user?.role === "Manufacturer" && (
            <>
              {links.manufacturer.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={closeSidebar}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </>
          )}

          {user?.role === "Wholesaler" && (
            <>
              {links.wholesaler.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={closeSidebar}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded transition"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </>
          )}

          {/* Logout */}
          <button
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
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

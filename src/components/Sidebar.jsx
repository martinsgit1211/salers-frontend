import React from "react";
import { Link } from "react-router-dom";
import { Factory, Package, ShoppingCart, User } from "lucide-react";

function Sidebar({ role }) {
  const links = {
    manufacturer: [
      { label: "My Products", icon: <Package size={18} />, to: "/manufacturer/products" },
      { label: "Orders", icon: <ShoppingCart size={18} />, to: "/manufacturer/orders" },
      { label: "Profile", icon: <User size={18} />, to: "/manufacturer/profile" },
    ],
    // Add for admin/wholesaler later
  };

  return (
    <div className="w-64 bg-[#1a1a1a] min-h-screen px-6 py-8">
      <h1 className="text-xl font-bold mb-6 text-yellow-400">wholesaleHub</h1>
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
  );
}

export default Sidebar;

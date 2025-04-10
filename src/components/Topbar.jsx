import React from "react";

function Topbar({ userRole }) {
  return (
    <div className="w-full px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-[#121212]">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="text-sm text-gray-300">
        Logged in as <span className="text-yellow-400">{userRole}</span>
      </div>
    </div>
  );
}

export default Topbar;

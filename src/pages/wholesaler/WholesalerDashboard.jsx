import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function WholesalerDashboard() {
  return (
    <div className="min-h-screen flex bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <Sidebar role="wholesaler" />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar userRole="Wholesaler" />

        {/* Dashboard Content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Welcome back, Wholesaler 👋
          </h2>
          <p className="text-gray-400">Here's your dashboard overview.</p>
        </main>
      </div>
    </div>
  );
}

export default WholesalerDashboard;

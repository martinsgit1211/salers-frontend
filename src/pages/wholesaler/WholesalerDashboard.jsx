import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function WholesalerDashboard() {
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    // Get wholesaler data from localStorage
    const userData = JSON.parse(localStorage.getItem("manufacturerUser"));
    if (userData && userData.businessName) {
      setBusinessName(userData.businessName);
    }
  }, []);

  return (
    <div className="min-h-screen md:pl-65 flex bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <Sidebar role="Wholesaler" />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar userRole="Wholesaler" />

        {/* Dashboard Content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Welcome back, {businessName ? businessName : "Wholesaler"} 👋
          </h2>
          <p className="text-gray-400">Here's your dashboard overview.</p>

          {/* Example of a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Example Summary Cards */}
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-gray-400">Number of orders placed</p>
            </div>
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Pending Shipments</h3>
              <p className="text-gray-400">Shipments awaiting processing</p>
            </div>
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <p className="text-gray-400">Total sales made so far</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default WholesalerDashboard;
 
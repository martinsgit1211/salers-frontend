import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function ManufacturerDashboard() {
  const [companyName, setCompanyName] = useState("");
  const [productCount, setProductCount] = useState(0); // State to store the product count

  useEffect(() => {
    // Get manufacturer data from localStorage
    const userData = JSON.parse(localStorage.getItem("manufacturerUser"));
    if (userData && userData.companyName) {
      setCompanyName(userData.companyName);
    }

    // Fetch product count from the backend
    const fetchProductCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/count", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('manufacturerToken')}`,
          },
        });
        setProductCount(res.data.count); // Set the product count from the API response
      } catch (err) {
        console.error("Error fetching product count:", err.response?.data?.message || err.message);
      }
    };

    fetchProductCount(); // Call the function to fetch the count
  }, []);

  return (
    <div className="min-h-screen md:pl-65 flex bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <Sidebar role="Manufacturer" />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar userRole="Manufacturer" />

        {/* Dashboard Content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Welcome back, {companyName ? companyName : "Manufacturer"} 👋
          </h2>
          <p className="text-gray-400">Here's your dashboard overview.</p>

          {/* Example of a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Total Products Summary Card */}
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-gray-400">Number of products listed</p>
              <h4 className="text-xl font-bold mt-4">{productCount}</h4> {/* Display the product count */}
            </div>

            {/* Orders Pending Summary Card */}
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Orders Pending</h3>
              <p className="text-gray-400">Orders awaiting confirmation</p>
            </div>

            {/* Total Sales Summary Card */}
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

export default ManufacturerDashboard;

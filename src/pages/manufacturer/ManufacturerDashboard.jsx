import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function ManufacturerDashboard() {
  const [companyName, setCompanyName] = useState("");
  const [productCount, setProductCount] = useState(0); // State to store the product count
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get manufacturer data from localStorage
    const userData = JSON.parse(localStorage.getItem("manufacturerUser"));

    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("manufacturerToken");
        const res = await axios.get("http://localhost:5000/api/notifications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNotifications(res.data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error.message);
        setMessage("Failed to fetch notifications. Please try again later.");
      }
    };

    fetchNotifications(); // Fetch notifications when the component mounts
    // Set company name from user data
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
            Welcome back, {companyName} 👋
          </h2>
          <p className="text-gray-400">Here's your dashboard overview.</p>

          {/* Example of a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Total Products Summary Card */}
            <Link to='/manufacturer/products' className="bg-[#222222] hover:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-yellow-400 font-semibold">Total Products</h3>
              <p className="text-gray-400">Number of products listed</p>
              <h4 className="text-xl font-bold mt-4">{productCount}</h4> {/* Display the product count */}
            </Link>

            {/* Orders Pending Summary Card */}
            <Link to='/manufacturer/orders' className="bg-[#222222] hover:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-yellow-400 font-semibold">Orders Pending</h3>
              <p className="text-gray-400">Orders awaiting confirmation</p>
            </Link>

            {/* Total Sales Summary Card */}
            <div className="bg-[#222222] p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-yellow-400 font-semibold">Total Sales</h3>
              <p className="text-gray-400">Total sales made so far</p>
            </div>
            <div className="bg-[#222222] hover:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Recent Notifications</h3>
            {message && (
              <p className="text-red-500 mb-2">{message}</p>
            )}
            {notifications.length === 0 ? (
             <Link to='/manufacturer/notifications'>
               <p className="text-gray-400">No notifications yet.</p>
             </Link>
              
            ) : (
               <Link
                to="/manufacturer/notifications"
                className="block py-2 px-4 text-white"
               >
                <p className="text-yellow-400 font-semibold mb-2">
                  🔔 You've got notifications!

                </p>
              
               <ul className="space-y-2">
                {notifications.map((note) => (
                  <li key={note._id} className="text-gray-300 text-sm">
                    {note.message}
                  </li>
                ))}
              </ul>
            </Link> 
             
            )}
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManufacturerDashboard;

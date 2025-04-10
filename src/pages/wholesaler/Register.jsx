import React, { useState } from "react";
import { Link } from "react-router-dom";

function WholesalerRegister() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Handle registration logic here
    console.log("Register as Wholesaler:", { businessName, email, password, businessType });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
             <div className="rounded-2xl shadow-lg max-w-md w-full">
        <form
          onSubmit={handleRegister}
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Wholesaler Registration</h2>
          
          <div className="mb-4">
            <label className="block mb-1 text-sm sm:text-base">Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm sm:text-base">Business Type</label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            >
              <option value="">Select a business type</option>
              <option value="retail">Retail</option>
              <option value="distributor">Distributor</option>
              <option value="importer">Importer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-1 text-sm sm:text-base">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 font-semibold transition"
          >
            Register
          </button>
          
          <p className="mt-4 text-center text-xs sm:text-sm">
            Already have an account?{" "}
            <Link to="/wholesaler/login" className="text-white hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default WholesalerRegister;
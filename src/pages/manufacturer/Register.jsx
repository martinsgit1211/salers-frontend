// pages/manufacturer/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManufacturerRegister() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Handle registration logic here
    console.log("Register as Manufacturer:", { companyName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white p-4">
      <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-lg mx-auto">
        <form
          onSubmit={handleRegister}
          className="bg-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Manufacturer Registration</h2>
          
          <div className="mb-3 sm:mb-4">
            <label className="block mb-1 text-sm sm:text-base">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label className="block mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label className="block mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-4 sm:mb-5">
            <label className="block mb-1 text-sm sm:text-base">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 sm:py-2.5 md:py-3 rounded hover:bg-yellow-300 font-semibold transition text-sm sm:text-base"
          >
            Register
          </button>
          
          <p className="mt-4 text-center text-xs sm:text-sm">
            Already have an account?{" "}
            <Link to="/manufacturer/login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ManufacturerRegister;
// pages/wholesaler/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function WholesalerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    console.log("Login as Wholesaler:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Wholesaler Login</h2>
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
          <div className="mb-5">
            <label className="block mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 font-semibold transition"
          >
            Login
          </button>
          <p className="mt-4 text-center text-xs sm:text-sm">
            Don't have an account?{" "}
            <Link to="/wholesaler/register" className="text-white hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default WholesalerLogin;
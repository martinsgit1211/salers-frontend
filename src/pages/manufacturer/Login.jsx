// pages/manufacturer/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManufacturerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    console.log("Login as Manufacturer:", { email, password, staySignedIn });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-opacity-40 text-white p-4">
      <div className="bg-[#1e1e1e] rounded-lg shadow-xl w-full max-w-md p-8 relative">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify Logo"
            className="w-10 h-10 mb-2"
          />
          <h1 className="text-2xl font-bold">Spotify</h1>
        </div>

        <div className="flex justify-center mb-6 space-x-6">
          <span className="border-b-2 border-green-500 pb-1">SIGN IN</span>
          <Link to="/manufacturer/register" className="text-gray-400 hover:text-white">
            SIGN UP
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
            required
          />

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={staySignedIn}
              onChange={() => setStaySignedIn(!staySignedIn)}
              className="mr-2"
            />
            <label className="text-gray-300">stay signed in</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 transition-colors text-white py-2 rounded-full font-semibold text-sm"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6 hover:underline cursor-pointer">
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default ManufacturerLogin;

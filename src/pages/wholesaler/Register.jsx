import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from '../../components/Nav';
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

function WholesalerRegister() {
  useEffect(() => {
      const originalTitle = document.title;
      document.title = "Wholesaler|SignUp";
      return () => {
        document.title = originalTitle;
      };
    }, []);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // TODO: Handle registration logic here
    console.log("Register as Wholesaler:", { businessName, email, password, businessType });

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/wholesaler/register", {
        name: businessName,
        email,
        password,
        role: "Wholesaler",
      });

      console.log("Registration successful:", res.data);
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => {
        navigate("/wholesaler/login");

      }, 5000); // Redirect after 5 seconds
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
    <Nav/>
    <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
             <div className="rounded-2xl shadow-lg max-w-md w-full">
        <form
          onSubmit={handleRegister}
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Wholesaler <span className="text-yellow-400">Registration</span></h2>
          {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
          {message && (
            <p className="text-green-500 text-sm mb-4 text-center">{message}</p>
          )}
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

          <div className="mb-4 relative">
            <label className="block mb-1 text-sm sm:text-base">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
             <span
              className="absolute top-11 sm:top-12 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
             </span>
          </div>

          <div className="mb-5 relative">
            <label className="block mb-1 text-sm sm:text-base">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-white"
              required
            />
             <span
              className="absolute top-11 sm:top-12 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
             </span>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-gray-200 font-semibold transition"
          >
            Register
          </button>
          
          <p className="mt-4 text-center text-xs sm:text-sm">
            Already have an account?{" "}
            <Link to="/wholesaler/login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default WholesalerRegister;
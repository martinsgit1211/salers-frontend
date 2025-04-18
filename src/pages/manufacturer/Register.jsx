import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav";

function ManufacturerRegister() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: companyName,
        email,
        password,
        role: "manufacturer",
      });

      console.log("Registration successful:", res.data);
      navigate("/manufacturer/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Nav />
      <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="rounded-2xl shadow-lg max-w-md w-full">
          <form
            onSubmit={handleRegister}
            className="bg-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-lg shadow-lg w-full"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Manufacturer <span className="text-yellow-400">Registration</span>
            </h2>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <div className="mb-3 sm:mb-4">
              <label className="block mb-1 text-sm sm:text-base">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                required
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block mb-1 text-sm sm:text-base">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                required
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block mb-1 text-sm sm:text-base">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                required
              />
            </div>

            <div className="mb-4 sm:mb-5">
              <label className="block mb-1 text-sm sm:text-base">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 font-semibold transition text-sm sm:text-base"
            >
              Register
            </button>

            <p className="mt-4 text-center text-xs sm:text-sm">
              Already have an account?{" "}
              <Link
                to="/manufacturer/login"
                className="text-yellow-400 hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default ManufacturerRegister;

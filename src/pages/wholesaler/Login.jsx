import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from '../../components/Nav';
import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../auth/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

function WholesalerLogin() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Wholesaler|Login";
    return () => {
      document.title = originalTitle;
    };
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    // console.log("Login as Wholesaler:", { email, password });
    try {
      const res = await axiosInstance.post('http://localhost:5000/api/auth/wholesaler/login', {
        email,
        password,
      });
  
      const { token, user } = res.data;
  
      // Store token and user info
      localStorage.setItem('wholesalerToken', token);
      localStorage.setItem('wholesalerUser', JSON.stringify(user));
      localStorage.setItem("auth", JSON.stringify({ token, user }));
      setUser(user);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
      navigate('/wholesaler/dashboard');
      }, 3000); // Redirect after 3 seconds
      // Update the AuthContext with the logged-in user
      // login("Wholesaler", token); // Update the AuthContext with the logged-in user
      login("Wholesaler", token); // Update the AuthContext with the logged-in user
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
    <Nav/>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
             <div className="rounded-2xl shadow-lg max-w-md w-full">
        <form
          onSubmit={handleLogin}
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Wholesaler <span className="text-yellow-400">Login</span></h2>
          {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
          {message && (
              <p className="text-green-500 text-sm mb-4 text-center">{message}</p>
            )}
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
          <div className="mb-5 sm:mb-6 relative">
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
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-gray-200 font-semibold transition"
          >
            Login
          </button>
          <p className="mt-4 text-center text-xs sm:text-sm">
            Don't have an account?{" "}
            <Link to="/wholesaler/register" className="text-yellow-400 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default WholesalerLogin;
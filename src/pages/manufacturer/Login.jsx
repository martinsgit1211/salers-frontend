import React, { useState, useContext , useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import Nav from '../../components/Nav'
import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../auth/AuthContext";

function ManufacturerLogin() {
  useEffect(() => {
      const originalTitle = document.title;
      document.title = "Manufacturer|Login";
      return () => {
        document.title = originalTitle;
      };
    }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login as Manufacturer:", { email, password });
    try {
      const res = await axiosInstance.post('http://localhost:5000/api/auth/manufacturer/login', {
        email,
        password,
      });
      
      const { token, user } = res.data;
  
      // Store token and user info
      localStorage.setItem('manufacturerToken', token);
      localStorage.setItem('manufacturerUser', JSON.stringify(user));
      login("Manufacturer", token);
      navigate('/manufacturer/dashboard');
    } catch (err) {
      console.error('Login error:', err.response?.data?.message || err.message);
    }
  };

  return (
    <>
    <Nav/>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
             <div className="rounded-2xl shadow-lg max-w-md w-full">
        <form
          onSubmit={handleLogin}
          className="bg-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-lg shadow-lg w-full"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Manufacturer <span className="text-yellow-400">Login</span> </h2>
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
          <div className="mb-4 sm:mb-5">
            <label className="block mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 sm:py-2.5 md:py-3 rounded hover:bg-yellow-300 font-semibold transition text-sm sm:text-base"
          >
            Login
          </button>
          <p className="mt-4 text-center text-xs sm:text-sm">
            Don't have an account?{" "}
            <Link to="/manufacturer/register" className="text-yellow-400 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default ManufacturerLogin;
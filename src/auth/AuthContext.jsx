// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {role: 'Manufacturer' or 'Wholesaler', ...}
  const [cart, setCart] = useState([]);
  // const navigate = useNavigate();

  // Initialize user from localStorage token (if any)
  useEffect(() => {
    const tokenM = localStorage.getItem("ManufacturerToken");
    const tokenW = localStorage.getItem("WholesalerToken");
    const storedAuth = JSON.parse(localStorage.getItem("auth"));

    if (storedAuth?.token && storedAuth?.user) {
      setUser(storedAuth.user);
      // setToken(storedAuth.token);
    }
  
    if (tokenM) {
      setUser({ role: "Manufacturer", token: tokenM });
    } else if (tokenW) {
      setUser({ role: "Wholesaler", token: tokenW });
    }
  }, []);

;

  // Auth Actions
  const login = (userType, token, userInfo) => {
    localStorage.setItem(`${userType}Token`, token);
    localStorage.setItem("auth", JSON.stringify({ token, user: { ...userInfo, role: userType } }));
    setUser({ role: userType, token, ...userInfo });
  };

  const logout = async () => {
    const token = localStorage.getItem("ManufacturerToken") || localStorage.getItem("WholesalerToken");
  
    try {
      if (token) {
        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
    localStorage.removeItem("ManufacturerToken");
    localStorage.removeItem("WholesalerToken");
    localStorage.removeItem("auth");
    setUser(null);
    setCart([]);
    // navigate("/");
  };
  
  

  // Cart Logic
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.product._id === product._id);
      if (exists) {
        return prev.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product._id !== productId));
  };

  const updateCartQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

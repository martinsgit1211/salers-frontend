// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {role: 'Manufacturer' or 'Wholesaler', ...}
  const [cart, setCart] = useState([]);

  // Initialize user from localStorage token (if any)
  useEffect(() => {
    const tokenM = localStorage.getItem("ManufacturerToken");
    const tokenW = localStorage.getItem("WholesalerToken");

    if (tokenM) {
      setUser({ role: "Manufacturer", token: tokenM });
    } else if (tokenW) {
      setUser({ role: "Wholesaler", token: tokenW });
    }
  }, []);

  // Auth Actions
  const login = (userType, token) => {
    localStorage.setItem(`${userType}Token`, token);
    setUser({ role: userType, token });
  };

  const logout = () => {
    localStorage.removeItem("ManufacturerToken");
    localStorage.removeItem("WholesalerToken");
    setUser(null);
    setCart([]);
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
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

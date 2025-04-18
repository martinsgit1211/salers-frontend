import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerRegister from "./pages/manufacturer/Register";
import WholesalerRegister from "./pages/wholesaler/Register";
import ManufacturerLogin from "./pages/manufacturer/Login";
import WholesalerLogin from "./pages/wholesaler/Login";
import ManufacturerProducts from "./pages/manufacturer/ManufacturerProducts";
import WholesalerProducts from "./pages/wholesaler/WholesalerProducts.jsx";
import WholesalerOrders from "./pages/wholesaler/WholesalerOrders";
import Cart from "./pages/wholesaler/Cart";
import Profile from "./pages/shared/Profile";
import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/manufacturer/register" element={<ManufacturerRegister />} />
        <Route path="/wholesaler/register" element={<WholesalerRegister />} />
        <Route path="/manufacturer/login" element={<ManufacturerLogin />} />
        <Route path="/wholesaler/login" element={<WholesalerLogin />} />

        {/* Protected Routes */}
        <Route
          path="/manufacturer/products"
          element={
            <ProtectedRoute userType="Manufacturer">
              <ManufacturerProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manufacturer/profile"
          element={
            <ProtectedRoute userType="Manufacturer">
              <Profile role="Manufacturer" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/products"
          element={
            <ProtectedRoute userType="Wholesaler">
              <WholesalerProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/cart"
          element={
            <ProtectedRoute userType="Wholesaler">
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/orders"
          element={
            <ProtectedRoute userType="Wholesaler">
              <WholesalerOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/profile"
          element={
            <ProtectedRoute userType="Wholesaler">
              <Profile role="Wholesaler" />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
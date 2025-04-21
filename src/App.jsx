import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerRegister from "./pages/manufacturer/Register";
import WholesalerRegister from "./pages/wholesaler/Register";
import ManufacturerLogin from "./pages/manufacturer/Login";
import WholesalerLogin from "./pages/wholesaler/Login";
import ManufacturerProducts from "./pages/manufacturer/ManufacturerProducts";
import WholesalerProducts from "./pages/wholesaler/WholesalerProducts.jsx";
import WholesalerOrders from "./pages/wholesaler/WholesalerOrders";
import ManufacturerDashboard from "./pages/manufacturer/ManufacturerDashboard";
import WholesalerDashboard from "./pages/wholesaler/WholesalerDashboard";
import Cart from "./pages/wholesaler/Cart";
import Profile from "./pages/shared/Profile";
import Landing from "./pages/Landing";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";

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
            <ProtectedRoute userType="manufacturer">
              <ManufacturerProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manufacturer/profile"
          element={
            <ProtectedRoute userType="manufacturer">
              <Profile role="Manufacturer" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manufacturer/dashboard"
          element={
            <ProtectedRoute userType="manufacturer">
              <ManufacturerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/products"
          element={
            <ProtectedRoute userType="wholesaler">
              <WholesalerProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/cart"
          element={
            <ProtectedRoute userType="wholesaler">
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/orders"
          element={
            <ProtectedRoute userType="wholesaler">
              <WholesalerOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/profile"
          element={
            <ProtectedRoute userType="wholesaler">
              <Profile role="Wholesaler" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wholesaler/dashboard"
          element={
            <ProtectedRoute userType="wholesaler">
              <WholesalerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

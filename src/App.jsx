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
import ManufacturerNotifications from "./components/Notification.jsx";
import CheckoutPayment from "./components/CheckoutPayment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/manufacturer/register" element={<ManufacturerRegister />} />
        <Route path="/wholesaler/register" element={<WholesalerRegister />} />
        <Route path="/manufacturer/login" element={<ManufacturerLogin />} />
        <Route path="/wholesaler/login" element={<WholesalerLogin />} />
        <Route path="/manufacturer/notifications" element={<ManufacturerNotifications />} />
        <Route path="/checkoutpayment" element={<CheckoutPayment />} />


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
          path="/manufacturer/dashboard"
          element={
            <ProtectedRoute userType="Manufacturer">
              <ManufacturerDashboard />
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

        <Route
  path="/manufacturer/profile"
  element={
    <ProtectedRoute userType="Manufacturer">
      <Profile role="Manufacturer" />
    </ProtectedRoute>
  }
/>

        <Route
          path="/wholesaler/dashboard"
          element={
            <ProtectedRoute userType="Wholesaler">
              <WholesalerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

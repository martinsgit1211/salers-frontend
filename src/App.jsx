import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerRegister from "./pages/manufacturer/Register";
import WholesalerRegister from "./pages/wholesaler/Register";
import ManufacturerLogin from "./pages/manufacturer/Login";
import WholesalerLogin from "./pages/wholesaler/Login";
import ManufacturerProducts from "./pages/manufacturer/ManufacturerProducts";
import WholesalerProducts from "./pages/wholesaler/WholesalerProducts.jsx";
// import ManufacturerOrders from "./pages/manufacturer/ManufacturerOrders";
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
        <Route path="/manufacturer/products" element={<ManufacturerProducts />} />
        <Route path="/wholesaler/products" element={<WholesalerProducts />}/>
        <Route path="/manufacturer/profile" element={<Profile role="Manufacturer" />} />
        <Route path="/wholesaler/profile" element={<Profile role="Wholesaler" />} />
        <Route path="/wholesaler/cart" element={<Cart />} />
        <Route path="/wholesaler/orders" element={<WholesalerOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
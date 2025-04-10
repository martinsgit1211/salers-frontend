import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManufacturerRegister from "./pages/manufacturer/Register";
import WholesalerRegister from "./pages/wholesaler/Register";
import ManufacturerLogin from "./pages/manufacturer/Login";
import WholesalerLogin from "./pages/wholesaler/Login";
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
      </Routes>
    </Router>
  );
}

export default App;
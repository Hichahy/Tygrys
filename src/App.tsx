import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import "./App.scss";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

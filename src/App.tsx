import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;

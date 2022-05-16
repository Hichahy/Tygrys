import React, { useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Product from "./components/Product/Product";

const App = () => {
  //go up on change location
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/produkt/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

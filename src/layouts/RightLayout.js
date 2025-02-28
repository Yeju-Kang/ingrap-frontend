import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import ProductsPage from "../pages/ProductPage/ProductPage";
import DrawingPage from "../pages/DrawingPage/DrawingPage";

function RightLayout() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/drawing" element={<DrawingPage />} />
    </Routes>
  );
}

export default RightLayout;

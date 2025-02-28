import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import CustomCursor from "./components/CustomCursor/CustomCursor";
// import ProductsPage from "./pages/ProductPage/ProductPage";
// import DrawingPage from "./pages/DrawingPage/DrawingPage";

function App() {
  return (
    <>
      <CustomCursor />
      <MainLayout>
        {" "}
        {/* 전체 레이아웃 감싸기 */}
        <Routes>
          <Route index element={<MainPage />}></Route>
          {/* <Route path="/main" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/drawing" element={<DrawingPage />} /> */}
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

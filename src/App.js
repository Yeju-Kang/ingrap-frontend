import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { allRoutes } from "./routes/routes";
import HomePage from "./pages/HomePage/HomePage"; // ✅ 루트(`/`)용 홈 페이지 추가

function App() {
  return (
    <>
      <CustomCursor />
      <MainLayout>
        <Routes>
          {/* ✅ 홈 페이지 (`/`) 추가 */}
          <Route path="/" element={<HomePage />} />

          {/* ✅ 기존 페이지들 자동 등록 */}
          {allRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

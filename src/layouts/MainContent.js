import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAllRoutes } from "../routes/routes"; // ✅ routes.js에서 가져오기
import HomePage from "../features/home/pages/HomePage";

function MainContent() {
  const allRoutes = useAllRoutes();

  return (
    <Routes>
      {/* ✅ HomePage는 margin 없음 (자체적으로 scroll 관리) */}
      <Route path="/" element={<HomePage />} />
      
      {/* ✅ 일반 페이지는 marginTop 제거 (MainLayout이 Header를 관리하므로 불필요) */}
      {allRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default MainContent;

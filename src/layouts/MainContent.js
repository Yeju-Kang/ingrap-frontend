import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAllRoutes  } from "../routes/routes"; // ✅ routes.js에서 가져오기
import HomePage from "../pages/HomePage/HomePage";

function MainContent() {
  const allRoutes = useAllRoutes();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {allRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default MainContent;

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
  <React.Fragment key={path}>
    <Route path={path} element={<div style={{ marginTop: "80px" }}>{element}</div>} />
  </React.Fragment>
))}
    </Routes>
  );
}

export default MainContent;

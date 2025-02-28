import React from "react";
import { Routes, Route } from "react-router-dom";
import { allRoutes } from "../routes/routes"; // ✅ routes.js에서 가져오기

function MainContent() {
  return (
    <Routes>
      {allRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default MainContent;

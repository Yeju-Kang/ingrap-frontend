import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme"; // ✅ 테마 불러오기
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { allRoutes } from "./routes/routes";
import HomePage from "./pages/HomePage/HomePage"; // ✅ 루트(`/`)용 홈 페이지 추가

function App() {
  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;

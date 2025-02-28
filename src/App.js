import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme"; // ✅ 테마 불러오기
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { useAllRoutes  } from "./routes/routes";
import HomePage from "./pages/HomePage/HomePage"; // ✅ 루트(`/`)용 홈 페이지 추가

function App() {
  const allRoutes = useAllRoutes();
  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <MainLayout>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;

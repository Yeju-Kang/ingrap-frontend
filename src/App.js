import React, {useEffect} from "react";
import theme from "./theme"; // ✅ 테마 불러오기
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Header from "./layouts/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    document.title =
      language === "ko"
        ? "인테리어가 당신의 손 안에 | 인그랩"
        : "Your Space, Your Way | INGRAP";
  }, [language]);

  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <Header />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;

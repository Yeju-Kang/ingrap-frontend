import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import theme from "./theme";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Header from "./layouts/Header/Header";
import { loginSuccess, logout, setAuthLoading} from "./store/authSlice";
import { checkAuth } from "./features/auth/auth.api";

function App() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await checkAuth(); // ✅ 쿠키 기반으로 인증
        dispatch(loginSuccess(res.data));
      } catch {
        dispatch(logout());
      } finally {
        dispatch(setAuthLoading(false)); // ✅ 완료 후 로딩 false
      }
    };

    fetchUser();
  }, []);
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
      <MainLayout />
    </ThemeProvider>
  );
}

export default App

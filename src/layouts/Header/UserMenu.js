import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import LoginModal from "../../pages/LogingPage/LoginModal";
import useTranslate from "../../hooks/useTranslate";

function UserMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage } = useTranslate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가

  useEffect(() => {
    console.log("🔥 location.state 변경 감지:", location.state);
    
    if (location.state?.openLoginModal) {
      console.log("🔔 로그인 모달 열기 요청 감지!");
      setIsLoginOpen(true);

      // ✅ 상태를 초기화 (replace: true로 state 삭제)
      setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, navigate]); // ✅ location.state가 변경될 때 실행

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* ✅ 로그인 여부에 따라 다른 UI 표시 */}
      {isLoggedIn ? (
        <>
          {/* ✅ 마이페이지 버튼 (로그인 상태) */}
          <IconButton onClick={() => navigate("/mypage")} sx={{ padding: "8px" }}>
            <PersonOutline sx={{ fontSize: 36, color: "var(--text-color)" }} />
          </IconButton>

          {/* ✅ 장바구니 버튼 (로그인 상태) */}
          <IconButton onClick={() => navigate("/cart")} sx={{ padding: "8px" }}>
            <ShoppingBagOutlined sx={{ fontSize: 36, color: "var(--text-color)" }} />
          </IconButton>
        </>
      ) : (
        <>
          {/* ✅ 로그인 버튼 */}
          <IconButton
            variant="outlined"
            sx={{
              borderRadius: "4px"
            }}
            onClick={() => setIsLoginOpen(true)}
          >
             <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "var(--text-color)",
              transition: "color 0.3s ease-in-out", // ✅ 색상 변경 애니메이션
            }}
          >
            LOGIN
          </Typography>
          </IconButton>
        </>
      )}

      {/* ✅ 언어 변경 버튼 */}
      <IconButton
        onClick={toggleLanguage}
        sx={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          transition: "background-color 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "var(--text-color)" }}>
          {language === "ko" ? "한" : "A"}
        </Typography>
      </IconButton>

      {/* ✅ 로그인 모달 */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Box>
  );
}

export default UserMenu;

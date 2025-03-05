import React, { useState } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../pages/LogingPage/LoginModal";
import useTranslate from "../../hooks/useTranslate";

function UserMenu() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useTranslate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가

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
          <Button
            variant="outlined"
            sx={{
              borderColor: "var(--text-color)",
              color: "var(--text-color)",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() => setIsLoginOpen(true)}
          >
            LOGIN
          </Button>
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

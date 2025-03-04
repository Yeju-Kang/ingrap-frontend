import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동을 위한 훅 추가
import LoginModal from "../../pages/LogingPage/LoginModal";
import useTranslate from "../../hooks/useTranslate";

function UserMenu() {
  const navigate = useNavigate(); // ✅ React Router 페이지 이동 함수
  const { language, toggleLanguage } = useTranslate();
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* ✅ 로그인 버튼 */}
      <IconButton onClick={() => setIsLoginOpen(true)} sx={{ padding: "8px" }}>
        <PersonOutline sx={{ fontSize: 36, color: "var(--text-color)" }} />
      </IconButton>

      {/* ✅ 쇼핑백 버튼 → 클릭 시 /cart 페이지로 이동 */}
      <IconButton onClick={() => navigate("/cart")} sx={{ padding: "8px" }}>
        <ShoppingBagOutlined sx={{ fontSize: 36, color: "var(--text-color)" }} />
      </IconButton>

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
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            color: "var(--text-color)",
          }}
        >
          {language === "ko" ? "한" : "A"}
        </Typography>
      </IconButton>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Box>
  );
}

export default UserMenu;
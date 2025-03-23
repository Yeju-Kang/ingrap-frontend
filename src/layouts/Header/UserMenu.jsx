import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTranslate from "../../hooks/useTranslate";

function UserMenu() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useTranslate();
  const { user, isAuthenticated, isAuthLoading } = useSelector((state) => state.auth);

  // ✅ 실제로 사용자 정보가 있는지 체크
  const loggedIn = isAuthenticated && user;

  // ✅ 인증 확인 중이면 UI 렌더링하지 않음
  if (isAuthLoading) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {loggedIn ? (
        <>
          <IconButton onClick={() => navigate("/profile")} sx={{ padding: "8px" }}>
            <PersonOutline sx={{ fontSize: 36, color: "var(--text-color)" }} />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")} sx={{ padding: "8px" }}>
            <ShoppingBagOutlined sx={{ fontSize: 36, color: "var(--text-color)" }} />
          </IconButton>
        </>
      ) : (
        <IconButton
          variant="outlined"
          sx={{ borderRadius: "4px" }}
          onClick={() => navigate("/login")}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "var(--text-color)",
              transition: "color 0.3s ease-in-out",
            }}
          >
            LOGIN
          </Typography>
        </IconButton>
      )}

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
    </Box>
  );
}

export default UserMenu;

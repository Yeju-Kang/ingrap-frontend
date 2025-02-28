import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import Button from "../components/Button";
import { menuRoutes } from "../routes/routes";
import logo from "../assets/images/image.png";
import LoginModal from "../components/LoginModal";

function Header() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [language, setLanguage] = useState("한"); // ✅ 기본값: '한'
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (!hovering) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovering]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "한" ? "A" : "한"));
    console.log(`언어 변경: ${language === "한" ? "English" : "Korean"}`);
  };

  return (
    <>
      {/* 헤더 감지용 투명 박스 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: visible ? "66px" : "10px",
          zIndex: 999,
          backgroundColor: "transparent",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
      <Box
        sx={{
          position: "fixed",
          top: visible || hovering ? 0 : "-70px",
          left: 0,
          width: "100%",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          zIndex: 1000,
          backgroundColor: "rgba(245, 245, 245, 0.7)",
          transition: "top 0.3s ease-in-out",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* 왼쪽 메뉴 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {menuRoutes.map(({ label, path }) => (
            <Button
              key={label}
              disableClickEffect={true}
              onClick={() => navigate(path)}
              variant="text"
              customColor="transparent"
              hoverColor="transparent"
            >
              <Typography
                sx={{
                  fontSize: 13.5,
                  fontWeight: "bold",
                  color: "var(--text-color)",
                }}
              >
                {label}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* 중앙 로고 */}
        <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
          <Box
            component="img"
            src={logo}
            sx={{
              height: "40px",
              width: "auto",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* 오른쪽 메뉴 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            onClick={() => setIsLoginOpen(true)}
            sx={{ padding: "8px" }}
          >
            <PersonOutline sx={{ fontSize: 24, color: "var(--text-color)" }} />
          </IconButton>
          <IconButton sx={{ padding: "8px" }}>
            <ShoppingBagOutlined sx={{ fontSize: 24, color: "var(--text-color)" }} />
          </IconButton>
          <IconButton
            onClick={toggleLanguage}
            sx={{
              width: 40, // ✅ 가로 & 세로 동일한 크기로 설정
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%", // ✅ 원형 유지
              transition: "background-color 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // ✅ 클릭 시 자연스러운 원형 배경
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                color: "var(--text-color)",
              }}
            >
              {language}
            </Typography>
          </IconButton>
        </Box>
      </Box>

      {/* 로그인 모달 */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Header;

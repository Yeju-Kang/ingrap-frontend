import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "../components/Button";
import { menuRoutes } from "../routes/routes";
import logo from "../assets/images/logo_brown.png"; // 로고 import
import LoginModal from "../components/LoginModal"; // ✅ 로그인 모달 import

function Header() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false); // ✅ 로그인 모달 상태

  return (
    <>
      <Box
        sx={{
          position: "fixed", // ✅ 화면 상단 고정
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          zIndex: 1000, // ✅ 모든 요소보다 위에 위치
        }}
      >
        {/* ✅ 로고 추가 */}
        <Box
          component="img"
          src={logo}
          sx={{
            height: "40px",
            width: "auto",
          }}
        />

        {/* ✅ 메뉴 버튼 */}
        <Box sx={{ display: "flex", gap: "10px" }}>
          {menuRoutes.map(({ label, path }) => (
            <Button
              key={label}
              onClick={() => navigate(path)}
              customColor="var(--button-color)"
              textColor="var(--text-color)"
              hoverColor="var(--button-hover)"
              variant="text"
            >
              {label}
            </Button>
          ))}
          <Button
            onClick={() => setIsLoginOpen(true)} // ✅ 로그인 버튼 클릭 시 모달 열기
            customColor="var(--button-color)"
            textColor="var(--text-color)"
            hoverColor="var(--button-hover)"
            variant="text"
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* ✅ 로그인 모달 (오버레이 포함) */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Header;

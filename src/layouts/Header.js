import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "../components/Button";
import { menuRoutes } from "../routes/routes";
import logo from "../assets/images/logo_brown.png"; // 로고 import
import LoginModal from "../components/LoginModal"; // ✅ 로그인 모달 import

function Header() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false); // ✅ 모달 상태 추가

  return (
    <>
      <Box
        sx={{
          position: "fixed", // ✅ 화면 상단 고정
          top: 0,
          left: 0,
          width: "100%",
          height: "60px", // ✅ 고정 높이 설정
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 로고 왼쪽, 메뉴 오른쪽 정렬
          padding: "10px 20px",
          zIndex: 1000, // ✅ 다른 요소보다 위에 위치
        }}
      >
        {/* ✅ 로고 추가 */}
        <Box
          component="img"
          src={logo}
          sx={{
            height: "40px", // 버튼 높이에 맞춤
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
          {/* ✅ 로그인 버튼 클릭 시 모달 열림 */}
          <Button
            customColor="var(--button-color)"
            textColor="var(--text-color)"
            hoverColor="var(--button-hover)"
            variant="text"
            onClick={() => setOpenModal(true)}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* ✅ 로그인 모달 (isOpen 상태 전달) */}
      <LoginModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default Header;

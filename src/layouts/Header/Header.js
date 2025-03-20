import React, { useState } from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

const Header = ({ isVisible, isTop }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* ✅ 헤더 위에 마우스 감지 영역 추가 */}
      {!isTop && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "40px", // ✅ 마우스 감지 영역 높이
            background: "transparent",
            zIndex: 999,
          }}
          onMouseEnter={() => setIsHovered(true)} // ✅ 마우스 올리면 헤더 보이기
        />
      )}

      <Box
        sx={{
          position: "fixed",
          top: isTop || isVisible || isHovered ? 0 : "-80px",
          left: 0,
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          zIndex: 1000,
          backgroundColor: "rgba(245, 245, 245, 0.9)",
          transition: "top 0.3s ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)} // ✅ 헤더에서 마우스 올리면 유지
        onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)} // ✅ 마우스 떼면 일정 시간 후 숨김
      >
        <Logo />
        <NavMenu />
        <UserMenu />
      </Box>
    </>
  );
};

export default Header;

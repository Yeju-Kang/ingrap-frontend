import React, { useState } from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

const Header = ({ isVisible, isTop }) => {
  const [isHovered, setIsHovered] = useState(false);

  const shouldShow = isTop || isVisible || isHovered;

  return (
    <>
      {!isTop && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "40px", // 마우스 감지 영역
            zIndex: 999,
            background: "transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
        />
      )}

<Box
  sx={{
    position: "fixed",
    top: isTop ? 0 : (shouldShow ? 0 : "-80px"), // ✅ 최상단이면 무조건 top: 0
    left: 0,
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
    backgroundColor: "rgba(245, 245, 245, 0.9)",
    transition: isTop ? "none" : "top 0.3s ease-in-out", // ✅ 최상단일 땐 transition 제거
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)}
>



        <Logo />
        <NavMenu />
        <UserMenu />
      </Box>
    </>
  );
};


export default Header;

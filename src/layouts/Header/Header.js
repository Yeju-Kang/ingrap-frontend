import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

function Header() {
  const [visible, setVisible] = useState(true); // ✅ 헤더 보임 여부
  const [hovering, setHovering] = useState(false); // ✅ 마우스 호버 상태
  const [isAtTop, setIsAtTop] = useState(true); // ✅ 최상단 여부 확인
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log("✅ handleScroll 실행됨");
      console.log("📌 현재 스크롤 위치:", document.documentElement.scrollTop);
    };
  
    document.addEventListener("scroll", handleScroll, { passive: false });
  
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ✅ 최상단 감지용 박스 */}
      <Box
        id="top-sentinel"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px", // ✅ 1px 크기의 감지 박스
        }}
      />

      {/* ✅ 실제 헤더 */}
      <Box
        sx={{
          position: "fixed",
          top: visible ? 0 : "-80px", // ✅ 부드럽게 숨김/표시
          left: 0,
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          zIndex: 1000,
          backgroundColor: "rgba(245, 245, 245, 0.95)",
          transition: "top 0.4s ease-in-out",
        }}
        onMouseEnter={() => setHovering(true)} // ✅ 마우스를 올리면 헤더 보이기
        onMouseLeave={() => setHovering(false)} // ✅ 마우스를 떼면 다시 숨김
      >
        <NavMenu />
        <Logo />
        <UserMenu />
      </Box>
    </>
  );
}

export default Header;
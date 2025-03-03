import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

function Header() {
  const [hovering, setHovering] = useState(false); // ✅ 마우스 오버 여부
  const [isAtTop, setIsAtTop] = useState(true); // ✅ 최상단 여부
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const contentRef = useRef(null);

  useEffect(() => {
    if (isAboutPage) {
      contentRef.current = document.getElementById("about-content");
    } else {
      contentRef.current = window;
    }

    if (!contentRef.current) return;

    // ✅ 스크롤 감지 함수 (최상단 여부 체크)
    const handleScroll = () => {
      const currentScrollY = isAboutPage
      
        ? contentRef.current.scrollTop
        : window.scrollY;
        console.log('xxx', currentScrollY)

      setIsAtTop(currentScrollY === 0);
    };

    contentRef.current.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [isAboutPage]);

  return (
    <>
      {/* ✅ 마우스 감지 영역 (헤더가 숨겨졌을 때도 감지 가능) */}
      {!isAtTop && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "40px", // ✅ 마우스를 감지할 영역 높이
            background: "transparent", // ✅ 감지용이라 보이지 않게 설정
            zIndex: 999, // ✅ 헤더보다 아래에 배치
          }}
          onMouseEnter={() => setHovering(true)} // ✅ 마우스를 가져다 대면 헤더 보이기
        />
      )}

      {/* ✅ 실제 헤더 */}
      <Box
        sx={{
          position: "fixed",
          top: isAtTop || hovering ? 0 : "-80px", // ✅ 완전히 숨기지 않고 반쯤 보이게 조정
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
          boxShadow: isAtTop || hovering ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
        }}
        onMouseLeave={() => setTimeout(() => setHovering(false), 500)} // ✅ 마우스를 떼면 일정 시간 후 다시 숨김
      >
        <NavMenu />
        <Logo />
        <UserMenu />
      </Box>
    </>
  );
}

export default Header;
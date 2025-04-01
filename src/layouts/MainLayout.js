import React, { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import MainContent from "./MainContent";

const MainLayout = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage || !scrollRef.current) return;

    const handleScroll = () => {
      const currentScrollY = scrollRef.current.scrollTop;
      const atTop = currentScrollY === 0;
      setIsTop(atTop);

      // 특정 위치 이하거나 위로 스크롤할 때 헤더 보여줌
      setShowHeader(currentScrollY <= 50 || currentScrollY < lastScrollY);

      setLastScrollY(currentScrollY);
    };

    const scrollEl = scrollRef.current;
    scrollEl.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, lastScrollY]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflowY: isHomePage ? "hidden" : "auto",
        overflowX: "hidden",
      }}
    >
      {/* 홈이 아닐 때만 헤더 렌더링 */}
      {!isHomePage && <Header isVisible={showHeader} isTop={isTop} />}

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          flex: 1,
          paddingTop: isHomePage ? 0 : "80px", // ✅ 홈이 아니면 헤더 높이만큼 padding
          margin: 0,
          width: "100%",
        }}
      >
        <MainContent />
      </Container>
    </Box>
  );
};

export default MainLayout;

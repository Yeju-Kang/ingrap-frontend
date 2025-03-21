import React, { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import MainContent from "./MainContent";

const MainLayout = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const scrollRef = useRef(null);
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage || !scrollRef.current) return;

    const handleScroll = () => {
      const currentScrollY = scrollRef.current.scrollTop;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    scrollRef.current.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage, lastScrollY]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", overflowY: isHomePage ? "hidden" : "auto" }}>
      {/* ✅ HomePage가 아닐 때만 Header 표시 */}
      {!isHomePage && <Header isVisible={isHeaderVisible} />}

      <Container
        ref={scrollRef}
        maxWidth={false}
        disableGutters
        sx={{
          flex: 1,
          height: "calc(100vh - 80px)",
          paddingTop: "80px", // ✅ Header 높이만큼 컨텐츠 위치 보정
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

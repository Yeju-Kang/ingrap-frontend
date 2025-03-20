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
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* ✅ 홈 페이지에서는 Header가 개별적으로 스크롤 관리하도록 변경 */}
      {!isHomePage && <Header isVisible={isHeaderVisible} />}

      <Container
        ref={scrollRef}
        maxWidth={false}
        disableGutters
        sx={{
          flex: 1,
          overflowY: isHomePage ? "unset" : "auto", // ✅ HomePage에서는 자체 스크롤 관리
          height: "calc(100vh - 80px)",
          padding: 0,
          margin: 0,
          width: "100%",
          marginTop: "80px"
        }}
      >
        <MainContent />
      </Container>
    </Box>
  );
};

export default MainLayout;

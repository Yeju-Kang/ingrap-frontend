import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import backgroundImage from "../../assets/images/room.png"; // ✅ 이미지 정상 경로

function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const [darken, setDarken] = useState(1); // ✅ 초기 밝기 (1 = 밝음, 0 = 완전 검정)
  const [text, setText] = useState(""); // ✅ 타이핑 애니메이션 텍스트
  const fullText = "Your Space, Your Way!";
  const [showCursor, setShowCursor] = useState(true); // ✅ 깜빡이는 커서 효과

  useEffect(() => {
    // ✅ 새로고침 시 무조건 최상단으로 이동 (즉시 실행)
    window.scrollTo(0, 0);

    // ✅ 0.5초 후 이미지 등장
    const timer = setTimeout(() => {
      setLoaded(true);
      window.scrollTo(0, 0); // ✅ 로드 완료 후에도 한 번 더 최상단 이동
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const darkenLevel = Math.min(1, scrollY / maxScroll);
      setDarken(1 - darkenLevel);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darken === 0) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(typingInterval);
      }, 150);
    }
  }, [darken]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box sx={{ height: "200vh", backgroundColor: "var(--second-color)" }}>
      {/* ✅ 배경 이미지 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.3)",
          transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
          filter: `brightness(${Math.max(0, darken)})`,
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      />

      {/* ✅ 어두워진 배경일 때 텍스트 애니메이션 */}
      {darken === 0 && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "var(--primary-color)",
            fontSize: "3rem",
            fontWeight: "bold",
            display: "flex",
          }}
        >
          {text}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "10px",
              height: "60px",
              backgroundColor: showCursor
                ? "var(--primary-color)"
                : "transparent",
              marginLeft: "4px",
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default AboutPage;

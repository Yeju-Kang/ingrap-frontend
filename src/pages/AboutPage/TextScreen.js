import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Box } from "@mui/material";

const TextScreen = forwardRef(({ currentSection, index }, ref) => {
  const [text, setText] = useState("");
  const fullText = "Your Space, Your Way!";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          setText(fullText.slice(0, index + 1));
          index++;
          if (index === fullText.length) clearInterval(typingInterval);
        }, 150);
      }, 1000);
    } else {
      setText(""); // ✅ blackScreen이 사라질 때 텍스트 제거
    }
  }, [isVisible]);

  return (
    <Box
      ref={(el) => {
        sectionRef.current = el;
        if (ref) ref(el);
      }}
      sx={{
        position: "fixed",
        top: isVisible ? "0%" : "100%",
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        transition: "top 1s ease-in-out",
      }}
    >
      {text}
    </Box>
  );
});

export default TextScreen;
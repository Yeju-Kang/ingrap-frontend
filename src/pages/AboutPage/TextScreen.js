import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const TextScreen = ({ isActive }) => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Your Space, Your Way!";

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          setText(fullText.slice(0, index + 1));
          index++;
          if (index === fullText.length) clearInterval(typingInterval);
        }, 150);
      }, 1000);
    } else {
      setTimeout(() => setText(""), 800);
    }
  }, [isActive]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        position: "absolute",
        top: 0,
        left: 0,
        transform: isActive ? "translateY(0%)" : "translateY(100%)", // ✅ 위에서 아래로 이동하도록 변경
        transition: "transform 1s ease-in-out",
      }}
    >
      {text}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "10px",
          height: "50px",
          backgroundColor: showCursor ? "white" : "transparent",
          marginLeft: "4px",
        }}
      />
    </Box>
  );
};

export default TextScreen;
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const TextScreen = ({ isActive }) => {
  const [text, setText] = useState("");
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
      }}
    >
      {text}
    </Box>
  );
};

export default TextScreen;
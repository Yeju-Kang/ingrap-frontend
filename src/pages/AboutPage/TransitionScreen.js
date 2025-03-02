import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

function TransitionScreen({ isActive, onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Your Space, Your Way!";
  const [showCursor, setShowCursor] = useState(true);
  const [blackScreenMoving, setBlackScreenMoving] = useState(false);
  const [textAnimationFinished, setTextAnimationFinished] = useState(false);

  useEffect(() => {
    if (isActive) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(typingInterval);
          setTextAnimationFinished(true);
        }
      }, 150);
    }
  }, [isActive]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (textAnimationFinished) {
        setBlackScreenMoving(true);
        setTimeout(onComplete, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [textAnimationFinished]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: blackScreenMoving ? "-100vh" : "0%",
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isActive ? 1 : 0,
        transition: "top 1.5s ease-in-out, opacity 1.5s ease-in-out",
        zIndex: 10,
      }}
    >
      {isActive && !blackScreenMoving && (
        <Typography
          sx={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            display: "flex",
            opacity: isActive ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {text}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "10px",
              height: "60px",
              backgroundColor: showCursor ? "white" : "transparent",
              marginLeft: "4px",
            }}
          />
        </Typography>
      )}
    </Box>
  );
}

export default TransitionScreen;
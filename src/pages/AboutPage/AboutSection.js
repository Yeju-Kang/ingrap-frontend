import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

function AboutSection({ image, special = false, isActive }) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      if (special) {
        setTimeout(() => setAnimate(true), 500);
      }
    } else {
      setVisible(false);
      setAnimate(false);
    }
  }, [isActive, special]);

  return (
    <Box
      sx={{
        position: "static",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: visible ? 1 : 0,
        transform: special ? (animate ? "scale(1)" : "scale(0.85)") : "translateY(100%)",
        transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    />
  );
}

export default AboutSection;
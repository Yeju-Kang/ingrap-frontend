import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

const RoomSection = React.forwardRef(({ image, index, currentSection, first = false, last = false }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: first
          ? "scale(1)"
          : "none",
        transition: "top 1s ease-in-out",
      }}
    />
  );
});

export default RoomSection;
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const RoomSection = ({ image, isActive, first = false }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (first) {
      setTimeout(() => setLoaded(true), 100);
    }
  }, [first]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: first
          ? !loaded
            ? "scale(0.3)" // ✅ 첫 번째 섹션만 축소 상태에서 등장
            : "scale(1)"
          : "none",
        transition: "transform 1s ease-in-out",
      }}
    />
  );
};

export default RoomSection;
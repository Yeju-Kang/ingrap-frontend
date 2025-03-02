import React, { forwardRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

const RoomSection = forwardRef(({ index, image, currentSection, first = false }, ref) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (first && currentSection === 0) {
      setTimeout(() => setLoaded(true), 100);
    }
  }, [currentSection, first]);

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute", // ✅ 모든 섹션이 한 화면 위에 쌓이도록 설정
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: 0,
        left: 0,
        transform: first
          ? !loaded
            ? "scale(0.3)" // ✅ 첫 번째 섹션은 축소된 상태에서 확대
            : "scale(1)" // ✅ 확대 애니메이션
          : currentSection === index
          ? "translateY(0%)" // ✅ 현재 섹션
          : currentSection > index
          ? "translateY(-100%)" // ✅ 위로 사라짐
          : "translateY(100%)", // ✅ 아래에서 올라옴
        transition: "transform 1s ease-in-out",
      }}
    />
  );
});

export default RoomSection;
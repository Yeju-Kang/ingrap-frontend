import React from "react"
import { Box } from "@mui/material"

const FooterSection = ({image, isLoaded, currentSection, index, first = false, last = false}) => {
    return (
        <Box
        sx={{
          position: currentSection > 4 ? "absolute" : "fixed", // ✅ Room4 아래에 위치하도록 설정
          left: 0,
          bottom: 0,
          width: "100%",
          height: "40vh",
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          transform:
            currentSection === 5
              ? "translateY(0%)" // ✅ 푸터 등장 (자연스럽게 위로 올라옴)
              : "translateY(100%)", // ✅ 푸터가 자연스럽게 아래로 사라짐
          transition: "transform 1s ease-in-out", // ✅ 부드러운 전환 애니메이션 추가
        }}
      >
        Footer Section
      </Box>
    )

}

export default FooterSection;
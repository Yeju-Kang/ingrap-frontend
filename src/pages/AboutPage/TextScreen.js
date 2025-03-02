import React, {useState, useEffect} from "react"
import { Box } from "@mui/material"

const TextScreen = ({currentSection, index}) => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Your Space, Your Way!";

  useEffect(() => {
    if (currentSection === 1) {
      // ✅ blackScreen이 화면을 덮은 후 (1초 후) 텍스트 애니메이션 시작
      setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          setText(fullText.slice(0, index + 1));
          index++;
          if (index === fullText.length) clearInterval(typingInterval);
        }, 150);
      }, 1000); // ✅ blackScreen 애니메이션 시간 (1초) 후에 실행
    } else {
        setTimeout(() =>{
            setText("");
        }, 800)
    } 
  }, [currentSection]); 

    return (
        <Box
        sx={{
          position: "fixed",
          top: currentSection === 1
            ? "0%" // ✅ 검은 배경이 Room1과 함께 이동
            : currentSection > 1
            ? "-100%" // ✅ 위로 사라짐
            : "100%", // ✅ 아래에서 올라옴
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "var(--background-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary-color)",
          fontSize: "3rem",
          fontWeight: "bold",
          transition: "top 1s ease-in-out",
        }}
      >
        {text}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "10px",
            height: "50px",
            backgroundColor: showCursor ? "var(--primary-color)" : "transparent",
            marginLeft: "4px",
          }}
        />
      </Box>
    )

}

export default TextScreen;
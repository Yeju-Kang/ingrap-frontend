import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";

function AboutPage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4", "footer"];
  const [currentSection, setCurrentSection] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Your Space, Your Way!";
  const [showCursor, setShowCursor] = useState(true);
  let isScrolling = useRef(false); // ✅ 스크롤 이벤트가 실행 중인지 확인

  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (currentSection === 1) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(typingInterval);
      }, 150);
    }
  }, [currentSection]);
  
  useEffect(() => {
    let scrollThreshold = 200; // ✅ 스크롤 감지 임계값
    let accumulatedScroll = 0; // ✅ 누적된 스크롤 값
    const scrollDelay = 800; // ✅ 연속 스크롤 방지 (0.8초)
  
    const handleScroll = (event) => {
      if (isScrolling.current) return; // ✅ 스크롤 애니메이션이 끝나기 전에는 무시

      const scrollValue = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 50);
      console.log(event.deltaY, scrollValue)
      accumulatedScroll +=  scrollValue; // ✅ 누적된 스크롤 값 증가
  
      if (Math.abs(accumulatedScroll) > scrollThreshold) { // ✅ 일정 이상 스크롤 시
        isScrolling.current = true; // ✅ 다음 스크롤 이벤트 차단
  
        if (accumulatedScroll > 0 && currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        } else if (accumulatedScroll < 0 && currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
  
        accumulatedScroll = 0; // ✅ 누적 값 초기화
  
        setTimeout(() => {
          isScrolling.current = false; // ✅ 0.8초 후 스크롤 가능
        }, scrollDelay);
      }
    };
  
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentSection, sections.length]);
  
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      {/* Room1 - 첫 번째 배경 (확대 애니메이션) */}
      <Box
  sx={{
    position: "fixed",
    top: currentSection === 0
      ? "0%" // ✅ Room1이 정상적으로 보임
      : currentSection === 1
      ? "-100%" // ✅ Room1이 검은 화면과 함께 이동
      : "-100%", // ✅ 이후에도 유지
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: !isLoaded
      ? "scale(0.3)" // ✅ 최초 축소
      : "scale(1)", // ✅ 확대 후 유지
    transition: "top 1s ease-in-out, transform 1.5s ease-out",
  }}
/>

{/* 검은색 배경 & 텍스트 애니메이션 */}
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

      {/* Room2 ~ Room4 애니메이션 (아래에서 위로 등장하고, 위로 사라짐) */}
      {[backgroundImage2, backgroundImage3].map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "fixed",
            top:
              currentSection === index + 2
                ? "0%"
                : currentSection > index + 2
                ? "-100%"
                : "100%",
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "top 1s ease-in-out",
          }}
        />
      ))}
{/* Room4 */}
<Box
  sx={{
    position: "fixed",
    top:
      currentSection === 4
        ? "0%" // ✅ Room4가 정상적으로 보임
        : currentSection > 4
        ? "-40vh" // ✅ Footer가 드러나면서 Room4는 위로 사라짐
        : "100%", // ✅ Room3에서 Room4로 이동 시 아래에서 위로 등장
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImage4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "top 1s ease-in-out",
  }}
/>

<Box
  sx={{
    position: currentSection > 4 ? "absolute" : "fixed", // ✅ Room4 아래에 위치하도록 설정
    left: 0,
    bottom: 0,
    width: "100%",
    height: "40vh",
    backgroundColor: "var(--background-color)",
    color: "white",
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



    </Box>
  );
}

export default AboutPage;
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import RoomSection from "./RoomSection";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";
import TextScreen from "./TextScreen";
import FooterSection from "./FooterSection";

function AboutPage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4", "footer"];
  const [currentSection, setCurrentSection] = useState(0);
  let isScrolling = useRef(false); // ✅ 스크롤 이벤트가 실행 중인지 확인
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    let scrollThreshold = 200; 
    let accumulatedScroll = 0;
    const scrollDelay = 800; 
  
    const handleScroll = (event) => {
      if (isScrolling.current) return; 

      const scrollValue = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 50);
      accumulatedScroll +=  scrollValue; 
  
      if (Math.abs(accumulatedScroll) > scrollThreshold) { 
        isScrolling.current = true; 
  
        if (accumulatedScroll > 0 && currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        } else if (accumulatedScroll < 0 && currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
  
        accumulatedScroll = 0;
  
        setTimeout(() => {
          isScrolling.current = false; 
        }, scrollDelay);
      }
    };
  
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentSection, sections.length]);
  
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <RoomSection
      image={backgroundImage1}
      isLoaded={isLoaded}
      currentSection={currentSection}
      index={0}
      first
      />
      <TextScreen currentSection={currentSection} index={1} />
      {[backgroundImage2, backgroundImage3, backgroundImage4].map((image, index, arr) => (
        <RoomSection
          key={index}
         image={image}
         currentSection={currentSection}
         index={index + 2}
        last={index === arr.length-1}
        />
      ))}

<FooterSection currentSection={currentSection} />



    </Box>
  );
}

export default AboutPage;
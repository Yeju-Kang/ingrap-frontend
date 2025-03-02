import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import RoomSection from "./RoomSection";
import TextScreen from "./TextScreen";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";

function AboutPage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4"];
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.current.indexOf(entry.target);
            if (sectionIndex !== -1) {
              setCurrentSection(sectionIndex);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <Box sx={{ height: "100vh", overflowY: "auto", position: "relative" }}>
      {/* ✅ 첫 번째 이미지 (Room1) */}
      <RoomSection
        ref={(el) => (sectionRefs.current[0] = el)}
        image={backgroundImage1}
        currentSection={currentSection}
        first
      />

      {/* ✅ 검은색 배경 & 텍스트 애니메이션 */}
      <TextScreen
        ref={(el) => (sectionRefs.current[1] = el)}
        isActive={currentSection === 1}
      />

      {/* ✅ Room2 ~ Room4 */}
      {[backgroundImage2, backgroundImage3, backgroundImage4].map((image, index) => (
        <RoomSection
          key={index}
          ref={(el) => (sectionRefs.current[index + 2] = el)}
          image={image}
          currentSection={currentSection}
        />
      ))}
    </Box>
  );
}

export default AboutPage;
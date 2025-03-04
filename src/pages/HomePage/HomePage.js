import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import RoomSection from "./RoomSection";
import TextScreen from "./TextScreen";
import FooterSection from "./FooterSection";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";

function HomePage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4", "footer"];
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);
          if (sectionIndex !== -1) {
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.8 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <>
      {/* ✅ 전체 페이지를 스크롤 컨테이너로 설정 (Header에서 감지 가능) */}
      <Box
        id="home-content" // ✅ Header에서 감지할 수 있도록 id 추가
        sx={{ height: "100vh", overflowY: "auto", scrollSnapType: "y mandatory", position: "relative"}}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            sx={{
              width: "100%",
              height: index === sections.length - 1 ? "40vh" : "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "start",
            }}
          >
            {index === 0 && <RoomSection image={backgroundImage1} isActive={currentSection === 0} first />}
            {index === 1 && <TextScreen isActive={currentSection === 1} />}
            {[backgroundImage2, backgroundImage3, backgroundImage4].map(
              (image, i) => index === i + 2 && <RoomSection key={i} image={image} isActive={currentSection === i + 2} />
            )}
            {index === sections.length - 1 && <FooterSection />}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default HomePage;
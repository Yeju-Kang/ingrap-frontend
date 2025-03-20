import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import RoomSection from "./RoomSection";
import TextScreen from "./TextScreen";
import FooterSection from "./FooterSection";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";
import Header from "../../layouts/Header/Header";

function HomePage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4", "footer"];
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isTop, setIsTop] = useState(true); // ✅ 최상단 여부 감지
  const homeScrollRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);
          if (sectionIndex !== -1 && entry.isIntersecting) {
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

  useEffect(() => {
    const handleScroll = () => {
      if (!homeScrollRef.current) return;

      const currentScrollY = homeScrollRef.current.scrollTop;

      if (currentScrollY === 0) {
        setIsTop(true);
        setIsHeaderVisible(true);
      } else {
        setIsTop(false);
        setIsHeaderVisible(false);
      }
    };

    homeScrollRef.current.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (homeScrollRef.current) {
        homeScrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Header isVisible={isHeaderVisible} isTop={isTop} />

      <Box
        ref={homeScrollRef}
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          position: "relative",
        }}
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

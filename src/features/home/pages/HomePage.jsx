import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import RoomSection from "../components/RoomSection";
import TextScreen from "../components/TextScreen";
import FooterSection from "../components/FooterSection";
import Header from "../../../layouts/Header/Header"; 
import imageMap from "../../../assets/imageMap";

function HomePage() {
  const sections = ["room1", "blackScreen", "room2", "room3", "room4", "footer"];
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);
  const homeScrollRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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

  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!homeScrollRef.current) return;

      const currentScrollY = homeScrollRef.current.scrollTop;
      const atTop = currentScrollY === 0;
      setIsTop(atTop);

      setIsHeaderVisible(currentScrollY <= 50 || currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    const el = homeScrollRef.current;
    el?.addEventListener("scroll", handleScroll, { passive: true });

    return () => el?.removeEventListener("scroll", handleScroll);
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
          scrollBehavior: "smooth",
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
            {index === 0 && <RoomSection image={imageMap.section.home.room1} isActive={currentSection === 0} first />}
            {index === 1 && <TextScreen isActive={currentSection === 1} />}
            {[imageMap.section.home.room2, imageMap.section.home.room3, imageMap.section.home.room4].map(
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

import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import RoomSection from "./RoomSection";
import TextScreen from "./TextScreen";
import FooterSection from "./FooterSection";
import backgroundImage1 from "../../assets/images/room1.jpg";
import backgroundImage2 from "../../assets/images/room2.jpg";
import backgroundImage3 from "../../assets/images/room3.jpg";
import backgroundImage4 from "../../assets/images/room4.jpg";

function AboutPage() {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 }; // 50% 이상 보일 때 감지

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.current.indexOf(entry.target);
          setCurrentSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <RoomSection
        ref={(el) => (sections.current[0] = el)}
        image={backgroundImage1}
        index={0}
        currentSection={currentSection}
        first
      />
      <TextScreen ref={(el) => (sections.current[1] = el)} index={1} currentSection={currentSection} />
      {[backgroundImage2, backgroundImage3, backgroundImage4].map((image, index, arr) => (
        <RoomSection
          key={index}
          ref={(el) => (sections.current[index + 2] = el)}
          image={image}
          index={index + 2}
          currentSection={currentSection}
          last={index === arr.length - 1}
        />
      ))}
      <FooterSection ref={(el) => (sections.current[5] = el)} currentSection={currentSection} />
    </Box>
  );
}

export default AboutPage;
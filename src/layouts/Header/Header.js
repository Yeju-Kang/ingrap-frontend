import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu"

function Header() {
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (!hovering) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovering]);

  return (
    <>
      {/* 헤더 감지용 투명 박스 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: visible ? "66px" : "10px",
          zIndex: 999,
          backgroundColor: "transparent",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
      <Box
        sx={{
          position: "fixed",
          top: visible || hovering ? 0 : "-70px",
          left: 0,
          width: "100%",
          height: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          zIndex: 1000,
          backgroundColor: "rgba(245, 245, 245, 0.7)", 
          transition: "top 0.3s ease-in-out",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
       <NavMenu />
       <Logo />
<UserMenu />
</Box>
</>
  );
}

export default Header;

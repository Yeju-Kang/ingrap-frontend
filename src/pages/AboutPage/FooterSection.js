import React, { forwardRef } from "react";
import { Box } from "@mui/material";

const FooterSection = forwardRef(({ isActive }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40vh",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        transform: isActive ? "translateY(0%)" : "translateY(100%)",
        transition: "transform 1s ease-in-out",
      }}
    >
      Footer Section
    </Box>
  );
});

export default FooterSection;
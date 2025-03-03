import React from "react";
import { Box } from "@mui/material";

const FooterSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh", // ✅ 푸터 높이 고정
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      Footer Section
    </Box>
  );
};

export default FooterSection;
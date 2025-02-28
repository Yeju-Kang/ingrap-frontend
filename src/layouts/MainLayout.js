import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import MainContent from "./MainContent";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <MainContent />
    </Box>
  );
}

export default MainLayout;

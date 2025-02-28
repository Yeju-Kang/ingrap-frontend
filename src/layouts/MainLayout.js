import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import RightLayout from "./RightLayout";

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
      <RightLayout />
    </Box>
  );
}

export default MainLayout;

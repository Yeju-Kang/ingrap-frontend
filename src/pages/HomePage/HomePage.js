import React from "react";
import { Typography, Box } from "@mui/material";

function HomePage() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        🏠 인테리어가 당신의 손 안에!
      </Typography>
      <Typography variant="body1">
        인그랩을 통해 인테리어를 쉽고 편하게 경험하세요.
      </Typography>
    </Box>
  );
}

export default HomePage;

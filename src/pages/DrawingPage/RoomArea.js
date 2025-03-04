import React from "react";
import { Box, Typography } from "@mui/material";

const RoomArea = () => {
  return (
    <Box flex={1} display="flex" justifyContent="center" alignItems="center" sx={{ borderRadius: 4, border: "2px solid gray", mx: 2, position: "relative" }}>
      <Typography variant="h6" sx={{ color: "gray", position: "absolute", bottom: 10, right: 10 }}>🧭</Typography>
    </Box>
  );
};

export default RoomArea;
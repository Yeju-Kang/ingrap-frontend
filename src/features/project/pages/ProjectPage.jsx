import React from "react";
import { Box, Typography } from "@mui/material";
import CreateRoomCard from "../components/CreateRoomCard";

const ProjectPage = () => {
  return (
    <Box sx={{ px: 4, py: 4 }}>
      {/* 제목 */}
      <Typography variant="h5" fontWeight="bold" mb={3}>
        내 방 목록
      </Typography>

      {/* 카드 목록 */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <CreateRoomCard />
        <CreateRoomCard />
        <CreateRoomCard />
      </Box>
    </Box>
  );
};

export default ProjectPage;

import React from "react";
import { Box, Typography } from "@mui/material";
import SpaceCard from "../components/SpaceCard";
import CreateSpaceCard from "../components/CreateSpaceCard"; // 공간 생성 카드
import imageMap from "../../../assets/imageMap";

const SpacePage = () => {
  const spaceList = [
    { id: 1, name: "경렬의 공간", savedAt: "2024-03-26T10:00:00Z",   image: imageMap.section.home.room1,},
    { id: 2, name: "회의실 A", savedAt: "2024-03-26T10:00:00Z",   image: imageMap.section.home.room2, },
    // 공간이 없을 경우: const spaceList = [];
  ];

  const hasSpaces = spaceList.length > 0;

  return (
    <Box sx={{ px: 4, py: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        내 공간 목록
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {hasSpaces ? (
          <>
            {spaceList.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
            <CreateSpaceCard />
          </>
        ) : (
          <CreateSpaceCard />
        )}
      </Box>
    </Box>
  );
};

export default SpacePage;

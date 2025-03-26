import React from "react";
import { Box, Typography } from "@mui/material";
import SpaceCard from "../components/SpaceCard";
import CreateSpaceCard from "../components/CreateSpaceCard"; // 공간 생성 카드
import imageMap from "../../../assets/imageMap";
import HomeRounded   from "@mui/icons-material/HomeRounded";


const SpacePage = () => {
  const spaceList = [
    { id: 1, name: "경렬의 공간", savedAt: "2024-03-26T10:00:00Z",   image: imageMap.section.home.room1,},
    { id: 2, name: "회의실 A", savedAt: "2024-03-26T10:00:00Z",   image: imageMap.section.home.room2, },
  ];

  const hasSpaces = spaceList.length > 0;

  return (
    <Box sx={{ px: 4, py: 4,  pt: 1 }}>
    <Box display="flex" alignItems="center" gap={1} mb={2} >
  <HomeRounded sx={{ color: "var(--primary-color)", fontSize: "2.8rem" }} />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{
        color: "var(--text-color)",
        fontSize: "1.3rem",
        letterSpacing: "0.05em",
        lineHeight: 1.3,
      }}
    >
      나의 공간들
    </Typography>
    <Box
      sx={{
        height: "3px",
        width: "100%",
        backgroundColor: "var(--primary-color)",
        borderRadius: "2px",
        mt: "4px",
      }}
    />
  </Box>
</Box>
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

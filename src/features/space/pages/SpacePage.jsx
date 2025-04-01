import React from "react";
import { Box, Typography } from "@mui/material";
import SpaceCard from "../components/SpaceCard";
import CreateSpaceCard from "../components/CreateSpaceCard";
import imageMap from "../../../assets/imageMap";
import useTranslate from "../../../hooks/useTranslate";


const CARD_WIDTH = 400; 
const GAP = 24;

const SpacePage = () => {
    const { translate } = useTranslate();
  const MAX_CARDS = 4;

  const spaceList = [
    { id: 1, name: "자취방 B", savedAt: "2024-03-26T10:00:00Z", image: imageMap.section.home.room1 },
    { id: 2, name: "회의실 A", savedAt: "2024-03-26T10:00:00Z", image: imageMap.section.home.room2 },
  ];

  const visibleSpaces = spaceList.slice(0, MAX_CARDS);
  const remaining = MAX_CARDS - visibleSpaces.length;

  return (
    <Box sx={{ px: 4, py: 4, pt: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={4}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "var(--text-color)",
              fontSize: "1.3rem",
              letterSpacing: "0.05em",
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
          {translate("space.description")}
          </Typography>
          <Box
            sx={{
              height: "2px",
              width: "120px",
              backgroundColor: "var(--primary-color)",
              borderRadius: "2px",
              mt: "8px",
              mx: "auto",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, ${CARD_WIDTH}px)`,
            gap: `${GAP}px`,
            justifyContent: "center", 
            width: "100%",
            maxWidth: `calc(${CARD_WIDTH * 4 + GAP * 3}px)`, 
          }}
        >
          {visibleSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}

          {Array.from({ length: remaining }).map((_, index) => (
            <CreateSpaceCard key={`create-${index}`} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SpacePage;

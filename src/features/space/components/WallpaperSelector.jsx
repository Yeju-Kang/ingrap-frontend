import React from "react";
import { Box, Typography } from "@mui/material";

const wallpapers = [
    '/textures/wallpaper/Wallpaper001A_4K-PNG_Color.png',
    '/textures/wallpaper/Fabric058_4K-PNG_Color.png',
  
];

const WallpaperSelector = ({ onSelect }) => {
  return (
    <Box display="flex" gap={2} p={2}>
      {wallpapers.map((src, index) => (
        <Box
          key={index}
          onClick={() => onSelect(src)} // ✅ 선택한 이미지 전달
          sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            cursor: "pointer",
            border: "2px solid transparent",
            "&:hover": {
              borderColor: "var(--primary-color)",
            },
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </Box>
  );
};


export default WallpaperSelector;


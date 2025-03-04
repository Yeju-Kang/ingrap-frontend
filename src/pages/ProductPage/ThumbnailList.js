import React from "react";
import { Box, CardMedia } from "@mui/material";

const ThumbnailList = ({ thumbnails, selectedImage, setSelectedImage }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mr={2}>
      {thumbnails.map((img, index) => (
        <CardMedia
          key={index}
          component="img"
          image={img}
          sx={{ width: 50, height: 50, cursor: "pointer", mb: 1, border: selectedImage === img ? "2px solid black" : "none" }}
          onClick={() => setSelectedImage(img)}
        />
      ))}
    </Box>
  );
};

export default ThumbnailList;
import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const SpaceCard = ({ space, onClick }) => {
  const formattedDate = new Date(space.savedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <Card
      onClick={onClick}
      sx={{
        width: "400px",
        height: "500px",
        backgroundColor: "#F9F8F6",
        border: "1px solid #CFCFCF",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardMedia
  component="img"
  image={space.image}
  alt={space.name}
  sx={{
    width: "100%",
    height: "400px",
    objectFit: "cover", 
  }}
/>
      <CardContent sx={{
      height: "100px",  
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
        <Typography variant="subtitle1" fontWeight="600" color="#222">
          {space.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
           {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;

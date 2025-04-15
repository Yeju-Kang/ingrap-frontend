import React from "react";
import {  Card, CardMedia, CardContent, Typography } from "@mui/material";

const SpaceCard = ({ space, onClick }) => {
  const formattedDate = new Date(space?.savedAt ?? "").toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  console.log('space : ', space)

  return (
    <Card
      onClick={onClick}
      sx={{
        width: "400px",
        height: "500px",
        backgroundColor: "#F9F8F6",
        borderRadius: "12px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        "&:hover": { transform: "scale(1.02)" },
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
           {space.updatedAt}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;

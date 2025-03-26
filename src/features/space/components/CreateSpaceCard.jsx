import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateSpaceCard = () => {
  return (
    <Card
      sx={{
        width: "400px",
        height: "500px",
        backgroundColor: "#F9F8F6", // 고급스러운 오프화이트 배경
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        cursor: "pointer"
      }}
    >
      {/* 아이콘 원 */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "var(--primary-color)",
          color: "var(--white-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          border: "1px solid #D0D0D0",
          mb: 2,
        }}
      >
        <AddIcon fontSize="inherit" />
      </Box>
    </Card>
  );
};

export default CreateSpaceCard;

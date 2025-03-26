import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateSpaceCard = () => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "500px",
        backgroundColor: "#F9F8F6", // 고급스러운 오프화이트 배경
        border: "1px solid #CFCFCF", // 은은한 테두리
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)", // 은은한 그림자
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
    </Box>
  );
};

export default CreateSpaceCard;

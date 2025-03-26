import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateRoomCard = () => {
  return (
    <Box
      sx={{
        width: "240px",
        height: "360px",
        backgroundColor: "#F9F8F6", // 고급스러운 오프화이트 배경
        border: "1px solid #CFCFCF", // 은은한 테두리
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        m: 1,
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)", // 은은한 그림자
      }}
    >
      {/* 아이콘 원 */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "#EDEDED",
          color: "#2D3A3F",
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

      {/* 텍스트 */}
      <Typography variant="body1" fontWeight={500} color="#333">
        공간 만들기
      </Typography>

      {/* 버튼 */}
      <Box sx={{ position: "absolute", bottom: 16 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "20px",
            fontSize: "0.8rem",
            px: 2,
            color: "#555",
            borderColor: "#A0988A",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f4f4f4",
              borderColor: "#8C8579",
            },
          }}
        >
          경렬의 공간
        </Button>
      </Box>
    </Box>
  );
};

export default CreateRoomCard;

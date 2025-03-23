import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "500px",
        backgroundImage: `url("/assets/images/room.jpg")`, // 배경 이미지
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 텍스트 컨테이너 */}
      <Box sx={{ maxWidth: "600px", p: 3 }}>
        <Typography variant="h3" fontWeight="bold">
          자연, 일상, 상상을 미학으로 담아내다
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          리바트 마이스터 컬렉션
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          창조성과 가정에 어우러진 프리미엄 가구
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          자세히 보기
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;

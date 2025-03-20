import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, Avatar, Typography, Box } from "@mui/material";

const TopRoom = ({ post }) => {
  const navigate = useNavigate();
  if (!post) return null;

  return (
    <Box 
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      onClick={() => navigate(`/community/${post.id}`)} // ✅ 클릭 시 상세 페이지 이동
      style={{ cursor: "pointer" }} // ✅ 커서 포인터 추가
    >
      {/* 카드 영역 (이미지만 포함) */}
      <Card 
        sx={{ 
          width: "100%", 
          height: 640, 
          borderRadius: 2, 
          overflow: "hidden",
          transition: "0.3s",
          "&:hover": { opacity: 0.8 } // ✅ 호버 효과 추가 (살짝 어두워짐)
        }}
      >
        <CardMedia component="img" height="100%" image={post.image} alt={post.title} />
      </Card>

      {/* 프로필 및 정보 */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, width: "100%", px: 1 }}>
        <Avatar src={post.profile} sx={{ width: 40, height: 40, mr: 1 }} />
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>🏆 {post.author}</Typography>
        <Typography variant="body2">❤️ {post.likes} · 💬 {post.comments} · 👀 {post.views}</Typography>
      </Box>
    </Box>
  );
};

export default TopRoom;

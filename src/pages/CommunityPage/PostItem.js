import React from "react";
import { Card, CardMedia, Avatar, Typography, Box } from "@mui/material";

const PostItem = ({ post, rank }) => {
  if (!post) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* 카드 영역 (이미지만 포함) */}
      <Card sx={{ width: "100%", height: 288.8, flexGrow: 1, borderRadius: 2, overflow: "hidden" }}> 
        <CardMedia component="img" height="100%" image={post.image} alt={post.title} />
      </Card>

      {/* 프로필 및 정보 */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, width: "100%", px: 1 }}>
        <Avatar src={post.profile} sx={{ width: 30, height: 30, mr: 1 }} />
        <Typography sx={{ flexGrow: 1 }}>{post.author}</Typography>
        <Typography variant="body2">❤️ {post.likes} · 💬 {post.comments} · 👀 {post.views}</Typography>
      </Box>
    </Box>
  );
};

export default PostItem;

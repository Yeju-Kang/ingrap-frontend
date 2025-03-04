import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{ display: "flex", cursor: "pointer", p: 2 }}
          onClick={() => navigate(`/community/${post.id}`)}
        >
          <CardMedia
            component="img"
            image={post.image}
            alt={post.title}
            sx={{ width: 120, height: 120, borderRadius: 2 }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.author} · 좋아요 {post.likes} · 댓글 {post.comments}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default PostList;

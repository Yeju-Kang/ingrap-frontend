import React, { useState } from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import PostList from "./PostList";
import PostForm from "./PostForm";

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "이 원목 테이블 어떤가요?",
      content: "알렉스뮐러 테이블을 구매하려는데, 실제 사용하시는 분들 후기 궁금합니다!",
      image: "/table-review.jpg",
      likes: 10,
      comments: 5,
      author: "김예주",
    },
    {
      id: 2,
      title: "거실 인테리어 아이디어 공유해요!",
      content: "화이트톤 가구로 꾸민 거실입니다. 여러분의 의견이 궁금해요!",
      image: "/living-room.jpg",
      likes: 25,
      comments: 12,
      author: "박지은",
    },
  ]);

  // 새로운 게시글 추가
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
        커뮤니티
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PostForm onAddPost={handleAddPost} />
        </Grid>
        <Grid item xs={12}>
          <PostList posts={posts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommunityPage;

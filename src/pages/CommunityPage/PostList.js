import React from "react";
import { Grid } from "@mui/material";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) return null; // 예외 처리

  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} key={post.id}> {/* ✅ 반응형: 모바일 1열, 데스크탑 2열 */}
          <PostItem post={post} rank={index + 2} /> {/* 2등부터 시작 */}
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;

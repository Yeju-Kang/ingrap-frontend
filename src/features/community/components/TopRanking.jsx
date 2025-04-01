import React from "react";
import { Grid, Box } from "@mui/material";
import TopRoom from "./TopRoom";
import PostItem from "./PostItem";

const TopRanking = ({ topPost, otherPosts, otherCardGridSize, isSmallScreen }) => {
  if (!topPost || otherPosts.length === 0) return null;

  return (
    <Grid container spacing={2} justifyContent="center">
      {/* 1등 카드 */}
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%" }}>
          <TopRoom post={topPost} key={`top-${topPost.id}`} />
        </Box>
      </Grid>

      {/* 2~7등 카드 */}
      <Grid item xs={12} md={6} container spacing={2} sx={{ flexGrow: 1 }}>
        {otherPosts.map((post, index) => (
          <Grid
            item
            xs={otherCardGridSize}
            sm={otherCardGridSize}
            sx={{
              flexGrow: 1,
              minWidth: isSmallScreen ? "100%" : "auto",
            }}
            key={`post-${post.id}-${index}`}
          >
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TopRanking;

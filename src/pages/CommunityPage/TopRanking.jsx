import React from "react";
import { Grid, Box } from "@mui/material";
import TopRoom from "./TopRoom";
import PostItem from "./PostItem";

const TopRanking = ({ topPost, otherPosts, otherCardGridSize, isSmallScreen }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
        {/* 1등 카드 (900px 이상 커지지 않도록 설정) */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%" }}> {/* ✅ 1등 카드 최대 크기 제한 */}
            <TopRoom post={topPost} />
          </Box>
        </Grid>

        {/* 2~7등 카드 */}
        <Grid item xs={12} md={6} container spacing={2} sx={{ flexGrow: 1 }}>
          {otherPosts.map((post, index) => (
            <Grid
              item
              xs={otherCardGridSize} // ✅ 작은 화면이면 한 줄에 2개(23 / 45), 큰 화면에서는 3열(234 / 567)
              sm={otherCardGridSize}
              sx={{
                flexGrow: 1,
                minWidth: isSmallScreen ? "100%" : "auto", // ✅ 작은 화면에서는 카드가 가득 차도록 설정
              }}
              key={post.id}
            >
              <PostItem post={post} rank={index + 2} />
            </Grid>
          ))}
        </Grid>
      </Grid>
  );
};

export default TopRanking;

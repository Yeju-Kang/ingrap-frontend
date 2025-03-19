import React, { useState } from "react";
import { Container, Grid, useMediaQuery, Box } from "@mui/material";
import TopRanking from "./TopRanking";
import FurnitureAds from "./FurnitureAds";

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "이 원목 테이블 어떤가요?",
      image: "/table-review.jpg",
      likes: 50,
      comments: 15,
      views: 300,
      author: "김예주",
      profile: "/profile1.jpg",
    },
    {
      id: 2,
      title: "거실 인테리어 아이디어 공유해요!",
      image: "/living-room.jpg",
      likes: 40,
      comments: 10,
      views: 250,
      author: "박지은",
      profile: "/profile2.jpg",
    },
    {
      id: 3,
      title: "미니멀리즘 침실 어때요?",
      image: "/bedroom.jpg",
      likes: 35,
      comments: 8,
      views: 200,
      author: "최민수",
      profile: "/profile3.jpg",
    },
    {
      id: 4,
      title: "주방 리모델링 후기!",
      image: "/kitchen.jpg",
      likes: 30,
      comments: 12,
      views: 180,
      author: "이정훈",
      profile: "/profile4.jpg",
    },
    {
      id: 5,
      title: "북유럽 스타일 서재",
      image: "/study-room.jpg",
      likes: 25,
      comments: 5,
      views: 150,
      author: "송혜원",
      profile: "/profile5.jpg",
    },
    {
      id: 6,
      title: "빈티지 감성의 침실",
      image: "/vintage-bedroom.jpg",
      likes: 20,
      comments: 3,
      views: 120,
      author: "이하늘",
      profile: "/profile6.jpg",
    },
    {
      id: 7,
      title: "작은 방을 넓게 보이게 꾸미는 법",
      image: "/small-room.jpg",
      likes: 18,
      comments: 4,
      views: 110,
      author: "정한결",
      profile: "/profile7.jpg",
    },
  ]);

  const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes || b.views - a.views);
  const topPost = sortedPosts[0]; // 1등

  const isSmallScreen = useMediaQuery("(max-width:1600px)"); // 작은 화면
  const isMediumScreen = useMediaQuery("(max-width:2000px)"); // 중간 크기 화면
  const isLargeScreen = useMediaQuery("(min-width:2000px)"); // 큰 화면

  // ✅ 2등 이후 카드들이 가로로 확장되도록 설정
  const otherCardGridSize = isLargeScreen ? 4 : isMediumScreen ? 6 : 12;

  let otherPosts;
  if (isSmallScreen) {
    otherPosts = sortedPosts.slice(1, 3); // ✅ 1등~3등 1열 정렬
  } else if (isLargeScreen) {
    otherPosts = sortedPosts.slice(1, 7); // ✅ 큰 화면에서는 2~7등 표시
  } else {
    otherPosts = sortedPosts.slice(1, 5); // ✅ 중간 화면 이하에서는 2~5등만 표시
  }

  return (
    <Container maxWidth={false} sx={{  px: "24px",  height: "calc(100vh - 80px)",
      overflowY: "auto"}}>
       <TopRanking topPost={topPost} otherPosts={otherPosts} otherCardGridSize={otherCardGridSize} isSmallScreen={isSmallScreen} />
       <FurnitureAds /> {/* ✅ 가구 광고 추가 */}
    </Container>
  );
};

export default CommunityPage;

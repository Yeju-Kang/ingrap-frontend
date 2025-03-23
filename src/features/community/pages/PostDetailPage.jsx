import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Avatar, Grid, Chip } from "@mui/material";

// ✅ 예제 데이터 (실제 프로젝트에서는 API 요청으로 대체 가능)
const mockPosts = [
  {
    id: 1,
    title: "이 원목 테이블 어떤가요?",
    image: "/table-review.jpg",
    likes: 50,
    comments: 15,
    views: 300,
    author: "김예주",
    profile: "/profile1.jpg",
    date: "2024-03-20",
    type: "아파트",
    size: "30평",
    style: "미니멀",
    tags: ["모던", "우드", "화이트"],
    description: "알렉스뮐러 테이블을 구매하려는데, 실제 사용하시는 분들 후기 궁금합니다!",
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
    date: "2024-03-18",
    type: "주택",
    size: "40평",
    style: "북유럽",
    tags: ["우드", "심플", "따뜻한 분위기"],
    description: "화이트톤 가구로 꾸민 거실입니다. 여러분의 의견이 궁금해요!",
  },
];

const PostDetailPage = () => {
  const { postId } = useParams(); // ✅ postId 가져오기
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("URL에서 가져온 postId:", postId, "타입:", typeof postId); // ✅ 디버깅용
    if (!postId) return; // postId가 없으면 처리 안 함
    const foundPost = mockPosts.find((p) => p.id === Number(postId)); // ✅ 숫자로 변환하여 비교
    setPost(foundPost);
  }, [postId]);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5">게시글을 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* 메인 이미지 */}
      <Box
        sx={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-end",
          color: "var(--text-color)",
          p: 3,
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 20, left: 20 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Avatar src={post.profile} sx={{ width: 40, height: 40, mr: 1 }} />
            <Typography variant="body1">{post.author}</Typography>
            <Typography variant="body2" sx={{ ml: 2, opacity: 0.8 }}>
              {post.date}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 상세 정보 */}
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              주거 타입
            </Typography>
            <Typography variant="body1">{post.type}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              면적
            </Typography>
            <Typography variant="body1">{post.size}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              인테리어 스타일
            </Typography>
            <Typography variant="body1">{post.style}</Typography>
          </Grid>
        </Grid>

        {/* 태그 */}
        <Box sx={{ mt: 2 }}>
          {post.tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>

        {/* 본문 */}
        <Typography variant="body1" sx={{ mt: 3 }}>
          {post.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default PostDetailPage;

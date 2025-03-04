import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const mockPosts = [
  { id: 1, title: "이 원목 테이블 어떤가요?", content: "테이블 후기 궁금합니다!", author: "김예주", comments: [] },
  { id: 2, title: "거실 인테리어 아이디어 공유해요!", content: "화이트톤 가구로 꾸민 거실입니다!", author: "박지은", comments: [] },
];

const PostDetailPage = () => {
  const { postId } = useParams();
  const post = mockPosts.find((p) => p.id === Number(postId));
  const [comments, setComments] = useState(post ? post.comments : []);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (!comment) return;
    setComments([...comments, { id: Date.now(), text: comment }]);
    setComment("");
  };

  if (!post) return <Typography>게시글을 찾을 수 없습니다.</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        {post.content}
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>댓글</Typography>
      <List>
        {comments.map((c) => (
          <ListItem key={c.id}>
            <ListItemText primary={c.text} />
          </ListItem>
        ))}
      </List>
      <TextField fullWidth label="댓글 작성" value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button onClick={handleAddComment} sx={{ mt: 1 }}>등록</Button>
    </Box>
  );
};

export default PostDetailPage;

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      image: "/default-image.jpg",
      likes: 0,
      comments: 0,
      author: "익명",
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="내용"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        게시글 등록
      </Button>
    </Box>
  );
};

export default PostForm;

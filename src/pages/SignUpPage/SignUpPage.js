import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입 정보:", formData);
    // TODO: 백엔드 API 연동 후 회원가입 처리
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "50px auto",
        marginTop: "80px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        회원가입
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="이름"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: "12px" }}
        />

        <TextField
          label="아이디"
          name="id"
          type="id"
          variant="outlined"
          fullWidth
          required
          value={formData.id}
          onChange={handleChange}
          sx={{ marginBottom: "12px" }}
        />

        <TextField
          label="비밀번호"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={formData.password}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />

        {/* ✅ 회원가입 버튼 */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "black",
            color: "white", 
            fontWeight: "bold",
            padding: "10px",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          가입하기
        </Button>
      </form>
    </Box>
  );
};

export default SignUpPage;

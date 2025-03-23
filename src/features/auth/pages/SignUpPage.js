import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { signupUser } from '../../api/auth';  // ✅ 회원가입 API 호출

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: '',  // ✅ 이름 (백엔드에서 `username` 사용)
    email: '',     // ✅ 아이디 → 이메일로 변경
    password: '',
  });

  // 이전 경로 정보 확인
  const from = location.state?.from || '/';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', formData);

    try {
      const response = await signupUser(formData);  // ✅ 회원가입 API 요청
      alert("회원가입 성공!");
      console.log("회원가입 응답:", response.data);
      
      // 회원가입 성공 시 로그인 페이지로 이동하며 이전 경로 정보 전달
      navigate('/login', { state: { from } });
    } catch (error) {
      alert("회원가입 실패! 다시 시도해주세요.");
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          회원가입
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="이름"
            name="username"  // ✅ 백엔드에서 `username` 사용
            variant="outlined"
            fullWidth
            required
            value={formData.username}
            onChange={handleChange}
            sx={{ marginBottom: "12px" }}
          />

          <TextField
            label="이메일"
            name="email"  // ✅ 아이디 → 이메일로 변경
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
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
    </Box>
  );
};

export default SignUpPage;

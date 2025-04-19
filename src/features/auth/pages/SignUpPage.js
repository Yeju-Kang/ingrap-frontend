import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Collapse,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { signupUser } from '../authApi';

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'individual',
    businessNumber: '',
  });

  const from = location.state?.from || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };

    if (payload.userType !== 'corporate') {
      delete payload.businessNumber;
    }

    console.log('회원가입 정보:', payload);

    try {
      const response = await signupUser(payload);
      alert("회원가입 성공!");
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
          {/* 회원 유형 선택 */}
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <InputLabel>회원 유형</InputLabel>
            <Select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              label="회원 유형"
            >
              <MenuItem value="individual">개인</MenuItem>
              <MenuItem value="corporate">기업</MenuItem>
            </Select>
          </FormControl>

          {/* 기업회원일 경우만 사업자번호 필드 노출 */}
          <Collapse in={formData.userType === 'corporate'} timeout={200} unmountOnExit>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="사업자번호"
                name="businessNumber"
                variant="outlined"
                fullWidth
                required={formData.userType === 'corporate'}
                value={formData.businessNumber}
                onChange={handleChange}
              />
            </Box>
          </Collapse>

          <TextField
            label="이름"
            name="username"
            variant="outlined"
            fullWidth
            required
            value={formData.username}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            label="이메일"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
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
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              "&:hover": { backgroundColor: "var(--primary-color)" },
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

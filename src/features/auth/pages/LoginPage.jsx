import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import { loginSuccess } from "../../../store/authSlice";
import Logo from '../../../layouts/Header/Logo';
import apiClient from '../../../api/apiClient';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  // ✅ Redux Dispatch 추가
  const { lastVisitedPage } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: '',    
    password: '',
  });
  const [error, setError] = useState(null);


  const handleLogin = async () => {
    try {
        const response = await apiClient.post("/users/login", formData);

        alert("로그인 성공!");

        dispatch(loginSuccess({ email: formData.email }));

        navigate(lastVisitedPage, { replace: true });
    } catch (error) {
        setError("로그인 실패! 이메일 또는 비밀번호를 확인해주세요.");
        console.error("로그인 오류:", error);
    }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 80px)',
        backgroundColor: '#f5f5f5',
        paddingTop: '80px', 
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          width: '320px',
          textAlign: 'center',
        }}
      >
        <Box sx={{ marginBottom: '12px' }}>
          <Logo />
        </Box>

        {error && (
          <Typography color="error" sx={{ marginBottom: "12px" }}>
            {error}
          </Typography>
        )}

        <TextField
          label='이메일'
          name="email"  // ✅ `email`로 변경
          variant='outlined'
          fullWidth
          size='small'
          value={formData.email}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          sx={{ marginBottom: '12px' }}
        />

        <TextField
          label='비밀번호'
          name="password"
          variant='outlined'
          fullWidth
          size='small'
          type='password'
          value={formData.password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          sx={{ marginBottom: '20px' }}
        />

        <Button
          fullWidth
          sx={{
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px',
            marginBottom: '10px',
            '&:hover': { backgroundColor: 'var(--primary-color)' },
          }}
          onClick={handleLogin}
        >
          로그인
        </Button>

        <Box display='flex' justifyContent='end' alignItems='center'>
          <Box display='flex' gap={1}>
            <Typography
              variant='body2'
              sx={{ cursor: 'pointer', color: 'gray' }}
            >
              아이디 찾기
            </Typography>
            <Typography
              variant='body2'
              sx={{ cursor: 'pointer', color: 'gray' }}
            >
              |
            </Typography>
            <Typography
              variant='body2'
              sx={{ cursor: 'pointer', color: 'gray' }}
            >
              비밀번호 찾기
            </Typography>
          </Box>
        </Box>

        <Button
          fullWidth
          sx={{
            backgroundColor: 'var(--white-color)',
            color: 'var(--text-color)',
            fontWeight: 'bold',
            padding: '10px',
            marginTop: '10px',
            border: '1px solid var(--primary-color)',
            '&:hover': {
              backgroundColor: 'var(--primary-color)',
              color: 'white', // hover 시 텍스트 흰색으로 바꿔주면 더 잘 보여
            },
          }}
          onClick={() => {
            navigate("/signup"); 
          }}
        >
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;

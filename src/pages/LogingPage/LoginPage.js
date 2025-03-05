// LoginPage.js
import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../layouts/Header/Logo';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 이전 경로 정보 확인
  const from = location.state?.from || '/';

  const handleLogin = () => {
    // 로그인 로직 처리
    console.log('📝 로그인 시도:', { username, password });

    // 로그인 성공 시 이전 경로로 리디렉션
    navigate(from, { replace: true });
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
        height: '100vh',
        backgroundColor: '#f5f5f5',
        paddingTop: '80px', // 헤더 높이만큼 패딩 추가
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

        <TextField
          label='아이디'
          variant='outlined'
          fullWidth
          size='small'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ marginBottom: '12px' }}
        />

        <TextField
          label='비밀번호'
          variant='outlined'
          fullWidth
          size='small'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            padding: '10px',
            marginTop: '10px',
            border: '1px solid var(--primary-color)',
          }}
          onClick={() => navigate('/signup', { state: { from } })}
        >
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../layouts/Header/Logo";

function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null; 

  const handleLogin = () => {
    console.log("📝 로그인 시도:", { username, password });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box>
      <Box
        onClick={onClose} // ✅ 배경 클릭 시 닫힘
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      />

      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
          width: "320px",
          textAlign: "center",
        }}
      >
        <Box sx={{ marginBottom: "12px" }}>
          <Logo />
        </Box>

        <TextField
          label="아이디"
          variant="outlined"
          fullWidth
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ marginBottom: "12px" }}
        />

        <TextField
          label="비밀번호"
          variant="outlined"
          fullWidth
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ marginBottom: "20px" }}
        />

        <Button
          fullWidth
          sx={{
            backgroundColor: "var(--primary-color)",
            color: "white",
            fontWeight: "bold",
            padding: "12px",
            marginBottom: "10px",
            "&:hover": { backgroundColor: "var(--primary-color)" },
          }}
          onClick={handleLogin}
        >
          로그인
        </Button>

        <Box display="flex" justifyContent="end" alignItems="center">
          <Box display="flex" gap={1}>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray" }}>
              아이디 찾기
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray" }}>
              |
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray" }}>
              비밀번호 찾기
            </Typography>
          </Box>
        </Box>

        {/* ✅ 닫기 버튼 */}
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
            cursor: "pointer",
            minWidth: "30px",
          }}
        >
          ✖
        </Button>

        <Button
          fullWidth
          sx={{
            backgroundColor: "white",
            color: "var(--text-color)",
            fontWeight: "bold",
            padding: "10px",
            marginTop: "10px",
            border: "1px solid var(--primary-color)",
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
}

export default LoginModal;

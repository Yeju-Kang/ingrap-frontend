import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null; // ✅ 모달이 닫혀 있으면 렌더링하지 않음

  // ✅ 로그인 버튼 클릭 시 콘솔에 입력값 출력 (추후 로그인 API 연결 가능)
  const handleLogin = () => {
    console.log("📝 로그인 시도:", { username, password });
    // TODO: 로그인 처리 로직 추가
  };

  // ✅ 엔터 키 입력 시 로그인 실행
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box>
      {/* ✅ 어두운 배경 오버레이 */}
      <Box
        onClick={onClose} // ✅ 배경 클릭 시 닫힘
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ 반투명한 오버레이
          zIndex: 999, // ✅ 모달보다 아래
        }}
      />

      {/* ✅ 로그인 모달 창 */}
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
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          로그인
        </Typography>
       

        {/* ✅ 아이디 입력 필드 */}
        <TextField
          label="아이디"
          variant="outlined"
          fullWidth
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress} // ✅ 엔터 키 입력 감지
          sx={{ marginBottom: "12px" }}
        />

        {/* ✅ 비밀번호 입력 필드 */}
        <TextField
          label="비밀번호"
          variant="outlined"
          fullWidth
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // ✅ 엔터 키 입력 감지
          sx={{ marginBottom: "20px" }}
        />

        {/* ✅ 로그인 버튼 */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "var(--primary-color)",
            "&:hover": { backgroundColor: "var(--button-hover)" },
          }}
          onClick={handleLogin}
        >
          로그인
        </Button>
<Box sx={{display:"flex"}}>
        <Typography variant="body2" sx={{ marginTop: "12px", marginRight: "20px"}}>
          아이디 찾기
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "12px", marginRight: "20px" }}>
          비밀번호 찾기
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "12px" }}>
          회원가입
        </Typography>
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
      </Box>
    </Box>
  );
}

export default LoginModal;
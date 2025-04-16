import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogin from "../../../hooks/useLogin";

import bgImage from "../../../assets/images/login-bg-blur.png";
import promoImage from "../../../assets/images/promo-furniture-contest.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { lastVisitedPage } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const login = useLogin();

  const handleLogin = async () => {
    try {
      await login(formData);
  
      const pendingSpaceId = localStorage.getItem("pendingSpaceId");
      const pendingSpaceName = localStorage.getItem("pendingSpaceName");
  
      if (pendingSpaceId && pendingSpaceName) {
        // ✅ 자동 저장 후 또 저장되지 않도록 미리 제거
        localStorage.removeItem("pendingSpaceId");
        localStorage.removeItem("pendingSpaceName");
        navigate(`/space/${pendingSpaceId}?autosave=true`, { replace: true });
      } else if (pendingSpaceId && !pendingSpaceName) {
        alert("저장할 공간 이름이 없습니다. 다시 시도해주세요.");
        localStorage.removeItem("pendingSpaceId");
        navigate("/", { replace: true });
      } else {
        navigate(lastVisitedPage, { replace: true });
      }
    } catch (err) {
      setError("로그인 실패! 이메일 또는 비밀번호를 확인해주세요.");
      console.error("로그인 오류:", err);
    }
  };
  

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleLogin();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 880,
          height: 480,
          display: "flex",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            width: "50%",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#ffffff",
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={4} align="center" color="#333">
            Welcome!
          </Typography>

          {error && (
            <Typography color="error" mb={2}>
              {error}
            </Typography>
          )}

          <TextField
            label="이메일"
            name="email"
            variant="outlined"
            fullWidth
            size="small"
            value={formData.email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            sx={{ mb: 2 }}
          />

          <TextField
            label="비밀번호"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={formData.password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              bgcolor: "#b8b297",
              color: "white",
              fontWeight: 600,
              mb: 2,
              "&:hover": { bgcolor: "#a5a088" },
              borderRadius: 2,
            }}
          >
            로그인
          </Button>

          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "#888" }}>
              아이디 찾기
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "#888" }}>
              비밀번호 찾기
            </Typography>
          </Box>

          <Divider sx={{ mb: 2 }}>또는</Divider>

          <Button
            fullWidth
            onClick={() => navigate("/signup")}
            variant="outlined"
            sx={{
              fontWeight: 600,
              borderColor: "#b8b297",
              color: "#5f5b48",
              borderRadius: 1,
              "&:hover": {
                bgcolor: "#f6f5f0",
              },
            }}
          >
            회원가입
          </Button>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "#f3f1e8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src={promoImage}
            alt="Furniture Contest"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

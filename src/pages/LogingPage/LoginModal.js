import React from "react";
import { Box, Button } from "@mui/material";
import { FaApple } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import Logo from "../../layouts/Header/Logo";

function LoginModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  // ✅ 소셜 로그인 핸들러 (추후 API 연동 가능)
  const handleSocialLogin = (platform) => {
    console.log(`🔗 ${platform} 로그인 시도`);
    // TODO: 해당 로그인 API 연동 (카카오, 네이버, 애플)
  };

  return (
    <Box>
      {/* ✅ 배경 오버레이 */}
      <Box
        onClick={onClose}
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

      {/* ✅ 로그인 모달 */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: 3,
          zIndex: 1000,
          width: "350px",
          textAlign: "center",
        }}
      >
        <Box sx={{marginBottom:"10px"}}>
        <Logo />
        </Box>
        <Box
      sx={{
        border: "1px solid var(--background-color)", // ✅ 외곽선 추가
        borderRadius: "12px", // ✅ 부드러운 모서리
        padding: "16px", // ✅ 내부 여백 추가
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5, // ✅ 버튼 간 간격 조정
      }}
        > 
        {/* ✅ 카카오 로그인 버튼 */}
        <Button
          fullWidth
          startIcon={<RiKakaoTalkFill />}
          sx={{
            backgroundColor: "#FEE500",
            color: "#3C1E1E",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "12px",
            "&:hover": { backgroundColor: "#FDD835" },
          }}
          onClick={() => handleSocialLogin("카카오")}
        >
          카카오로 시작하기
        </Button>

        {/* ✅ 네이버 로그인 버튼 */}
        <Button
          fullWidth
          startIcon={<SiNaver />}
          sx={{
            backgroundColor: "#03C75A",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "12px",
            "&:hover": { backgroundColor: "#02B65A" },
          }}
          onClick={() => handleSocialLogin("네이버")}
        >
          네이버로 시작하기
        </Button>

        {/* ✅ 애플 로그인 버튼 */}
        <Button
          fullWidth
          startIcon={<FaApple />}
          sx={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={() => handleSocialLogin("애플")}
        >
          Apple로 시작하기
        </Button>
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

import React from "react";
import { Box, Typography, Button } from "@mui/material";

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null; // ✅ 모달이 닫혀 있으면 렌더링하지 않음

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
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 1000, // ✅ 최상위 요소
          width: "300px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          로그인
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          계정을 입력하세요
        </Typography>

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
          }}
        >
          ✖
        </Button>

        {/* ✅ 로그인 버튼 */}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            marginTop: "10px",
            backgroundColor: "var(--primary-color)",
          }}
        >
          로그인
        </Button>
      </Box>
    </Box>
  );
}

export default LoginModal;

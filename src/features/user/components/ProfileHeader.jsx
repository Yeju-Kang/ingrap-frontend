import React from "react";
import { useDispatch } from "react-redux"; 
import { Box, Typography, Avatar, IconButton, Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { logoutUser } from "../../auth/auth.api"; // ✅ 로그아웃 API import
import { useNavigate } from "react-router-dom"; // ✅ 리다이렉트용
import { logout } from "../../../store/authSlice"; // ✅ 경로는 실제 위치에 맞게 수정


const ProfileHeader = ({ name, email, avatar }) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser();       // ✅ 백엔드에 쿠키 삭제 요청
      dispatch(logout());       // ✅ Redux 상태 초기화
      navigate("/login");       // ✅ 로그인 페이지로 이동
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={avatar} alt={name} sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography variant="h5" fontWeight="bold">{name}</Typography>
          <Typography variant="body2" color="gray">{email}</Typography>
        </Box>
      </Box>

      <Tooltip title="로그아웃">
        <IconButton onClick={handleLogout} sx={{ backgroundColor: "#f5f5f5" }}>
          <Logout />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProfileHeader;

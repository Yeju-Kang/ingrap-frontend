import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useMenuRoutes } from "../../routes/routes";

function NavMenu() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ 현재 경로 확인
  const menuRoutes = useMenuRoutes();
  const [activePath, setActivePath] = useState(location.pathname); // ✅ 현재 선택된 메뉴 상태 관리

  const handleMenuClick = (path) => {
    setActivePath(path); // ✅ 클릭한 메뉴의 경로를 저장
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {menuRoutes.map(({ label, path }) => (
        <IconButton
          key={label}
          onClick={() => handleMenuClick(path)}
          sx={{ borderRadius: "15%" }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: activePath === path ? "var(--primary-color)" : "var(--text-color)", // ✅ 활성 메뉴는 파란색
              transition: "color 0.3s ease-in-out", // ✅ 색상 변경 애니메이션
            }}
          >
            {label}
          </Typography>
        </IconButton>
      ))}
    </Box>
  );
}

export default NavMenu;

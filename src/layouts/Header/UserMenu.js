import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import LoginModal from "../../components/LoginModal";
import useTranslate from "../../hooks/useTranslate";


function Logo() {
    const { language, toggleLanguage } = useTranslate();
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  
    return(
<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            onClick={() => setIsLoginOpen(true)}
            sx={{ padding: "8px" }}
          >
            <PersonOutline sx={{ fontSize: 24, color: "var(--text-color)" }} />
          </IconButton>
          <IconButton sx={{ padding: "8px" }}>
            <ShoppingBagOutlined sx={{ fontSize: 24, color: "var(--text-color)" }} />
          </IconButton>

          {/* ✅ 언어 변경 버튼 */}
          <IconButton
            onClick={toggleLanguage}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "background-color 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                color: "var(--text-color)",
              }}
            >
              {language === "ko" ? "한" : "A"} {/* ✅ Redux 상태 기반으로 변경 */}
            </Typography>
          </IconButton>
          <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Box>
  
    )
}

export default Logo;




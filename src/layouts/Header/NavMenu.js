import React from "react"
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/CustomButton/CustomButton"
import { useMenuRoutes  } from "../../routes/routes";

function NavMenu() {
    const navigate = useNavigate();
    const menuRoutes = useMenuRoutes();

    return(
<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
{menuRoutes.map(({ label, path }) => (
  <Button
    key={label}
    disableClickEffect={true}
    onClick={() => navigate(path)}
    variant="text"
    customColor="transparent"
    hoverColor="transparent"
  >
    <Typography
      sx={{
        fontSize: 20,
        fontWeight: "bold",
        color: "var(--text-color)",
      }}
    >
      {label} {/* ✅ 번역 적용 */}
    </Typography>
  </Button>
))}
</Box>
    )
}

export default NavMenu;

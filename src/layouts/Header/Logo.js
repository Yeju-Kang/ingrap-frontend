import React from "react"
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/image.png";

function Logo() {
    const navigate = useNavigate();

    return(
        <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
<Box
component="img"
src={logo}
sx={{
  height: "40px",
  width: "auto",
  cursor: "pointer",
}}
onClick={() => navigate("/")}
/>
</Box>
    )
}

export default Logo;




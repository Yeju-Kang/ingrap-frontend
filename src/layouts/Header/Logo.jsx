import React from "react"
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imageMap from "../../assets/imageMap";

function Logo() {
    const navigate = useNavigate();

    return(
        <Box sx={{ display: "flex", justifyContent: "center", flex: 0 }}>
<Box
component="img"
src={imageMap.logo.l}
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




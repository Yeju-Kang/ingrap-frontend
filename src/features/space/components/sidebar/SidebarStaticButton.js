// src/components/sidebar/SidebarStaticButton.jsx
import React from "react";
import { IconButton } from "@mui/material";

const SidebarStaticButton = ({ icon: Icon, ...rest }) => (
  <IconButton
    size="large"
    sx={{ color: "#666" }}  // mb 제거
    {...rest}
  >
    <Icon />
  </IconButton>
);

export default SidebarStaticButton;

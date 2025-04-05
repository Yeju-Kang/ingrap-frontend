import React from "react";
import { IconButton } from "@mui/material";

const SidebarStaticButton = ({ icon: IconComponent, onClick }) => (
  <IconButton onClick={onClick}>
    <IconComponent />
  </IconButton>
);

export default SidebarStaticButton;

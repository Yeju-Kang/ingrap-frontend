import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";

const ProfileHeader = ({ name, email, avatar }) => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Avatar src={avatar} alt={name} sx={{ width: 80, height: 80 }} />
      <Box>
        <Typography variant="h5" fontWeight="bold">{name}</Typography>
        <Typography variant="body2" color="gray">{email}</Typography>
      </Box>
    </Box>
    <IconButton sx={{ backgroundColor: "#f5f5f5" }}>
      <Settings />
    </IconButton>
  </Box>
);

export default ProfileHeader
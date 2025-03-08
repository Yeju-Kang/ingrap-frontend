import React from "react";
import { Box, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import UmbrellaIcon from "@mui/icons-material/BeachAccess";
import PaintRollerIcon from "@mui/icons-material/FormatPaint";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";

const Sidebar = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2} bgcolor="var(--background-color)" color="var(--text-color)" paddingTop="5px">
      {[WbSunnyIcon, NightlightIcon, UmbrellaIcon, PaintRollerIcon, LocationOnIcon, HelpIcon].map((Icon, index) => (
        <IconButton key={index} color="inherit">
          <Icon />
        </IconButton>
      ))}
    </Box>
  );
};

export default Sidebar;
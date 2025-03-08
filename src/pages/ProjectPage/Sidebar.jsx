import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import UmbrellaIcon from "@mui/icons-material/BeachAccess";
import PaintRollerIcon from "@mui/icons-material/FormatPaint";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";

const Sidebar = () => {
  const weatherIcons = [WbSunnyIcon, NightlightIcon, UmbrellaIcon];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const CurrentWeatherIcon = weatherIcons[currentIconIndex];

  const handleWeatherIconClick = () => {
    setCurrentIconIndex((prev) => (prev + 1) % weatherIcons.length);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      bgcolor="var(--background-color)"
      color="var(--text-color)"
      paddingTop="5px"
    >
      <IconButton onClick={handleWeatherIconClick}>
        <CurrentWeatherIcon />
      </IconButton>
      <IconButton>
        <PaintRollerIcon />
      </IconButton>
      <IconButton>
        <LocationOnIcon />
      </IconButton>
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Box>
  );
};

export default Sidebar;

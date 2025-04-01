import React from "react";
import { Box, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PaintRollerIcon from "@mui/icons-material/FormatPaint";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";

const weatherStates = ["sunny", "night", "rainy"];

const weatherIcons = {
  sunny: WbSunnyIcon,
  night: NightlightIcon,
  rainy: BeachAccessIcon,
};

const Sidebar = ({ weather = "sunny", setWeather = () => {} }) => {
  const CurrentWeatherIcon = weatherIcons[weather] || WbSunnyIcon;

  const handleWeatherIconClick = () => {
    const currentIndex = weatherStates.indexOf(weather);
    const nextIndex = (currentIndex + 1) % weatherStates.length;
    setWeather(weatherStates[nextIndex]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
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

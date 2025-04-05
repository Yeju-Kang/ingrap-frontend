import React from "react";
import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const weatherStates = ["sunny", "night", "rainy"];
const weatherIcons = {
  sunny: WbSunnyIcon,
  night: NightlightIcon,
  rainy: BeachAccessIcon,
};

const SidebarWeatherButton = ({ weather, setWeather }) => {
  const CurrentIcon = weatherIcons[weather] || WbSunnyIcon;

  const handleClick = () => {
    const currentIndex = weatherStates.indexOf(weather);
    const nextIndex = (currentIndex + 1) % weatherStates.length;
    setWeather(weatherStates[nextIndex]);
  };

  return (
    <IconButton onClick={handleClick}>
      <CurrentIcon />
    </IconButton>
  );
};

export default SidebarWeatherButton;

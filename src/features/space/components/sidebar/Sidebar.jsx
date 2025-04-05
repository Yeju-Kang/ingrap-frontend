import React from "react";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";

import SidebarWeatherButton from "./SidebarWeatherButton";
import SidebarStaticButton from "./SidebarStaticButton";

const Sidebar = ({  
  weather,
  setWeather,
  cameraMode,
  toggleCameraMode,
  onWallpaperChange,
  onFlooringChange, 
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <SidebarWeatherButton weather={weather} setWeather={setWeather} />
      <SidebarStaticButton icon={LocationOnIcon} />
      <SidebarStaticButton icon={HelpIcon} />
    </Box>
  );
};

export default Sidebar;

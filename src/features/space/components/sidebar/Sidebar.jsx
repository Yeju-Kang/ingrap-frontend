// src/components/sidebar/Sidebar.jsx
import React from "react";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";
import OpacityIcon from "@mui/icons-material/Opacity";
import AddIcon from "@mui/icons-material/Add";

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
    >
      {/* 1. 날씨 토글 */}
      <SidebarWeatherButton weather={weather} setWeather={setWeather} />

      {/* 2. 위치 아이콘 */}
      <SidebarStaticButton icon={LocationOnIcon} onClick={() => console.log("위치 클릭")} />

      {/* 3. 도움말 아이콘 */}
      <SidebarStaticButton icon={HelpIcon} onClick={() => console.log("도움말 클릭")} />

      {/* 4. 물방울(강수량) 토글 */}
      <SidebarStaticButton
        icon={OpacityIcon}
        onClick={() => console.log("강수량 토글 클릭")}
      />

      {/* 5. 추가 버튼 */}
      <SidebarStaticButton
        icon={AddIcon}
        onClick={() => console.log("추가 버튼 클릭")}
      />
    </Box>
  );
};

export default Sidebar;

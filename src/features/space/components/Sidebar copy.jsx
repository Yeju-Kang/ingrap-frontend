// Sidebar.jsx
import React, { useState } from "react";
import { Box, IconButton, Popover, Typography, Grid } from "@mui/material";
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

const themes = [
  { id: "theme1", name: "화이트 우드", image: "/themes/theme1.jpg" },
  { id: "theme2", name: "어두운 대리석", image: "/themes/theme2.jpg" },
  { id: "theme3", name: "따뜻한 우드", image: "/themes/theme3.jpg" },
  { id: "theme4", name: "모던 그레이", image: "/themes/theme4.jpg" },
];

const Sidebar = ({ weather = "sunny", setWeather = () => {}, onThemeChange = () => {} }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const CurrentWeatherIcon = weatherIcons[weather] || WbSunnyIcon;

  const handleWeatherIconClick = () => {
    const currentIndex = weatherStates.indexOf(weather);
    const nextIndex = (currentIndex + 1) % weatherStates.length;
    setWeather(weatherStates[nextIndex]);
  };

  const handleThemeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "theme-popover" : undefined;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <IconButton onClick={handleWeatherIconClick}>
        <CurrentWeatherIcon />
      </IconButton>

      {/* 벽지/바닥 설정 버튼 */}
      <IconButton onClick={handleThemeClick}>
        <PaintRollerIcon />
      </IconButton>

      <IconButton>
        <LocationOnIcon />
      </IconButton>

      <IconButton>
        <HelpIcon />
      </IconButton>

      {/* 팝오버 */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "center", horizontal: "right" }}
        transformOrigin={{ vertical: "center", horizontal: "left" }}
        sx={{ mt: 1 }}
      >
        <Box p={2} maxWidth={240}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            벽지 & 바닥 선택
          </Typography>
          <Grid container spacing={1}>
            {themes.map((theme) => (
              <Grid item xs={6} key={theme.id}>
                <Box
                  component="img"
                  src={theme.image}
                  alt={theme.name}
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    cursor: "pointer",
                    boxShadow: 1,
                    transition: "0.2s",
                    '&:hover': { transform: "scale(1.05)" },
                  }}
                  onClick={() => {
                    onThemeChange(theme);
                    handleClose();
                  }}
                />
                <Typography variant="caption" display="block" align="center">
                  {theme.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </Box>
  );
};

export default Sidebar;

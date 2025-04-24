import React from "react";
import { Box, IconButton, Tooltip, Paper } from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import CachedIcon from "@mui/icons-material/Cached";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import EditIcon from "@mui/icons-material/Edit";
import TextFieldsIcon from "@mui/icons-material/TextFields";

const RoomTools = ({
  onPointer,
  onRotateX,
  onRotateY,
  onResetAngle,
  onBuildPartition,
  onFullscreen,
  onPen,
  onTextBox,
}) => (
  <Paper
    elevation={3}
    sx={{
      mt: 1,
      mx: 2,
      mb: 2,
      p: 1,
      display: "flex",
      justifyContent: "center",
      gap: 2,
      borderRadius: 2,
      backgroundColor: "#fff",
    }}
  >
    <Tooltip title="일반 커서로 변경">
      <IconButton onClick={onPointer} size="large">
        <MouseIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="X축으로 90° 회전">
      <IconButton onClick={onRotateX} size="large">
        <Rotate90DegreesCcwIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Y축으로 90° 회전">
      <IconButton onClick={onRotateY} size="large">
        <Rotate90DegreesCwIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="각도 초기화">
      <IconButton onClick={onResetAngle} size="large">
        <CachedIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="가벽 세우기">
      <IconButton onClick={onBuildPartition} size="large">
        <SquareFootIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="화면 채우기">
      <IconButton onClick={onFullscreen} size="large">
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="펜">
      <IconButton onClick={onPen} size="large">
        <EditIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="텍스트 상자">
      <IconButton onClick={onTextBox} size="large">
        <TextFieldsIcon />
      </IconButton>
    </Tooltip>
  </Paper>
);

export default RoomTools;

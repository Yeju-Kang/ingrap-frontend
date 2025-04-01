import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FurnitureControls = ({ selectedFurniture, onDeleteFurniture }) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Tooltip title="가구 삭제">
        <span>
          <IconButton
            color="primary"
            disabled={!selectedFurniture}
            onClick={onDeleteFurniture}
          >
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default FurnitureControls;

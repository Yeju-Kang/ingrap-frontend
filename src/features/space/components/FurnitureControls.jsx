import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const FurnitureControls = ({ selectedFurniture, onDeleteFurniture, onSave }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: 2,
        py: 1,
      }}
    >
      {/* 왼쪽: 삭제 버튼 */}
      <Tooltip title="가구 삭제">
        <span>
          <IconButton
            disabled={!selectedFurniture}
            onClick={onDeleteFurniture}
            sx={{
              color: selectedFurniture ? "var(--primary-color)" : "inherit"
            }}
          >
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>

      {/* 오른쪽: 저장 버튼 (아이콘 버튼으로 변경 + 크기 & 색상 조정) */}
      <Tooltip title="저장하기">
        <IconButton
          onClick={onSave}
          sx={{
            color: "var(--primary-color)",
            '& svg': { fontSize: "28px" }
          }}
        >
          <SaveIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FurnitureControls;

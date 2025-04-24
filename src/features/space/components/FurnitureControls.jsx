// src/components/FurnitureControls.jsx
import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TuneIcon from "@mui/icons-material/Tune";               // 제품 설정
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"; // 제품 모두 삭제
import SaveIcon from "@mui/icons-material/Save";               // 내 방 저장
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; // 장바구니 담기
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"; // Space 캡처

const FurnitureControls = ({
  selectedFurniture,
  onDeleteFurniture,
  onProductSettings,   // 제품 설정 클릭 핸들러
  onDeleteAllProducts, // 제품 모두 삭제 클릭 핸들러
  onSaveSpace,         // 내 방 저장 클릭 핸들러
  onAddToCart,         // 선택제품 장바구니 담기 핸들러
  onCaptureSpace,      // Space 캡처 핸들러
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: 2,
        py: 1,
      }}
    >
      {/* 왼쪽 그룹 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* 1. 가구 삭제 */}
        <Tooltip title="가구 삭제">
          <span>
            <IconButton
              disabled={!selectedFurniture}
              onClick={onDeleteFurniture}
              sx={{
                color: selectedFurniture ? "var(--primary-color)" : "inherit",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </span>
        </Tooltip>

        {/* 2. 제품 설정 */}
        <Tooltip title="제품 설정">
          <IconButton onClick={onProductSettings} sx={{ color: "inherit" }}>
            <TuneIcon />
          </IconButton>
        </Tooltip>

        {/* 3. 제품 모두 삭제 */}
        <Tooltip title="제품 모두 삭제">
          <IconButton onClick={onDeleteAllProducts} sx={{ color: "inherit" }}>
            <DeleteSweepIcon />
          </IconButton>
        </Tooltip>

        {/* 4. 선택제품 장바구니 담기 */}
        <Tooltip title="선택제품 장바구니 담기">
          <IconButton onClick={onAddToCart} sx={{ color: "inherit" }}>
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>

        {/* 5. Space 캡처 */}
        <Tooltip title="Space 캡처">
          <IconButton onClick={onCaptureSpace} sx={{ color: "inherit" }}>
            <PhotoCameraIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* 오른쪽: 내 방 저장 */}
      <Tooltip title="내 방 저장하기">
        <IconButton
          onClick={onSaveSpace}
          sx={{
            color: "var(--primary-color)",
            "& svg": { fontSize: "28px" },
          }}
        >
          <SaveIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FurnitureControls;

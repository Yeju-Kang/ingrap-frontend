import React, { useState } from "react";
import {
  Dialog,
  Box,
  Typography,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetailDialog = ({ open, onClose, product, onApply }) => {
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");

  if (!product) return null;

  const handleApply = () => {
    const appliedProduct = {
      ...product,
      color,
      size,
    };

    // onApply이 가구, 벽지, 바닥 전부 적용되도록 처리
    onApply(appliedProduct);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box display="flex" flexDirection="row" p={3} bgcolor="#fdfdfb">
        {/* 왼쪽 이미지 */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
            padding: 2,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: 400,
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </Box>

        {/* 오른쪽 정보 */}
        <Box sx={{ width: "50%", pl: 3, position: "relative" }}>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" fontWeight={600} mb={1}>
            {product.name}
          </Typography>

          <Typography color="text.secondary" fontSize={14} mb={1}>
            오픈형 거실에 잘 어울리는 아이템이에요!
          </Typography>

          {/* 가구일 때만 옵션 선택 표시 */}
            <>
              <Typography fontSize={14} mb={1} color="text.secondary">
                ₩ 700,000 → <strong style={{ color: "#333" }}>₩ 300,000</strong>
              </Typography>

              <Box mb={2}>
                <Typography fontSize={14} mb={0.5}>
                  색상
                </Typography>
                <ToggleButtonGroup
                  value={color}
                  exclusive
                  onChange={(e, val) => val && setColor(val)}
                  size="small"
                  sx={{ gap: 1 }}
                >
                  <ToggleButton value="white" sx={{ width: 32, height: 32, background: "#f1f1f1" }} />
                  <ToggleButton value="black" sx={{ width: 32, height: 32, background: "#333" }} />
                  <ToggleButton value="beige" sx={{ width: 32, height: 32, background: "#d6c9a8" }} />
                </ToggleButtonGroup>
              </Box>

              <Box mb={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>사이즈 선택</InputLabel>
                  <Select
                    value={size}
                    label="사이즈 선택"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>

          {/* 액션 버튼 */}
          <Box display="flex" justifyContent="space-between" gap={1}>
            <Tooltip title="장바구니에 담기">
              <IconButton
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  width: 48,
                  height: 48,
                }}
              >
                <ShoppingBagIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="즐겨찾기 추가">
              <IconButton
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  width: 48,
                  height: 48,
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>

            <Button
              variant="contained"
              fullWidth
              onClick={handleApply}
              sx={{
                backgroundColor: "#c6c09c",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#b0ab87",
                },
              }}
            >
              내 공간 적용하기
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProductDetailDialog;

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
    onApply({
      ...product,
      color,
      size,
    });
    onClose();
  };

  return (
    <>
      {/* 오른쪽 외부 고정 아이콘 버튼 */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: "calc((100vw - 960px) / 2 - 45px)", // 팝업 우측 바깥 위치 (팝업 가로폭이 960px 기준)
            transform: "translateY(-50%)",
            zIndex: 1501, // Dialog 위에 올라오게
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Tooltip title="장바구니 담기" placement="left">
            <IconButton
              sx={{
                background: "#f0f0f0",
                borderRadius: "50%",
                width: 48,
                height: 48,
                border: "1px solid #d0d0d0",
                "&:hover": {
                  background: "#e0e0e0",
                },
              }}
            >
              <ShoppingBagIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="즐겨찾기 추가" placement="left">
            <IconButton
              sx={{
                background: "#f0f0f0",
                borderRadius: "50%",
                width: 48,
                height: 48,
                border: "1px solid #d0d0d0",
                "&:hover": {
                  background: "#e0e0e0",
                },
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}

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
            {/* 닫기 */}
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>

            <Typography variant="h6" fontWeight={600} mb={1}>
              {product.name}
            </Typography>

            <Typography color="text.secondary" fontSize={14} mb={1}>
              오픈형 거실에 잘 어울리는 원형 테이블로 자연의 분위기를 더해보세요!
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              ₩ 700,000
            </Typography>
            <Typography variant="h6" fontWeight={600} mb={2}>
              ₩ 300,000
            </Typography>

            {/* 색상 */}
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

            {/* 사이즈 */}
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

            {/* 태그 */}
            <Box display="flex" gap={1} flexWrap="wrap" mb={3}>
              {["거실", "주방", "오픈형", "화이트톤", "원목"].map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1,
                    py: 0.5,
                    background: "#f0f0f0",
                    borderRadius: "8px",
                    fontSize: 12,
                  }}
                >
                  #{tag}
                </Box>
              ))}
            </Box>

            {/* 적용 버튼 */}
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
      </Dialog>
    </>
  );
};

export default ProductDetailDialog;

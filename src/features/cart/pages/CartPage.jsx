import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Checkbox,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const initialCartItems = [
  {
    id: 1,
    name: "한샘키친 리빙의자",
    color: "orange",
    option: 4,
    price: 930000,
    discount: 10000,
    quantity: 1,
  },
  {
    id: 2,
    name: "한샘키친 리빙의자",
    color: "orange",
    option: 2,
    price: 930000,
    discount: 5000,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState(
    initialCartItems.map((item) => item.id)
  );

  const isSelected = (id) => selectedItems.includes(id);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveSelected = () => {
    setCartItems((items) => items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    setSelectedItems(
      selectedItems.length === cartItems.length ? [] : cartItems.map((item) => item.id)
    );
  };

  const totalQuantity = selectedItems
    .map((id) => cartItems.find((item) => item.id === id))
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box sx={{ px: 4, py: 4, pt: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        <Box textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "var(--text-color)", fontSize: "1.3rem" }}
          >
            나의 장바구니
          </Typography>
          <Box
            sx={{
              height: "2px",
              width: "120px",
              backgroundColor: "var(--primary-color)",
              borderRadius: "2px",
              mt: "8px",
              mx: "auto",
            }}
          />
        </Box>
      </Box>

      {/* 상단 제어 */}
      <Box display="flex" gap={2} mb={2}>
        <Button
          onClick={handleRemoveSelected}
          variant="outlined"
          sx={{
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              borderColor: "var(--primary-color)",
            },
          }}
        >
          선택 항목 삭제
        </Button>
        <Button
          onClick={handleSelectAll}
          variant="outlined"
          sx={{
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              borderColor: "var(--primary-color)",
            },
          }}
        >
          전체 선택
        </Button>
      </Box>

      {/* 헤더 */}
      <Paper sx={{ display: "flex", px: 2, py: 1, mb: 1, bgcolor: "#ecebe5" }}>
        <Box width="5%" display="flex" alignItems="center" />
        <Box width="30%" display="flex" alignItems="center">
          <Typography fontWeight={600}>상품 정보</Typography>
        </Box>
        <Box width="10%" display="flex" alignItems="center">
          <Typography fontWeight={600}>수량 조정</Typography>
        </Box>
        <Box width="15%" display="flex" alignItems="center">
          <Typography fontWeight={600}>정상가</Typography>
        </Box>
        <Box width="10%" display="flex" alignItems="center">
          <Typography fontWeight={600}>할인 혜택</Typography>
        </Box>
        <Box width="15%" display="flex" alignItems="center">
          <Typography fontWeight={600}>최종 결제액</Typography>
        </Box>
        <Box width="10%" display="flex" alignItems="center">
          <Typography fontWeight={600}>배송비</Typography>
        </Box>
      </Paper>

      {/* 장바구니 아이템 */}
      {cartItems.map((item) => {
        const finalPrice = item.price * item.quantity - item.discount;

        return (
          <Paper key={item.id} sx={{ display: "flex", px: 2, py: 2, mb: 2 }}>
            <Box width="5%" display="flex" alignItems="center" justifyContent="center">
              <Checkbox
                checked={isSelected(item.id)}
                onChange={() => toggleSelect(item.id)}
                sx={{
                  color: "var(--primary-color)",
                  "&.Mui-checked": {
                    color: "var(--primary-color)",
                  },
                }}
              />
            </Box>

            <Box width="30%" display="flex" flexDirection="column" justifyContent="center">
              <Typography fontWeight={500}>{item.name}</Typography>
              <Typography fontSize={14} color="text.secondary">
                색상:{" "}
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    backgroundColor: item.color,
                    borderRadius: "4px",
                    ml: 0.5,
                    verticalAlign: "text-top",
                  }}
                />
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                옵션: {item.option}
              </Typography>
            </Box>

            <Box width="10%" display="flex" alignItems="center" gap={1}>
              <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}>
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box width="15%" display="flex" alignItems="center">
              <Typography>{item.price.toLocaleString()}₩</Typography>
            </Box>
            <Box width="10%" display="flex" alignItems="center">
              <Typography>{item.discount.toLocaleString()}₩</Typography>
            </Box>
            <Box width="15%" display="flex" alignItems="center">
              <Typography fontWeight={600}>{finalPrice.toLocaleString()}₩</Typography>
            </Box>
            <Box width="10%" display="flex" alignItems="center">
              <Typography>3,000₩</Typography>
            </Box>
          </Paper>
        );
      })}

      {/* 주문 버튼 */}
      <Box display="flex" justifyContent="flex-end" mt={4}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#b8b297",
            color: "#fff",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#a5a088",
            },
          }}
        >
          총 {totalQuantity}개 주문하기
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;

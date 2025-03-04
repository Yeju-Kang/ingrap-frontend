import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Button } from "@mui/material";

const ProductInfo = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box ml={4}>
      <Typography variant="h5" fontWeight="bold">{product.name}</Typography>
      <Typography variant="h6" color="gray">₩ {product.price.toLocaleString()}</Typography>
      <Typography variant="body1" mt={2}>{product.description}</Typography>

      <Typography variant="subtitle1" mt={2}>색상 선택</Typography>
      <Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} fullWidth>
        <MenuItem value="월넛">월넛</MenuItem>
        <MenuItem value="오크">오크</MenuItem>
        <MenuItem value="화이트">화이트</MenuItem>
      </Select>

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>장바구니에 담기</Button>
    </Box>
  );
};

export default ProductInfo;
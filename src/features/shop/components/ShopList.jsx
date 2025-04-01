import React, { useState } from "react";
import { Box, Grid, Typography, Switch, FormControlLabel, Select, MenuItem } from "@mui/material";
import ProductCard from "./ShopCard";

const initialProducts = [
  { id: 1, name: "우드 모던 테이블", price: 374000, image: "/table1.jpg", sale: true, inStock: true },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, image: "/table2.jpg", sale: false, inStock: true },
  { id: 3, name: "화이트 오크 테이블", price: 407000, image: "/table3.jpg", sale: false, inStock: false },
  { id: 4, name: "월넛 원목 테이블", price: 781000, image: "/table4.jpg", sale: true, inStock: true },
];

const ShopList = () => {
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState("추천순");

  const filteredProducts = initialProducts
    .filter(product => (showSaleOnly ? product.sale : true))
    .filter(product => (showInStockOnly ? product.inStock : true))
    .sort((a, b) => (sortOption === "가격 낮은 순" ? a.price - b.price : sortOption === "가격 높은 순" ? b.price - a.price : 0));

  return (
    <Box p={4}>
      {/* 상단 필터 & 정렬 */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <FormControlLabel
            control={<Switch checked={showSaleOnly} onChange={() => setShowSaleOnly(!showSaleOnly)} />}
            label="세일 품목만"
          />
          <FormControlLabel
            control={<Switch checked={showInStockOnly} onChange={() => setShowInStockOnly(!showInStockOnly)} />}
            label="재고 있는 제품만"
          />
        </Box>
        <Select value={sortOption} onChange={(e) => setSortOption(e.target.value)} size="small">
          <MenuItem value="추천순">추천순</MenuItem>
          <MenuItem value="가격 낮은 순">가격 낮은 순</MenuItem>
          <MenuItem value="가격 높은 순">가격 높은 순</MenuItem>
        </Select>
      </Box>

      {/* 상품 목록 */}
      <Grid container spacing={2} justifyContent="center">
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopList;
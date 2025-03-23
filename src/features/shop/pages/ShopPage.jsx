import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ShopCard";
import HeroBanner from "../components/HeroBanner"; // ✅ HeroBanner 추가
import FilterBar from "../components/FilterBar"; // ✅ 필터 컴포넌트 추가

const products = [
  { id: 1, name: "우드 모던 테이블", price: 374000, image: "/assets/images/table1.avif", category: "테이블" },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, image: "/assets/images/room1.jpg", category: "테이블" },
  { id: 3, name: "화이트 오크 테이블", price: 407000, image: "/assets/images/room2.jpg", category: "테이블" },
];

const ShopPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ 필터링된 상품 목록
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box>
      <HeroBanner /> {/* ✅ HeroBanner 추가 */}
      
      {/* ✅ 필터 추가 */}
      <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Box p={4}>
        <Grid container spacing={2} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} onClick={() => navigate(`/shop/${product.id}`)} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopPage;

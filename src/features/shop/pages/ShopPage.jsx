import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ShopCard";
import HeroBanner from "../components/HeroBanner";
import FilterBar from "../components/FilterBar";
import imageMap from "../../../assets/imageMap";

const products = [
  { id: 1, name: "우드 모던 테이블", price: 374000, image: imageMap.section.home.room1, category: "테이블" },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, image: "/assets/images/room1.jpg", category: "테이블" },
  { id: 3, name: "화이트 오크 테이블", price: 407000, image: "/assets/images/room2.jpg", category: "테이블" },
  { id: 4, name: "다크 우드 테이블", price: 450000, image: "/assets/images/room2.jpg", category: "테이블" },
  { id: 5, name: "라운드 테이블", price: 390000, image: "/assets/images/room2.jpg", category: "테이블" },
];

const ShopPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box>
      <HeroBanner />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px", // 카드 사이 간격
            px: "120px", // 양끝 여백 고정
            maxWidth: "1600px",
            justifyContent: "flex-start",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate(`/shop/${product.id}`)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ShopPage;

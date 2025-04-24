import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ShopCard";
import HeroBanner from "../components/HeroBanner";
import imageMap from "../../../assets/imageMap";
import FilterBar from "../components/FilterBar";


const CARD_WIDTH = 280;
const GAP = 24;

const products = [
  { id: 1, name: "라이트 우드 침대", price: 850000, image: imageMap.section.shop.lightWoodBed },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, image: "/assets/images/room1.jpg" },
  { id: 3, name: "화이트 오크 테이블", price: 407000, image: "/assets/images/room2.jpg" },
  { id: 4, name: "다크 우드 테이블", price: 450000, image: "/assets/images/room2.jpg" },
  { id: 5, name: "라운드 테이블", price: 390000, image: "/assets/images/room2.jpg" },
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
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, ${CARD_WIDTH}px)`,
            gap: `${GAP}px`,
            justifyContent: "center",
            width: "100%",
            maxWidth: `calc(${CARD_WIDTH * 4 + GAP * 3}px)`,
          }}
        >
          {products.map((product) => (
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

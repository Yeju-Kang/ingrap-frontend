import React from "react";
import { Box, Typography } from "@mui/material";

const categories = [
  { name: "신제품", image: "/assets/images/new_product.png" },
  { name: "침대/매트리스", image: "/assets/images/bed.png" },
  { name: "소파 및 암체어", image: "/assets/images/sofa.png" },
  { name: "수납/정리", image: "/assets/images/storage.png" },
  { name: "책상/책상 의자", image: "/assets/images/desk.png" },
  { name: "식탁/테이블/의자", image: "/assets/images/dining.png" },
  { name: "아웃도어/야외용품", image: "/assets/images/outdoor.png" },
  { name: "화분/식물", image: "/assets/images/plants.png" },
  { name: "홈데코/장식품", image: "/assets/images/deco.png" },
  { name: "텍스타일", image: "/assets/images/textile.png" },
  { name: "러그/매트/데코", image: "/assets/images/rug.png" },
  { name: "조명", image: "/assets/images/lamp.png" },
  { name: "홈스마트", image: "/assets/images/smart_home.png" },
];

const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box display="flex" justifyContent="center" p={2} sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {categories.map((category) => (
        <Box
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          sx={{
            cursor: "pointer",
            textAlign: "center",
            mx: 1,
            opacity: selectedCategory === category.name ? 1 : 0.6,
            transition: "opacity 0.3s",
          }}
        >
          <img src={category.image} alt={category.name} style={{ width: 60, height: 60 }} />
        </Box>
      ))}
    </Box>
  );
};

export default FilterBar;

import React from "react";
import { Box, Typography } from "@mui/material";
import imageMap from "../../../assets/imageMap";
import { isEmpty } from "lodash";

const categories = [
  { name: "침실", image: imageMap.section.shop.bedroom },
  { name: "거실", image: imageMap.section.shop.living},
  { name: "주방", image: imageMap.section.shop.kitchen },
  { name: "욕실", image: imageMap.section.shop.bathroom},
  { name: "테라스", image: imageMap.section.shop.terrace },
  { name: "야외", image:imageMap.section.shop.outdoor},
  { name: "조명", image:imageMap.section.shop.lighting },
  { name: "상가", image: imageMap.section.shop.store},
];


const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  console.log('selectedCategory ', selectedCategory )

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
          opacity:
            isEmpty(selectedCategory) || selectedCategory === category.name
              ? 1
              : 0.6,
          transition: "opacity 0.3s",
        }}
      >
        <img
          src={category.image}
          alt={category.name}
          style={{
            maxWidth: 80,
            maxHeight: 80,
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: "0.75rem",
            color: "#4e4e4e", // 예주 사이트 텍스트 컬러
          }}
        >
          {category.name}
        </Typography>
      </Box>
      
      ))}
    </Box>
  );
};

export default FilterBar;

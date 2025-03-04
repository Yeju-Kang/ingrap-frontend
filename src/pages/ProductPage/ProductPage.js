import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "우드 모던 테이블", price: 374000, image: "../../assets/images/table1.avif" },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, image: "../../assets/images/room1.jpg" },
  { id: 3, name: "화이트 오크 테이블", price: 407000, image: "../../assets/images/room2.jpg" },
];

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" mb={3}>가구 목록</Typography>
      <Grid container spacing={2} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} onClick={() => navigate(`/products/${product.id}`)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
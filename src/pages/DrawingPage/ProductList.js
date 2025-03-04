import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, List } from "@mui/material";

const products = [
  { id: 1, name: "알렉스뮐러 타니코 원목 테이블", price: 2250000, image: "/table1.jpg" },
  { id: 2, name: "알렉스뮐러 AT 화이트 오크 원목 테이블", price: 2150000, image: "/table2.jpg" },
  { id: 3, name: "알렉스뮐러 로로이 포르토 원목 테이블", price: 4000000, image: "/table3.jpg" },
];

const ProductList = () => {
  return (
    <List>
      {products.map((product) => (
        <Card key={product.id} sx={{ display: "flex", mb: 2 }}>
          <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: 80 }} />
          <CardContent>
            <Typography variant="body1">{product.name}</Typography>
            <Typography variant="body2">{product.price.toLocaleString()}원</Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default ProductList;
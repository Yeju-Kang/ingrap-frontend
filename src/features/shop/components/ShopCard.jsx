import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ShopCard = ({ product, onClick }) => {
  return (
    <Card
      sx={{
        width: "280px", // ✅ 고정 크기
        cursor: "pointer",
        flexShrink: 0,
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₩ {product.price.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShopCard;

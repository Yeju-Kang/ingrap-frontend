import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ShopCard = ({ product, onClick }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, cursor: "pointer" }} onClick={onClick}>
      <CardMedia component="img" height="200" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">₩ {product.price.toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default ShopCard;
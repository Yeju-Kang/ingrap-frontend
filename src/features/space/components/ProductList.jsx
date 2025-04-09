import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const products = [
  { id: 1, name: "원목 테이블", type: "furniture", model: "/chair.glb", image: "/chair.png" },
  { id: 2, name: "화이트 오크 테이블", type: "furniture", model: "/bed.glb", image: "/bed.png" },
  { id: 3, name: "화이트 벽지", type: "wallpaper", image: "/textures/wallpaper/Wallpaper001A_4K-PNG_Color.png" },
  { id: 4, name: "우드 바닥", type: "wallpaper", image: "/textures/wallpaper/Fabric058_4K-PNG_Color.png" },
];

const ProductList = ({ onAddFurniture, onSetWallpaper, onSetFlooring }) => {
  const handleClick = (product) => {
    switch (product.type) {
      case "furniture":
        onAddFurniture(product);
        break;
      case "wallpaper":
        onSetWallpaper(product.image);
        break;
      case "flooring":
        onSetFlooring(product.image);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={2} sx={{ padding: "0px 16px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} key={product.id}>
          <Card
            onClick={() => handleClick(product)}
            sx={{
              cursor: "pointer",
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: "12px",
              transition: "0.2s",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <CardContent sx={{ padding: "12px 8px", textAlign: "center" }}>
              <Typography variant="body2" fontWeight={500}>
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

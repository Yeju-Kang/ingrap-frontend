import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import chair1 from "../../../assets/images/chair1-1.png";
import chair2 from "../../../assets/images/chair1-2.glb";
import bed1 from "../../../assets/images/bed1-1.png";
import bed2 from "../../../assets/images/bed1-2.glb";

const products = [
  { id: 1, name: "원목 테이블", model: chair2, image: chair1 },
  { id: 2, name: "알렉스뮐러 AT 화이트 오크 원목 테이블", model: bed2, image: bed1 },
  { id: 3, name: "알렉스뮐러 로로이 포르토 원목 테이블", model: chair2, image: chair1 },
];

const ProductList = ({ onAddFurniture }) => {
  return (
    <Grid container spacing={2} sx={{ padding: "0px 16px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} key={product.id}>
          <Card
            onClick={() => onAddFurniture(product)}
            sx={{
              cursor: "pointer",
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: "12px",
              transition: "0.2s",
              '&:hover': {
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
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  whiteSpace: "normal", // ✅ 줄바꿈 허용
                  wordBreak: "keep-all", // ✅ 단어 단위로 끊기
                }}
              >
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

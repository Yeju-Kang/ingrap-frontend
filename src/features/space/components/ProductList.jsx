import React from "react";
import { Card, CardMedia, Grid } from "@mui/material";
import chair1 from "../../../assets/images/chair1-1.png"
import chair2 from "../../../assets/images/chair1-2.glb"
import bed1 from "../../../assets/images/bed1-1.png"
import bed2 from "../../../assets/images/bed1-2.glb"


const products = [
  { id: 1, name: "알렉스뮐러 타니코 원목 테이블", model: chair2, image: chair1 },
  { id: 2, name: "알렉스뮐러 AT 화이트 오크 원목 테이블", model: bed2, image: bed1 },
  { id: 3, name: "알렉스뮐러 로로이 포르토 원목 테이블", model: chair2, image: chair1 },
];

const ProductList = ({ onAddFurniture }) => {
  return (
    <Grid container spacing={1}  sx={{
      padding: "0px 16px",
    }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card
            sx={{ cursor: "pointer" }}
            onClick={() => onAddFurniture(product)} // ✅ 클릭 시 가구 추가
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: 100,
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

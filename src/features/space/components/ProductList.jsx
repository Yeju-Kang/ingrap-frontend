import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import ProductDetailDialog from "./ProductDetailDialog"; // 새로 만든 팝업 컴포넌트 import

// 예시 상품
const products = [
  { id: 1, name: "원목 테이블", model: "/chair.glb", image: "/chair.png" },
  { id: 2, name: "화이트 오크 테이블", model: "/bed.glb", image: "/bed.png" },
];

const ProductList = ({ onAddFurniture }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "0px 16px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} key={product.id}>
            <Card
              onClick={() => setSelectedProduct(product)}
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

      <ProductDetailDialog
        open={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onApply={onAddFurniture}
      />
    </>
  );
};

export default ProductList;

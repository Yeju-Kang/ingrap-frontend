import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        🛍️ 상품 상세
      </Typography>
      <Typography variant="body1">상품 ID: {productId}</Typography>
    </div>
  );
}

export default ProductDetailPage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
import ThumbnailList from "./ThumbnailList";
import ProductInfo from "./ProductInfo";

const products = [
  { id: 1, name: "우드 모던 테이블", price: 374000, description: "고급스러운 원목 테이블.", image: "../../assets/images/room1.jpg", thumbnails: ["../../assets/images/room1.jpg", "../../assets/images/room1.jpg"] },
  { id: 2, name: "빈티지 우드 테이블", price: 473000, description: "빈티지한 감성의 테이블.", image: "../../assets/images/room1.jpg", thumbnails: ["../../assets/images/room1.jpg", "../../assets/images/room1.jpg"] },
  { id: 3, name: "화이트 오크 테이블", price: 407000, description: "화이트 오크로 만든 튼튼한 테이블.", image: "../../assets/images/room1.jpg", thumbnails: ["../../assets/images/room1.jpg", "../../assets/images/room1.jpg"] },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(product .image);

  return (
    <Box display="flex" p={4} sx={{marginTop: '80px'}}>
      <ThumbnailList thumbnails={product.thumbnails} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <CardMedia component="img" image={selectedImage} sx={{ width: 400, height: 400, objectFit: "cover" }} />
      <ProductInfo product={product} />
    </Box>
  );
};

export default ProductDetailPage;
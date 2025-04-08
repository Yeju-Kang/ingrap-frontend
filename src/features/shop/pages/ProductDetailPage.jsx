import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CardMedia,
  Typography,
  Button,
  MenuItem,
  Select,
  Tabs,
  Tab,
  Paper,
  Rating,
} from "@mui/material";
import ThumbnailList from "../components/ThumbnailList";

const products = [
  {
    id: 1,
    name: "우드 모던 테이블",
    price: 374000,
    description: "고급스러운 원목 테이블.",
    image: "/assets/images/room1.jpg",
    thumbnails: ["/assets/images/room1.jpg", "/assets/images/room1.jpg"],
    reviews: [
      { content: "가구 튼튼하네요. 카페에 두고 사용하는데 좋아요", rating: 5 },
      { content: "괜찮네요", rating: 3 },
    ],
  },
  {
    id: 2,
    name: "빈티지 우드 테이블",
    price: 473000,
    description: "빈티지한 감성의 테이블.",
    image: "/assets/images/room1.jpg",
    thumbnails: ["/assets/images/room1.jpg", "/assets/images/room1.jpg"],
    reviews: [],
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: "80px", px: 4 }}>
      {/* 상단 콘텐츠 */}
      <Box display="flex" gap={4} mb={4}>
        {/* 썸네일 + 메인 이미지 */}
        <Box width="50%">
          <Box display="flex" gap={2}>
            <ThumbnailList
              thumbnails={product.thumbnails}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <CardMedia
              component="img"
              image={selectedImage}
              sx={{
                width: 400,
                height: 400,
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* 제품 정보 */}
        <Box width="50%">
          <Box mb={1}>
            <Rating value={3} readOnly />
          </Box>
          <Typography variant="h6" fontWeight={600} mb={1}>
            {product.name}
          </Typography>
          <Typography color="text.secondary" mb={2}>
            {product.description}
          </Typography>
          <Typography variant="h6" fontWeight={700} mb={2}>
            ₩ {product.price.toLocaleString()}
          </Typography>

          {/* 색상 선택 */}
          <Select
            fullWidth
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            displayEmpty
            sx={{ mb: 2 }}
          >
            <MenuItem value="">색상 선택</MenuItem>
            <MenuItem value="화이트">화이트</MenuItem>
            <MenuItem value="오크">오크</MenuItem>
            <MenuItem value="월넛">월넛</MenuItem>
          </Select>

          {/* 장바구니 담기 */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              fontWeight: 600,
              borderRadius: 2,
              "&:hover": { backgroundColor: "#a5a088" },
            }}
          >
            장바구니에 담기
          </Button>
        </Box>
      </Box>

      {/* 하단 탭 영역 */}
      <Box>
        <Tabs
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          variant="fullWidth"
          textColor="inherit"
          TabIndicatorProps={{ style: { background: "var(--primary-color)" } }}
        >
          <Tab label="제품 상세" />
          <Tab label="사용자 리뷰" />
          <Tab label="상품 문의" />
          <Tab label="배송 정보" />
        </Tabs>

        <Paper sx={{ mt: 2, p: 3, minHeight: "160px" }}>
          {tabIndex === 0 && (
            <Typography variant="body1">
              이 제품은 자연 친화적인 원목으로 제작되었으며, 집안 어디에 두어도 잘 어울리는 클래식한 스타일의 테이블입니다.
            </Typography>
          )}

          {tabIndex === 1 && (
            <>
              {product.reviews?.length > 0 ? (
                product.reviews.map((r, idx) => (
                  <Box key={idx} mb={2}>
                    <Rating value={r.rating} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {r.content}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography color="text.secondary">
                  아직 작성된 리뷰가 없습니다.
                </Typography>
              )}
            </>
          )}

          {tabIndex === 2 && (
            <Typography color="text.secondary">
              상품에 대해 궁금한 점이 있으신가요? 고객센터를 통해 문의해주세요.
            </Typography>
          )}

          {tabIndex === 3 && (
            <Typography color="text.secondary">
              평균 배송일은 결제 완료 후 2~5일이며, 택배사 상황에 따라 차이가 있을 수 있습니다.
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;

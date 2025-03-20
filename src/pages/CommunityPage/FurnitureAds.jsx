import React, { useRef } from "react";
import { Box, Grid, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const furnitureItems = [
  {
    id: 1,
    brand: "알렉스뮐러",
    logo: "/brand-logo1.jpg",
    description: "모던한 디자인의 고급 원목 가구",
    preview: ["/furniture1.jpg", "/furniture2.jpg", "/furniture3.jpg", "/furniture4.jpg"],
  },
  {
    id: 2,
    brand: "홈스타일",
    logo: "/brand-logo2.jpg",
    description: "편안함과 디자인을 동시에",
    preview: ["/furniture5.jpg", "/furniture6.jpg", "/furniture7.jpg", "/furniture8.jpg"],
  },
  {
    id: 3,
    brand: "북유럽 감성",
    logo: "/brand-logo3.jpg",
    description: "미니멀 감성의 북유럽 스타일",
    preview: ["/furniture9.jpg", "/furniture10.jpg", "/furniture11.jpg", "/furniture12.jpg"],
  },
  {
    id: 4,
    brand: "럭셔리 홈",
    logo: "/brand-logo4.jpg",
    description: "최고급 원목으로 만든 프리미엄 가구",
    preview: ["/furniture13.jpg", "/furniture14.jpg", "/furniture15.jpg", "/furniture16.jpg"],
  },
];

const FurnitureAds = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // ✅ 브랜드 클릭 시 상세 페이지 이동

  // 좌우 스크롤 함수
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ mt: 5, p: 2, backgroundColor: "#f8f9fa", borderRadius: "12px", position: "relative" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        추천 가구 브랜드
      </Typography>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* 가구 목록 */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            p: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {furnitureItems.map((item) => (
            <Box
              key={`furniture-${item.id}`} // ✅ 중복 방지: key 값에 `furniture-` 추가
              sx={{
                minWidth: "260px",
                maxWidth: "260px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: 2,
                p: 2,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" }, // ✅ 호버 시 확대 효과 추가
              }}
              onClick={() => navigate(`/shop/${item.id}`)} // ✅ 클릭 시 상세 페이지 이동
            >
              {/* 브랜드 정보 */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src={item.logo} sx={{ width: 40, height: 40, mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {item.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>

              {/* 가구 미리보기 */}
              <Box sx={{ display: "flex", gap: 1, overflow: "hidden" }}>
                {item.preview.map((img, index) => (
                  <img
                    key={`${item.id}-preview-${index}`} // ✅ 중복 방지: id + preview index 조합
                    src={img}
                    alt="가구 이미지"
                    style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* 좌우 이동 버튼 */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: 2,
            zIndex: 10,
            "&:hover": { backgroundColor: "#e0e0e0" },
            display: furnitureItems.length > 3 ? "flex" : "none", // ✅ 가구 브랜드 개수에 따라 버튼 표시/숨김
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: 2,
            zIndex: 10,
            "&:hover": { backgroundColor: "#e0e0e0" },
            display: furnitureItems.length > 3 ? "flex" : "none", // ✅ 가구 브랜드 개수에 따라 버튼 표시/숨김
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FurnitureAds;

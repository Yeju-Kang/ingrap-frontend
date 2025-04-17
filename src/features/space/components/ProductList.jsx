import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import imageMap from "../../../assets/imageMap";

const ProductList = ({
  onProductClick,
  selectedType = "all",
  searchKeyword = "",
  panelWidth = 500, // ✅ 기본값
}) => {
  const products = [
    { id: 1, name: "의자", type: "chair", model:imageMap.section.shop.chair, image: imageMap.section.shop.chairimg },
    { id: 2, name: "침대", type: "bed", model: imageMap.section.shop.bed, image:  imageMap.section.shop.bedimg },
    { id: 4, name: "화이트 벽지", type: "wallpaper", image: "/textures/wallpaper/Wallpaper001A_4K-PNG_Color.png" },
    { id: 5, name: "우드 바닥", type: "flooring", image: "/textures/wallpaper/wood_floor_diff_4k.jpg" },
    { id: 6, name: "소파", type: "sofa", model: imageMap.section.shop.sofa, image: imageMap.section.shop.sofaimg},
    { id: 7, name: "수납장", type: "storage", model: imageMap.section.shop.drawer, image: imageMap.section.shop.drawerimg },
  ];

  const filtered = products.filter((p) => {
    const matchType = selectedType === "all" || p.type === selectedType;
    const matchKeyword = p.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchType && matchKeyword;
  });

  const columnCount = panelWidth >= 720 ? 3 : panelWidth >= 480 ? 2 : 1;
  const gridSize = 12 / columnCount;

  return (
    <Grid container spacing={2} sx={{ padding: "0px 16px" }}>
      {filtered.map((product) => (
        <Grid item xs={12} sm={gridSize} key={product.id}>
          <Card
            onClick={() => onProductClick(product)}
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

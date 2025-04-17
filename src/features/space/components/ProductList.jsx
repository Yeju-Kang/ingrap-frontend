import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const ProductList = ({
  onProductClick,
  selectedType = "all",
  searchKeyword = "",
  panelWidth = 500, // ✅ 기본값
}) => {
  const products = [
    { id: 1, name: "원목 의자자", type: "chair", model: "/chair4.glb", image: "/chair.png" },
    { id: 2, name: "화이트 침대", type: "bed", model: "/bed4.glb", image: "/bed.png" },
    { id: 3, name: "박스 의자", type: "chair", model: "/box.glb", image: "/box.png" },
    { id: 4, name: "화이트 벽지", type: "wallpaper", image: "/textures/wallpaper/Wallpaper001A_4K-PNG_Color.png" },
    { id: 5, name: "우드 바닥", type: "flooring", image: "/textures/wallpaper/Fabric058_4K-PNG_Color.png" },
    { id: 6, name: "쇼케이스", type: "storage", model: "/showcase.glb", image: "/textures/wallpaper/Fabric058_4K-PNG_Color.png" },
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

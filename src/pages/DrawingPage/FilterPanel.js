import React, { useState } from "react";
import { Typography, IconButton, List, ListItem, Divider, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  { label: "침대", id: "bed" },
  { label: "테이블", id: "table" },
  { label: "의자", id: "chair" },
  { label: "소파", id: "sofa" },
  { label: "수납장", id: "storage" },
  { label: "조명", id: "lighting" },
];

const FilterPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleFilterClick = () => {
    setIsPanelOpen(true);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setTimeout(() => {
      setIsPanelOpen(false);
    }, 500);
  };

  return (
    <>
      {/* ✅ 필터 버튼 */}
      <Button
        variant="contained"
        onClick={handleFilterClick}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: "8px 16px",
          margin: "10px",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
      >
        필터
      </Button>

      {/* ✅ 오버레이 (패널 활성화 시 배경을 반투명하게) */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
                zIndex: 1000, // 가구 목록 위에 위치
              }}
              onClick={() => setIsPanelOpen(false)} // 오버레이 클릭 시 패널 닫힘
            />

            {/* ✅ 필터 패널 */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                width: "300px",
                backgroundColor: "#ffffff",
                boxShadow: "-2px 0px 10px rgba(0, 0, 0, 0.2)",
                position: "fixed",
                top: 0,
                right: 0,
                height: "100vh",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                zIndex: 1100, // 가구 목록보다 높게 배치
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                가구 카테고리
              </Typography>
              <Divider />

              <List>
                {categories.map((category) => (
                  <ListItem
                    key={category.id}
                    button
                    onClick={() => handleCategoryClick(category.id)}
                    sx={{
                      padding: "10px",
                      fontWeight: selectedCategory === category.id ? "bold" : "normal",
                      backgroundColor: selectedCategory === category.id ? "#ddd" : "transparent",
                      "&:hover": { backgroundColor: "#eee" },
                    }}
                  >
                    {category.label}
                  </ListItem>
                ))}
              </List>

              {/* ✅ 닫기 버튼 */}
              <IconButton
                onClick={() => setIsPanelOpen(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                ❌
              </IconButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterPanel;

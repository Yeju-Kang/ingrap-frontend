import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  Divider,
  Box,
  InputBase,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  { label: "전체", id: "all" }, // ✅ 추가
  { label: "침대", id: "bed" },
  { label: "테이블", id: "table" },
  { label: "의자", id: "chair" },
  { label: "소파", id: "sofa" },
  { label: "수납장", id: "storage" },
  { label: "조명", id: "lighting" },
];


const FilterPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // "전체"로 시작
  const [search, setSearch] = useState("");
  const [elementType, setElementType] = useState("전체");

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f6",
          padding: "24px 16px 0px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* 드롭다운 */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="element-select-label">카테고리</InputLabel>
          <Select
            labelId="element-select-label"
            value={elementType}
            onChange={(e) => setElementType(e.target.value)}
            label="카테고리"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#fff",
            }}
          >
            <MenuItem value="전체">전체</MenuItem>
            <MenuItem value="침대">침대</MenuItem>
            <MenuItem value="테이블">테이블</MenuItem>
            <MenuItem value="의자">의자</MenuItem>
            <MenuItem value="소파">소파</MenuItem>
            <MenuItem value="수납장">수납장</MenuItem>
            <MenuItem value="조명">조명</MenuItem>
          </Select>
        </FormControl>

        {/* 검색창 */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "4px 12px",
            borderRadius: "30px",
            boxShadow: "none",
            backgroundColor: "#f0f0ea",
            mb: 2,
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon sx={{ color: "#888", mr: 1 }} />
          <InputBase
            placeholder="가구 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1 }}
          />
        </Paper>
        <Divider sx={{ mb: 2 }} />
      </Box>
  );
};

export default FilterPanel;

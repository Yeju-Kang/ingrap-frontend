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
  { label: "전체", id: "all" }, 
  { label: "침대", id: "bed" },
  { label: "테이블", id: "table" },
  { label: "의자", id: "chair" },
  { label: "소파", id: "sofa" },
  { label: "수납장", id: "storage" },
  { label: "조명", id: "lighting" },
  { label: "바닥", id: "flooring" }, 
  { label: "벽지", id: "wallpaper" },
];


const FilterPanel = ({ selectedCategory, onCategoryChange, searchKeyword, onSearchChange  }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

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
          value={selectedCategory}
          onChange={handleChange}
          label="카테고리"
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.label}
            </MenuItem>
          ))}
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
    placeholder="검색"
    value={searchKeyword}
    onChange={(e) => onSearchChange(e.target.value)}
    sx={{ flex: 1 }}
  />
      </Paper>
      <Divider sx={{ mb: 2 }} />
    </Box>
  );
};

export default FilterPanel;
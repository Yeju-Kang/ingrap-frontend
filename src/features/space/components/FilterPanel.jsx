import React from "react";
import {
  Box,
  InputBase,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const types = [
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

const FilterPanel = ({
  selectedType,
  onTypeChange,
  searchKeyword,
  onSearchChange,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f9f9f6",
        padding: "24px 16px 0px 16px",
        boxSizing: "border-box",
      }}
    >
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="type-select-label">종류</InputLabel>
        <Select
          labelId="type-select-label"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          label="종류"
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        >
          {types.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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

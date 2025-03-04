import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Select, MenuItem, Slider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <Box width="300px" p={2} sx={{ borderLeft: "2px solid gray", bgcolor: "white" }}>
      <Typography variant="h6" fontWeight="bold">Products</Typography>

      {/* 필터 옵션 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>필터</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField label="브랜드" fullWidth margin="dense" value={filters.brand} disabled />
          <Select name="type" value={filters.type} onChange={handleFilterChange} fullWidth margin="dense">
            <MenuItem value="Table">테이블</MenuItem>
          </Select>
          <Select name="material" value={filters.material} onChange={handleFilterChange} fullWidth margin="dense">
            <MenuItem value="Wood">나무</MenuItem>
          </Select>
          <Select name="color" value={filters.color} onChange={handleFilterChange} fullWidth margin="dense">
            <MenuItem value="None">None</MenuItem>
          </Select>
          <Typography gutterBottom>가격 범위</Typography>
          <Slider
            value={filters.price}
            onChange={(e, newValue) => setFilters({ ...filters, price: newValue })}
            min={0}
            max={10000000}
            valueLabelDisplay="auto"
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterPanel;
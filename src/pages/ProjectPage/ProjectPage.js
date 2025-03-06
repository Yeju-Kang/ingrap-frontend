import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import RoomArea from "./RoomArea";

const ProjectPage = () => {
  const [filters, setFilters] = useState({
    brand: "ALEX MULLER",
    type: "Table",
    material: "Wood",
    color: "None",
    price: [0, 10000000],
  });

  const [furnitureList, setFurnitureList] = useState([]); // ✅ 선택된 가구 리스트

  const handleAddFurniture = (furniture) => {
    setFurnitureList((prev) => [...prev, furniture]);
  };

  return (
    <Box display="flex" height="100vh" sx={{ marginTop: "80px" }}>
      <Sidebar />
      <RoomArea furnitureList={furnitureList} />
      <Box width="300px" display="flex" flexDirection="column">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <ProductList onAddFurniture={handleAddFurniture} />
      </Box>
    </Box>
  );
};

export default ProjectPage;

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

  const [furnitureList, setFurnitureList] = useState([]);

  const handleAddFurniture = (furniture) => {
    const newFurniture = {
      ...furniture,
      uuid: Date.now(), // 고유한 식별자 추가 ✅
      position: [
        Math.random() * 4 - 2, // ✅ 가구가 겹치지 않도록 위치 랜덤 지정
        0.1,
        Math.random() * 4 - 2,
      ],
    };
    setFurnitureList((prev) => [...prev, newFurniture]);
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

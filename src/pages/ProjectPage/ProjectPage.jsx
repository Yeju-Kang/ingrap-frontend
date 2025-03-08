import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
import RoomArea from "./RoomArea";
import FurnitureControls from "./FurnitureControls";

const ProjectPage = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);

  const handleAddFurniture = (furniture) => {
    const newFurniture = {
      ...furniture,
      uuid: Date.now(),
      position: [Math.random() * 4 - 2, 0.1, Math.random() * 4 - 2],
    };
    setFurnitureList((prev) => [...prev, newFurniture]);
  };

  const handleDeleteFurniture = () => {
    if (selectedFurniture) {
      setFurnitureList((prev) => prev.filter((_, idx) => idx !== selectedFurniture.id));
      setSelectedFurniture(null);
    }
  };

  return (
    <Box height="100vh" sx={{marginTop: "80px"}}>
      <Box sx={{ width: "100%", height: "50px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", px: 2 }}>
        <FurnitureControls
          selectedFurniture={selectedFurniture}
          onDeleteFurniture={handleDeleteFurniture}
        />
      </Box>
     
      <Box display="flex" flex={1}>
      <Sidebar />
        <RoomArea
          furnitureList={furnitureList}
          selectedFurniture={selectedFurniture}
          setSelectedFurniture={setSelectedFurniture}
        />
        <Box width="300px" sx={{ borderLeft: "1px solid #ddd", display: "flex", flexDirection: "column" }}>
          <FilterPanel />
          <ProductList onAddFurniture={handleAddFurniture} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;

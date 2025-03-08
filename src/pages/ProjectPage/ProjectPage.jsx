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
    <Box height="100vh" display="flex" flexDirection="column" sx={{ marginTop: "80px", overflow: "hidden" }}>
      {/* FurnitureControls 영역 */}
      <Box
        sx={{
          width: "100%",
          height: "50px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <FurnitureControls
          selectedFurniture={selectedFurniture}
          onDeleteFurniture={handleDeleteFurniture}
        />
      </Box>

      {/* 메인 콘텐츠 영역 */}
      <Box display="flex" flex={1} overflow="auto">
        <Sidebar />
        <Box flex={1} sx={{ overflow: "hidden" }}>
          <RoomArea
            furnitureList={furnitureList}
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
          />
        </Box>
        <Box
          width="300px"
          sx={{
            borderLeft: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <FilterPanel />
          <ProductList onAddFurniture={handleAddFurniture} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
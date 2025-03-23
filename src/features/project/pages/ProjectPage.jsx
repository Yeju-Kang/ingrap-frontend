// ProjectPage.jsx (중복없이 완벽한 상태 선언)
import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import RoomArea from "../components/RoomArea";
import FurnitureControls from "../components/FurnitureControls";

const ProjectPage = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [weather, setWeather] = useState("sunny");
  const [cameraMode, setCameraMode] = useState("third");

  const toggleCameraMode = () => {
    setCameraMode((prev) => (prev === "third" ? "firstPerson" : "third"));
  };

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
      setFurnitureList((prev) => prev.filter((item) => item.uuid !== selectedFurniture.uuid));
      setSelectedFurniture(null);
    }
  };

  return (
    <Box
      height="calc(100vh - 80px)"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      {/* FurnitureControls */}
      <Box
        sx={{
          width: "100%",
          height: "50px",
          border: "1px solid #ddd",
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

      <Box display="flex" flex={1} overflow="hidden">
        <Sidebar
          weather={weather}
          setWeather={setWeather}
          cameraMode={cameraMode}
          toggleCameraMode={toggleCameraMode}
        />
             <Box flex={1} display="flex" flexDirection="column" minWidth={0} minHeight={0}>

          <RoomArea
            furnitureList={furnitureList}
            setFurnitureList={setFurnitureList} // ✅ 추가
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
            weather={weather}
            cameraMode={cameraMode}
          />
        </Box>

        <Box width="180px" sx={{ overflowY: "auto", borderLeft: "1px solid #ddd" }}>
          <FilterPanel />
          <ProductList onAddFurniture={handleAddFurniture} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;

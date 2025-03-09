import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";

const RoomArea = ({ furnitureList, selectedFurniture, setSelectedFurniture, weather,  setFurnitureList={setFurnitureList} }) => {
  const controlsRef = useRef();

  const handleBackgroundClick = () => {
    setSelectedFurniture(null);
  };

  return (
    <Box flex={1}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <SceneContent
          furnitureList={furnitureList}
          selectedFurniture={selectedFurniture}
          onSelectFurniture={setSelectedFurniture}
          setFurnitureList={setFurnitureList}
          controlsRef={controlsRef}
          onBackgroundClick={handleBackgroundClick}
          weather={weather} // ✅ 추가
        />
      </Canvas>
    </Box>
  );
};




export default RoomArea;

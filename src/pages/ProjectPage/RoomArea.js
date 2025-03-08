import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";

const RoomArea = ({ furnitureList }) => {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const controlsRef = useRef();

  const handleBackgroundClick = () => {
    setSelectedFurniture(null);
  };

  return (
    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <SceneContent
          furnitureList={furnitureList} // ✅ furnitureList 배열 전달 필수
          selectedFurniture={selectedFurniture}
          onSelectFurniture={setSelectedFurniture}
          controlsRef={controlsRef}
          onBackgroundClick={handleBackgroundClick}
        />
      </Canvas>
    </Box>
  );
};

export default RoomArea;

import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";
import { Physics } from "@react-three/rapier";

const RoomArea = ({ furnitureList, selectedFurniture, setSelectedFurniture, weather, setFurnitureList, wallpaper, flooring}) => {
  const controlsRef = useRef();

  const handleBackgroundClick = () => {
    setSelectedFurniture(null);
  };

  return (
    <Box flex={1}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }} shadows>
        <Physics gravity={[0, -9.81, 0]}>
          <SceneContent
            furnitureList={furnitureList}
            selectedFurniture={selectedFurniture}
            onSelectFurniture={setSelectedFurniture}
            setFurnitureList={setFurnitureList}
            controlsRef={controlsRef}
            onBackgroundClick={handleBackgroundClick}
            weather={weather}
            wallpaper={wallpaper}
            flooring={flooring}
          />
        </Physics>
      </Canvas>
    </Box>
  );
};

export default RoomArea;

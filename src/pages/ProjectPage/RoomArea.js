import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";

const RoomArea = ({ furnitureList }) => {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const controlsRef = useRef();

  // ✅ 빈 공간 클릭 시 가구 선택 해제 (위치는 유지!)
  const handleBackgroundClick = () => {
    if (selectedFurniture) {
      console.log("🚀 빈 공간 클릭! 선택 해제됨!");
      setSelectedFurniture(null); // ✅ 가구 선택 해제 (위치는 그대로 유지!)
    }
  };

  return (
    <Box flex={1} display="flex" justifyContent="center" alignItems="center" sx={{ mx: 2, position: "relative", margin: 0 }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <SceneContent
          furnitureList={furnitureList}
          selectedFurniture={selectedFurniture}
          onSelectFurniture={setSelectedFurniture}
          controlsRef={controlsRef}
          onBackgroundClick={handleBackgroundClick} // ✅ 빈 공간 클릭 핸들러 전달!
        />
      </Canvas>
    </Box>
  );
};

export default RoomArea;

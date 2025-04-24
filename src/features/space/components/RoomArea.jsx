// src/components/RoomArea.jsx

import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import SceneContent from "./SceneContent";
import RoomTools from "./RoomTools";  // 방 도구 컴포넌트

const RoomArea = ({
  furnitureList,
  selectedFurniture,
  setSelectedFurniture,
  weather,
  setFurnitureList,
  wallpaper,
  flooring,

  // 아래는 SpaceEditorPage에서 넘겨받는 툴 핸들러들
  onPointer,
  onRotateX,
  onRotateY,
  onResetAngle,
  onBuildPartition,
  onFullscreen,
  onPen,
  onTextBox,
}) => {
  const controlsRef = useRef();

  const handleBackgroundClick = () => {
    setSelectedFurniture(null);
  };

  return (
    <Box flex={1} position="relative">
      {/* 3D 캔버스 */}
      <Canvas
        camera={{ position: [5, 5, 10], fov: 50 }}
        shadows
        style={{ backgroundColor: "var(--text-color)" }}
      >
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

      {/* RoomTools를 캔버스 위에 절대위치로 띄우기 */}
      <Box
        position="absolute"
        bottom={16}
        left="50%"
        sx={{ transform: "translateX(-50%)" }}
      >
        <RoomTools
          onPointer={onPointer}
          onRotateX={onRotateX}
          onRotateY={onRotateY}
          onResetAngle={onResetAngle}
          onBuildPartition={onBuildPartition}
          onFullscreen={onFullscreen}
          onPen={onPen}
          onTextBox={onTextBox}
        />
      </Box>
    </Box>
  );
};

export default RoomArea;

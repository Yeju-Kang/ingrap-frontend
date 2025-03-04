import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@mui/material";
import Room from "./Room";
import Furniture from "./Furniture";
import FurnitureList from "./FurnitureList";

const DrawingPage = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [open, setOpen] = useState(true);

  const addFurniture = (item) => {
    setFurnitureList([...furnitureList, { ...item, position: [Math.random() * 5, 0, Math.random() * 5] }]);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", }}>
      {/* 3D 작업 평면 */}
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />

        <Room /> {/* ✅ 빈 방 (네모 모양) */}

        {/* 배치된 가구 */}
        {furnitureList.map((item, index) => (
          <Furniture key={index} type={item.model} position={item.position} />
        ))}
      </Canvas>

      {/* 가구 선택 사이드바 */}
      <FurnitureList open={open} onClose={() => setOpen(false)} onAddFurniture={addFurniture} />
    </Box>
  );
};

export default DrawingPage;

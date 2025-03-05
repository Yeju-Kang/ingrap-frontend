import React from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RoomArea = () => {
  return (
    <Box flex={1} display="flex" justifyContent="center" alignItems="center" sx={{  mx: 2, position: "relative", margin: 0 }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        {/* 바닥 (Floor) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[10, 0.2, 10]} />
          <meshStandardMaterial color="#ffffff" /> {/* 갈색 바닥 */}
        </mesh>

        {/* 왼쪽 벽 (Left Wall) */}
        <mesh position={[-5, 2.5, 0]}>
          <boxGeometry args={[0.2, 5, 10]} />
          <meshStandardMaterial color="var(--background-color)" /> {/* 베이지 색상 */}
        </mesh>

        {/* 오른쪽 벽 (Right Wall) */}
        <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.2, 5, 10]} />
          <meshStandardMaterial color="var(--background-color)" />
        </mesh>
      </Canvas>
    </Box>
  );
};

export default RoomArea;

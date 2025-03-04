import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Box } from "@mui/material";

const ViewCube = ({ setCameraPosition }) => {
  const cubeRef = useRef();

  // 정육면체 클릭 시 카메라 이동
  const handleClick = (position) => {
    setCameraPosition(position);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "80px",
        height: "80px",
        border: "1px solid gray",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        
        <mesh ref={cubeRef} position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        {/* 각 면을 클릭하면 카메라 이동 */}
        <Html position={[-0.6, 0, 0]} style={{ cursor: "pointer" }} onClick={() => handleClick([-10, 5, 0])}>
          좌측
        </Html>
        <Html position={[0.6, 0, 0]} style={{ cursor: "pointer" }} onClick={() => handleClick([10, 5, 0])}>
          우측
        </Html>
        <Html position={[0, 0, -0.6]} style={{ cursor: "pointer" }} onClick={() => handleClick([0, 5, -10])}>
          정면
        </Html>
        <Html position={[0, 0, 0.6]} style={{ cursor: "pointer" }} onClick={() => handleClick([0, 5, 10])}>
          후면
        </Html>
        <Html position={[0, 0.6, 0]} style={{ cursor: "pointer" }} onClick={() => handleClick([0, 10, 0])}>
          평면도
        </Html>
      </Canvas>
    </Box>
  );
};

export default ViewCube;

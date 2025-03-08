import React, { useState, useRef } from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import FurnitureModel from "./FurnitureModel";

const SceneContent = ({ furnitureList }) => {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const controlsRef = useRef();

  const handleBackgroundClick = () => {
    setSelectedFurniture(null);
  };

  const handleSelectFurniture = (object, id) => {
    setSelectedFurniture({ object, id });
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />

      <OrbitControls
        enablePan={!selectedFurniture}
        enableRotate={!selectedFurniture}
        enableZoom
      />

      <group>
        {furnitureList.map((item, index) => (
          <FurnitureModel
            key={index}
            modelPath={item.model}
            position={item.position}
            selected={selectedFurniture?.id === index}
            onSelect={(object) => handleSelectFurniture(object, index)}
          />
        ))}
      </group>

      {selectedFurniture && selectedFurniture.object && (
        <TransformControls
          object={selectedFurniture.object}
          ref={controlsRef}
          mode="translate"
          onPointerDown={(e) => e.stopPropagation()}
        />
      )}

      {/* 배경 바닥 클릭 영역 */}
      <mesh position={[0, 0, 0]} onClick={handleBackgroundClick}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* 좌측 벽 */}
      <mesh position={[-5, 2.5, 0]} onClick={handleBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* 후면 벽 */}
      <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]} onClick={handleBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </>
  );
};

export default SceneContent;

import React, { useState, useRef } from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import FurnitureModel from "./FurnitureModel";

const SceneContent = ({ furnitureList, selectedFurniture, onSelectFurniture, onBackgroundClick }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />

      <OrbitControls enablePan={!selectedFurniture} enableRotate={!selectedFurniture} />

      {furnitureList.map((item, index) => (
        <FurnitureModel
          key={index}
          modelPath={item.model}
          position={item.position}
          selected={selectedFurniture?.id === index}
          onSelect={(object) => onSelectFurniture({ object, id: index })}
        />
      ))}

      {selectedFurniture && selectedFurniture.object && (
        <TransformControls
          object={selectedFurniture.object}
          mode="translate"
          onPointerDown={(e) => e.stopPropagation()}
        />
      )}

      <mesh position={[0, 0, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
};


export default SceneContent;

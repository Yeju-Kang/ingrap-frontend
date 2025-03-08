import React from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import FurnitureModel from "./FurnitureModel";

const SceneContent = ({ furnitureList, selectedFurniture, onSelectFurniture, onBackgroundClick }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />

      <OrbitControls enablePan={!selectedFurniture} enableRotate={!selectedFurniture} />

      {/* 방 바닥 */}
      <mesh position={[0, 0, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* 왼쪽 벽 */}
      <mesh position={[-5, 2.5, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* 뒤쪽 벽 */}
      <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

 {/* 가구 모델 렌더링 */}
{furnitureList.map((item) => (
  <FurnitureModel
    key={item.uuid} // ✅ 고유한 uuid 사용!
    modelPath={item.model}
    position={item.position}
    selected={selectedFurniture?.uuid === item.uuid}
    onSelect={(object) => onSelectFurniture({ object, uuid: item.uuid })}
  />
))}


      {/* 선택된 가구 이동 컨트롤 */}
      {selectedFurniture && selectedFurniture.object && (
        <TransformControls
          object={selectedFurniture.object}
          mode="translate"
          onPointerDown={(e) => e.stopPropagation()}
        />
      )}
    </>
  );
};

export default SceneContent;
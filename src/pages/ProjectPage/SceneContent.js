import React from "react";
import { OrbitControls, TransformControls } from "@react-three/drei";
import FurnitureModel from "./FurnitureModel";

const SceneContent = ({ furnitureList, selectedFurniture, onSelectFurniture, controlsRef, onBackgroundClick }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />

      {/* ✅ 가구가 선택된 경우 방 조작 비활성화 */}
      <OrbitControls enablePan={!selectedFurniture} enableRotate={!selectedFurniture} enableZoom={true} />

      {/* ✅ 빈 공간 클릭 시 선택 해제 (가구 위치 유지!) */}
      <mesh position={[0, 0, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[-5, 2.5, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]} onClick={onBackgroundClick}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* ✅ 가구 추가 */}
      {furnitureList.map((item, index) => (
        <FurnitureModel 
          key={index} 
          modelPath={item.model} 
          position={item.position || [Math.random() * 4 - 2, 0.1, Math.random() * 4 - 2]} 
          onSelect={onSelectFurniture} 
          selected={selectedFurniture?.uuid === item.uuid} 
        />
      ))}

      {/* ✅ 선택된 가구 이동 컨트롤 */}
      {selectedFurniture && (
        <TransformControls
          object={selectedFurniture}
          ref={controlsRef}
          mode="translate"
          onPointerDown={(e) => e.stopPropagation()} // ✅ 클릭 이벤트 차단 (다른 요소와 충돌 방지)
        />
      )}
    </>
  );
};

export default SceneContent;

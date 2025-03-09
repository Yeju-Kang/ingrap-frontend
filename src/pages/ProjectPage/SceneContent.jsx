import React from "react";
import { OrbitControls, TransformControls, Html } from "@react-three/drei";
import FurnitureModel from "./FurnitureModel";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SceneContent = ({
  furnitureList,
  selectedFurniture,
  onSelectFurniture,
  onBackgroundClick,
  weather,
  setFurnitureList, // ✅ 가구 이동 & 회전 저장을 위한 상태 변경 함수 추가
}) => {
  // ✅ 날씨별 조명 설정
  const renderWeatherLighting = () => {
    switch (weather) {
      case "sunny":
        return <directionalLight position={[10, 10, 10]} intensity={1.2} color="#fff4e5" />;
      case "night":
        return <directionalLight position={[-5, 10, -5]} intensity={0.3} color="#7f8c8d" />;
      case "rainy":
        return <directionalLight position={[0, 10, 0]} intensity={0.6} color="#95a5a6" />;
      default:
        return <directionalLight position={[10, 10, 10]} intensity={1} />;
    }
  };

  const rotateFurniture = (direction) => {
    if (!selectedFurniture) return;
    setFurnitureList((prevList) =>
      prevList.map((item) => {
        if (item.uuid === selectedFurniture.uuid) {
          const currentRotation = item.rotation || [0, 0, 0]; // ✅ 기본값 추가
          return {
            ...item,
            rotation: [
              currentRotation[0], // X축 유지
              currentRotation[1] + direction * (Math.PI / 2), // Y축 회전
              currentRotation[2], // Z축 유지
            ],
          };
        }
        return item;
      })
    );
  };
  
  
  

  // ✅ 가구 이동 시 위치 업데이트
  const handleTransformChange = () => {
    if (!selectedFurniture) return;
    setFurnitureList((prevList) =>
      prevList.map((item) =>
        item.uuid === selectedFurniture.uuid
          ? {
              ...item,
              position: selectedFurniture.object.position.clone(),
              rotation: selectedFurniture.object.rotation.clone(),
            }
          : item
      )
    );
  };

  return (
    <>
      <ambientLight intensity={weather === "night" ? 0.2 : 0.5} />
      {renderWeatherLighting()}
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
        <group key={item.uuid} position={item.position} rotation={item.rotation}>
          <FurnitureModel
            modelPath={item.model}
            selected={selectedFurniture?.uuid === item.uuid}
            onSelect={(object) => onSelectFurniture({ object, uuid: item.uuid })}
          />

          {/* ✅ 선택된 가구 위에 좌/우 회전 버튼 표시 */}
          {selectedFurniture?.uuid === item.uuid && (
            <Html position={[0, 1.5, 0]} center>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <IconButton onClick={() => rotateFurniture(-1)} color="primary">
                  <ArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => rotateFurniture(1)} color="primary">
                  <ArrowRightIcon />
                </IconButton>
              </div>
            </Html>
          )}
        </group>
      ))}

      {/* ✅ 이동 기능 유지 (TransformControls) */}
      {selectedFurniture && selectedFurniture.object && (
        <TransformControls
          object={selectedFurniture.object}
          mode="translate" // ✅ 이동 모드 유지
          onPointerDown={(e) => e.stopPropagation()}
          onObjectChange={handleTransformChange} // ✅ 이동할 때 상태 업데이트
        />
      )}
    </>
  );
};

export default SceneContent;

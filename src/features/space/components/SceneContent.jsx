// src/components/SceneContent.jsx
import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import FurnitureModel from "./FurnitureModel";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const SceneContent = ({
  furnitureList,
  selectedFurniture,
  onSelectFurniture,
  onBackgroundClick,
  weather,
  setFurnitureList,
  wallpaper,
  flooring,
}) => {
  const { camera, raycaster } = useThree();
  const moveRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rigidBodyRefs = useRef({});
  const [dragging, setDragging] = useState(false);

  // 텍스쳐 로드
  const floorTexture = useTexture(flooring || "/placeholder.jpeg");
  const wallTexture  = useTexture(wallpaper || "/placeholder.jpeg");
  floorTexture.colorSpace = THREE.SRGBColorSpace;
  wallTexture.colorSpace  = THREE.SRGBColorSpace;

  const showFloorTexture = flooring && /\.(jpe?g|png)$/i.test(flooring);
  const showWallTexture  = wallpaper && /\.(jpe?g|png)$/i.test(wallpaper);

  // 마우스 위치 추적
  useEffect(() => {
    const onMouseMove = (e) => {
      const canvas = document.querySelector("canvas");
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      lastMouse.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top ) / rect.height) * 2 + 1,
      };
    };
    window.addEventListener("pointermove", onMouseMove);
    return () => window.removeEventListener("pointermove", onMouseMove);
  }, []);

  // 드래그 시 가구 이동
  useEffect(() => {
    if (!dragging || !selectedFurniture) return;

    const update = () => {
      raycaster.setFromCamera(lastMouse.current, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, hit);

      const pos = [
        Math.round(hit.x * 100) / 100,
        0.05,
        Math.round(hit.z * 100) / 100,
      ];

      // 경계 검사
      if (Math.abs(pos[0]) <= 2.6 && Math.abs(pos[2]) <= 2.6) {
        const rigidBody = rigidBodyRefs.current[selectedFurniture.uuid];
        if (rigidBody) {
          rigidBody.setTranslation({ x: pos[0], y: pos[1], z: pos[2] }, true);
        }
        setFurnitureList((prev) =>
          prev.map((it) =>
            it.uuid === selectedFurniture.uuid
              ? { ...it, position: pos }
              : it
          )
        );
      }

      moveRef.current = requestAnimationFrame(update);
    };

    moveRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(moveRef.current);
  }, [dragging, selectedFurniture, camera, raycaster, setFurnitureList]);

  // 선택 토글
  const handleSelect = (obj, uuid) => {
    if (selectedFurniture?.uuid === uuid) {
      setDragging(false);
      onSelectFurniture(null);
    } else {
      onSelectFurniture({ object: obj, uuid });
      setDragging(true);
    }
  };

  // 회전
  const rotateFurniture = (dir) => {
    if (!selectedFurniture) return;
    setFurnitureList((prev) =>
      prev.map((it) => {
        if (it.uuid !== selectedFurniture.uuid) return it;
        const newY = (it.rotation?.[1] || 0) + dir * Math.PI / 2;
        const rigidBody = rigidBodyRefs.current[it.uuid];
        if (rigidBody) {
          rigidBody.setRotation(
            {
              w: Math.cos(newY / 2),
              x: 0,
              y: Math.sin(newY / 2),
              z: 0,
            },
            true
          );
        }
        return { ...it, rotation: [0, newY, 0] };
      })
    );
  };

  // 🎯 날씨별 조명 렌더링
  const renderWeatherLighting = () => {
    switch (weather) {
      case "sunny":
        return (
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.2}
            color="#fff4e5"
          />
        );
      case "night":
        return (
          <directionalLight
            position={[-5, 10, -5]}
            intensity={0.3}
            color="#7f8c8d"
          />
        );
      case "rainy":
        return (
          <directionalLight
            position={[0, 10, 0]}
            intensity={0.6}
            color="#95a5a6"
          />
        );
      default:
        return (
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            color="#ffffff"
          />
        );
    }
  };

  return (
    <>
      {/* 날씨에 따라 조명을 바꿔준다 */}
      {renderWeatherLighting()}

      {/* 기본 조명 */}
      <ambientLight intensity={1.5} color="#ffffff" />
      <pointLight
        position={[0, 8, 0]}
        intensity={80}
        distance={30}
        decay={2}
        color="#ffffff"
      />
      <OrbitControls
        enablePan={!selectedFurniture}
        enableRotate={!selectedFurniture}
      />

      {/* 바닥 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[5.5, 0.2, 5.5]} />
          <meshStandardMaterial
            map={showFloorTexture ? floorTexture : null}
            color={!showFloorTexture ? "#e0e0e0" : undefined}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <CuboidCollider args={[2.75, 0.05, 2.75]} position={[0, 0, 0]} />
      </RigidBody>

      {/* 왼쪽 벽 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[-2.75, 1, 0]} onClick={onBackgroundClick}>
          <boxGeometry args={[0.2, 2, 5.5]} />
          <meshStandardMaterial
            map={showWallTexture ? wallTexture : null}
            color={!showWallTexture ? "#f5f5f5" : undefined}
            metalness={0.05}
            roughness={0.95}
          />
        </mesh>
        <CuboidCollider
          args={[0.1, 2.5, 2.75]}
          position={[-2.75, 2.5, 0]}
        />
      </RigidBody>

      {/* 뒷 벽 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh
          position={[0, 1, -2.75]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={onBackgroundClick}
        >
          <boxGeometry args={[0.2, 2, 5.5]} />
          <meshStandardMaterial
            map={showWallTexture ? wallTexture : null}
            color={!showWallTexture ? "#f5f5f5" : undefined}
            metalness={0.05}
            roughness={0.95}
          />
        </mesh>
        <CuboidCollider
          args={[0.1, 2.5, 2.75]}
          position={[0, 2.5, -2.75]}
        />
      </RigidBody>

      {/* 가구 렌더링 */}
      {Array.isArray(furnitureList) &&
        furnitureList.map((it) => {
          const isSel = selectedFurniture?.uuid === it.uuid;
          if (!it.modelUrl) return null;
          return (
            <RigidBody
              key={it.uuid}
              ref={(ref) => (ref && (rigidBodyRefs.current[it.uuid] = ref))}
              position={it.position}
              rotation={it.rotation}
              colliders={false}
              restitution={0}
              friction={1}
            >
              <group>
                <FurnitureModel
                  modelPath={it.modelUrl}
                  selected={isSel}
                  onSelect={() => handleSelect(null, it.uuid)}
                />
                {isSel && (
                  <Html position={[0, 1.5, 0]} center>
                    <IconButton onClick={() => rotateFurniture(-1)}>
                      <ArrowLeftIcon />
                    </IconButton>
                    <IconButton onClick={() => rotateFurniture(1)}>
                      <ArrowRightIcon />
                    </IconButton>
                  </Html>
                )}
              </group>
            </RigidBody>
          );
        })}
    </>
  );
};

export default SceneContent;

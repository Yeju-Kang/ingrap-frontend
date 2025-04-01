import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, Html } from "@react-three/drei";
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
}) => {
  const { camera, raycaster } = useThree();
  const moveRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rigidBodyRefs = useRef({});
  const [dragging, setDragging] = useState(false);

  // 마우스 위치 추적
  useEffect(() => {
    const onMouseMove = (e) => {
      const rect = document.querySelector("canvas").getBoundingClientRect();
      lastMouse.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };
    window.addEventListener("pointermove", onMouseMove);
    return () => window.removeEventListener("pointermove", onMouseMove);
  }, []);

  // 가구 드래그 중이면 계속 마우스 따라가도록 위치 업데이트
  useEffect(() => {
    if (!dragging || !selectedFurniture) return;

    const update = () => {
      raycaster.setFromCamera(lastMouse.current, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersection);

      const pos = [
        Math.round(intersection.x * 100) / 100,
        0.05,
        Math.round(intersection.z * 100) / 100,
      ];

      const uuid = selectedFurniture.uuid;
      const rigidBody = rigidBodyRefs.current[uuid];
      if (rigidBody) {
        rigidBody.setTranslation({ x: pos[0], y: pos[1], z: pos[2] }, true);
      }

      setFurnitureList((prev) =>
        prev.map((item) =>
          item.uuid === uuid ? { ...item, position: pos } : item
        )
      );

      moveRef.current = requestAnimationFrame(update);
    };

    moveRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(moveRef.current);
  }, [dragging, selectedFurniture, camera, raycaster, setFurnitureList]);

  // 가구 클릭해서 선택하거나 놓기
  const handleSelect = (object, uuid) => {
    if (selectedFurniture?.uuid === uuid) {
      // 이미 선택된 상태 → 놓기
      setDragging(false);
      onSelectFurniture(null);
    } else {
      // 새로 선택
      onSelectFurniture({ object, uuid });
      setDragging(true);
    }
  };

  const rotateFurniture = (direction) => {
    if (!selectedFurniture) return;

    setFurnitureList((prev) => {
      return prev.map((item) => {
        if (item.uuid !== selectedFurniture.uuid) return item;

        const newYRot = (item.rotation?.[1] || 0) + direction * Math.PI / 2;
        const newRotation = [
          item.rotation?.[0] || 0,
          newYRot,
          item.rotation?.[2] || 0,
        ];

        const rigidBody = rigidBodyRefs.current[item.uuid];
        if (rigidBody) {
          rigidBody.setRotation(
            {
              w: Math.cos(newYRot / 2),
              x: 0,
              y: Math.sin(newYRot / 2),
              z: 0,
            },
            true
          );
        }

        return { ...item, rotation: newRotation };
      });
    });
  };

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

  return (
    <>
      <ambientLight intensity={weather === "night" ? 0.2 : 0.5} />
      {renderWeatherLighting()}
      <OrbitControls enablePan={!selectedFurniture} enableRotate={!selectedFurniture} />

      {/* 바닥 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[10, 0.1, 10]} />
          <meshStandardMaterial color="#ccc" />
        </mesh>
        <CuboidCollider args={[5, 0.05, 5]} position={[0, 0, 0]} />
      </RigidBody>

      {/* 벽 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[-5, 2.5, 0]} onClick={onBackgroundClick}>
          <boxGeometry args={[0.2, 5, 10]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <CuboidCollider args={[0.1, 2.5, 5]} position={[-5, 2.5, 0]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]} onClick={onBackgroundClick}>
          <boxGeometry args={[0.2, 5, 10]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <CuboidCollider args={[0.1, 2.5, 5]} position={[0, 2.5, -5]} />
      </RigidBody>

      {/* 가구 */}
      {furnitureList.map((item) => {
        const isSelected = selectedFurniture?.uuid === item.uuid;

        return (
          <RigidBody
            key={item.uuid}
            ref={(ref) => {
              if (ref) rigidBodyRefs.current[item.uuid] = ref;
            }}
            position={item.position || [0, 0, 0]}
            rotation={item.rotation || [0, 0, 0]}
            colliders={false}
            restitution={0}
            friction={1}
          >
            <group>
              <FurnitureModel
                modelPath={item.model}
                selected={isSelected}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                onSelect={(obj) => handleSelect(obj, item.uuid)}
              />
              {isSelected && (
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
          </RigidBody>
        );
      })}
    </>
  );
};

export default SceneContent;

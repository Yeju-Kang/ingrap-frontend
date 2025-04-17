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

  const floorTexture = useTexture(flooring || "/placeholder.jpeg");
  const wallTexture = useTexture(wallpaper || "/placeholder.jpeg");

  floorTexture.colorSpace = THREE.SRGBColorSpace;
  wallTexture.colorSpace = THREE.SRGBColorSpace;

  const showFloorTexture = flooring && (flooring.endsWith(".jpg") || flooring.endsWith(".png"));
  const showWallTexture = wallpaper && (wallpaper.endsWith(".jpg") || wallpaper.endsWith(".png"));

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

      // ✅ 벽 밖으로 못 나가게 제한
      if (Math.abs(pos[0]) > 2.6 || Math.abs(pos[2]) > 2.6) {
        moveRef.current = requestAnimationFrame(update);
        return;
      }

      const uuid = selectedFurniture.uuid;
      const rigidBody = rigidBodyRefs.current[uuid];
      if (rigidBody) {
        rigidBody.setTranslation({ x: pos[0], y: pos[1], z: pos[2] }, true);
      }

      setFurnitureList((prev) =>
        prev.map((item) => (item.uuid === uuid ? { ...item, position: pos } : item))
      );

      moveRef.current = requestAnimationFrame(update);
    };

    moveRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(moveRef.current);
  }, [dragging, selectedFurniture, camera, raycaster, setFurnitureList]);

  const handleSelect = (object, uuid) => {
    if (selectedFurniture?.uuid === uuid) {
      setDragging(false);
      onSelectFurniture(null);
    } else {
      onSelectFurniture({ object, uuid });
      setDragging(true);
    }
  };

  const rotateFurniture = (direction) => {
    if (!selectedFurniture) return;

    setFurnitureList((prev) =>
      prev.map((item) => {
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
      })
    );
  };

  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[0, 8, 5]} intensity={3} color="#ffffff" />
      <pointLight position={[0, 8, 0]} intensity={80} distance={30} decay={2} color="#ffffff" />
      <OrbitControls enablePan={!selectedFurniture} enableRotate={!selectedFurniture} />

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
        <CuboidCollider args={[0.1, 2.5, 2.75]} position={[-2.75, 2.5, 0]} />
      </RigidBody>

      {/* 뒷 벽 */}
      <RigidBody type="fixed" colliders={false}>
        <mesh position={[0, 1, -2.75]} rotation={[0, Math.PI / 2, 0]} onClick={onBackgroundClick}>
          <boxGeometry args={[0.2, 2, 5.5]} />
          <meshStandardMaterial
            map={showWallTexture ? wallTexture : null}
            color={!showWallTexture ? "#f5f5f5" : undefined}
            metalness={0.05}
            roughness={0.95}
          />
        </mesh>
        <CuboidCollider args={[0.1, 2.5, 2.75]} position={[0, 2.5, -2.75]} />
      </RigidBody>

      {/* 가구들 */}
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

import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const FurnitureModel = ({ modelPath, position, onSelect, selected }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const ref = useRef();
  const [savedPosition, setSavedPosition] = useState(position); // ✅ 가구의 현재 위치 저장

  const handleClick = (event) => {
    event.stopPropagation(); // ✅ 부모 요소(Room)로 이벤트 전달 방지
    console.log("🔍 가구 선택됨:", modelPath);
    onSelect(ref.current);
  };

  return (
    <primitive 
      object={gltf.scene} 
      position={savedPosition} // ✅ 선택 해제 시 원래 위치 유지!
      ref={ref} 
      onClick={handleClick} 
    />
  );
};

export default FurnitureModel;

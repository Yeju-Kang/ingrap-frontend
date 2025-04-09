import React, { useRef, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const FurnitureModel = ({ modelPath, position, onSelect, selected }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const scene = useMemo(() => clone(gltf.scene), [gltf]);
  const ref = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
    onSelect(ref.current);
  };

  return (
    <primitive
      object={scene}
      position={position}
      ref={ref}
      onClick={handleClick}
      scale={selected ? 1.1 : 1}
    />
  );
};

export default FurnitureModel;

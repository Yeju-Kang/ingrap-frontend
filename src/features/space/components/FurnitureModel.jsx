import React, { useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const FurnitureModel = ({
  modelPath,
  onSelect,
  selected,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const clonedScene = useMemo(() => clone(gltf.scene), [gltf]);
  const ref = useRef();

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(ref.current);
      }}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

export default FurnitureModel;

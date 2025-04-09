import { useEffect, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3 } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const FurnitureModel = ({ modelPath, onSelect, selected }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const ref = useRef();
  const [adjustedScene, setAdjustedScene] = useState(null);

  useEffect(() => {
    const cloned = clone(gltf.scene);
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    const yOffset = -box.min.y; // 모델의 바닥 높이 → y=0으로 이동
    cloned.position.y = yOffset;

    setAdjustedScene(cloned);
  }, [gltf]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.setScalar(selected ? 1.1 : 1);
    }
  }, [selected]);

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(ref.current);
  };

  if (!adjustedScene) return null;

  return (
    <primitive
      object={adjustedScene}
      ref={ref}
      onClick={handleClick}
    />
  );
};

export default FurnitureModel;

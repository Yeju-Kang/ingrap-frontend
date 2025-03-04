import React from "react";
import { useGLTF } from "@react-three/drei";

const models = {
  table: "/models/table.glb",
  chair: "/models/chair.glb",
  bed: "/models/bed.glb",
  sofa: "/models/sofa.glb",
};

const Furniture = ({ type, position }) => {
  const { scene } = useGLTF(models[type]);

  return <primitive object={scene} position={position} />;
};

export default Furniture;

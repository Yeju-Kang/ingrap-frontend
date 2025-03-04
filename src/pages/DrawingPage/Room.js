import React from "react";

const Room = () => {
  return (
    <>
      {/* 바닥 (Floor) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#8B5A2B" /> {/* 갈색 바닥 */}
      </mesh>

      {/* 왼쪽 벽 (Left Wall) */}
      <mesh position={[-5, 2.5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="#F5DEB3" /> {/* 베이지 색상 */}
      </mesh>

      {/* 오른쪽 벽 (Right Wall) */} 
      <mesh position={[0, 2.5, -5]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="#F5DEB3" />
      </mesh>
    </>
  );
};

export default Room;

import React, { useState } from "react";
import { Box } from "@mui/material";

// 🔄 컴포넌트 import 경로 수정
import Sidebar from "../components/sidebar/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import RoomArea from "../components/RoomArea";
import FurnitureControls from "../components/FurnitureControls";

const EmptyPage = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [weather, setWeather] = useState("sunny");
  const [cameraMode, setCameraMode] = useState("third");
  const [wallpaper, setWallpaper] = useState(null);
const [flooring, setFlooring] = useState(null);

  const toggleCameraMode = () => {
    setCameraMode((prev) => (prev === "third" ? "firstPerson" : "third"));
  };

  const handleAddFurniture = (furniture) => {
    const newFurniture = {
      ...furniture,
      uuid: Date.now(),
      position: [Math.random() * 4 - 2, 0.1, Math.random() * 4 - 2],
    };
    setFurnitureList((prev) => [...prev, newFurniture]);
  };

  const handleDeleteFurniture = () => {
    if (selectedFurniture) {
      setFurnitureList((prev) =>
        prev.filter((item) => item.uuid !== selectedFurniture.uuid)
      );
      setSelectedFurniture(null);
    }
  };

  // 🔄 테마 변경 핸들러
  const handleThemeChange = (theme) => {
    // 추후 RoomArea 스타일 변경용으로 확장 가능
    console.log("선택된 테마:", theme);
  };

  return (
    <Box
      height="calc(100vh - 80px)"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      {/* 상단 가구 제어 바 */}
      <Box
        sx={{
          width: "100%",
          height: "50px",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          px: 2,
        }}
      >
        <FurnitureControls
          selectedFurniture={selectedFurniture}
          onDeleteFurniture={handleDeleteFurniture}
        />
      </Box>

      {/* 메인 영역 */}
      <Box display="flex" flex={1} overflow="hidden">
        {/* ⬅️ 왼쪽 사이드바 */}
        <Sidebar
          weather={weather}
          setWeather={setWeather}
          cameraMode={cameraMode}
          toggleCameraMode={toggleCameraMode}
          onWallpaperChange={setWallpaper}
  onFlooringChange={setFlooring}
        />

        {/* 🏠 방 + 가구 */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          minWidth={0}
          minHeight={0}
        >
          <RoomArea
            furnitureList={furnitureList}
            setFurnitureList={setFurnitureList}
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
            weather={weather}
            cameraMode={cameraMode}
          />
        </Box>

        {/* ➡️ 우측 필터/리스트 */}
        <Box
          width="500px"
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #ddd",
            overflowY: "auto",
          }}
        >
          <FilterPanel />
          <ProductList onAddFurniture={handleAddFurniture} />
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyPage;

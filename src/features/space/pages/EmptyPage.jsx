import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import RoomArea from "../components/RoomArea";
import FurnitureControls from "../components/FurnitureControls";
import ProductDetailDialog from "../components/ProductDetailDialog";

const EmptyPage = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [weather, setWeather] = useState("sunny");
  const [cameraMode, setCameraMode] = useState("third");
  const [wallpaper, setWallpaper] = useState(null);
  const [flooring, setFlooring] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [previewProduct, setPreviewProduct] = useState(null);
  const [panelWidth, setPanelWidth] = useState(500);

  const panelRef = useRef();

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

  const handleApplyProduct = (product) => {
    if (product.type === "wallpaper") {
      setWallpaper(product.image);
    } else if (product.type === "flooring") {
      setFlooring(product.image);
    } else {
      handleAddFurniture(product);
    }
  };

  // 마우스로 사이즈 조절 핸들
  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = panelRef.current.offsetWidth;

    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth - (moveEvent.clientX - startX);
      if (newWidth >= 300 && newWidth <= 800) {
        setPanelWidth(newWidth);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <Box height="calc(100vh - 80px)" display="flex" flexDirection="column" overflow="hidden">
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

      <Box display="flex" flex={1} overflow="hidden">
        <Sidebar
          weather={weather}
          setWeather={setWeather}
          cameraMode={cameraMode}
          toggleCameraMode={() =>
            setCameraMode((prev) => (prev === "third" ? "firstPerson" : "third"))
          }
          onWallpaperChange={setWallpaper}
          onFlooringChange={setFlooring}
        />

        <Box flex={1} display="flex" flexDirection="column" minWidth={0} minHeight={0}>
          <RoomArea
            furnitureList={furnitureList}
            setFurnitureList={setFurnitureList}
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
            weather={weather}
            cameraMode={cameraMode}
            wallpaper={wallpaper}
            flooring={flooring}
          />
        </Box>

        {/* 📏 사이즈 조절 핸들 */}
        <Box
          onMouseDown={handleMouseDown}
          sx={{
            width: "6px",
            cursor: "ew-resize",
            backgroundColor: "#ddd",
            zIndex: 1,
          }}
        />

        {/* 📦 조절 가능한 우측 패널 */}
        <Box
          ref={panelRef}
          sx={{
            width: `${panelWidth}px`,
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #ddd",
            overflowY: "auto",
            minWidth: "300px",
            maxWidth: "800px",
          }}
        >
          <FilterPanel
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchKeyword={searchKeyword}
            onSearchChange={setSearchKeyword}
          />

          <ProductList
            selectedCategory={selectedCategory}
            searchKeyword={searchKeyword}
            onProductClick={setPreviewProduct}
          />
        </Box>
      </Box>

      {/* 상세 팝업 */}
      <ProductDetailDialog
        open={!!previewProduct}
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onApply={handleApplyProduct}
      />
    </Box>
  );
};

export default EmptyPage;

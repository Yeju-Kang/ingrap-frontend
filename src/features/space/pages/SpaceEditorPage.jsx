import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import RoomArea from "../components/RoomArea";
import FurnitureControls from "../components/FurnitureControls";
import ProductDetailDialog from "../components/ProductDetailDialog";
import { saveUserSpace } from "../spaceApi";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { saveLastVisitedPage } from "../../../store/authSlice";

const SpaceEditorPage = () => {
  const { id: spaceId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

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

  const handleSave = async () => {
    if (!isAuthenticated) {
      dispatch(saveLastVisitedPage(location.pathname + location.search));
      localStorage.setItem("pendingSpaceId", spaceId);
      localStorage.setItem("pendingSpaceName", "새 공간");
      navigate("/login");
      return;
    }

    try {
      const payload = {
        spaceId: parseInt(spaceId),
        name: localStorage.getItem("pendingSpaceName") || "새 공간",
        furnitures: furnitureList.map((f) => ({
          type: f.type,
          modelUrl: f.modelUrl,
          positionX: f.position?.[0] || 0,
          positionY: f.position?.[1] || 0,
          positionZ: f.position?.[2] || 0,
          rotationX: f.rotation?.[0] || 0,
          rotationY: f.rotation?.[1] || 0,
          rotationZ: f.rotation?.[2] || 0,
          color: f.color || "#ffffff",
        })),
      };
      await saveUserSpace(payload);
      alert("저장되었습니다!");
      localStorage.removeItem("pendingSpaceId");
      localStorage.removeItem("pendingSpaceName");
    } catch (err) {
      console.error("저장 실패", err);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

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
          onSave={handleSave}
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

        <Box
          onMouseDown={handleMouseDown}
          sx={{
            width: "10px",
            cursor: "ew-resize",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            transition: "background-color 0.2s",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "#999",
                  borderRadius: "50%",
                }}
              />
            ))}
          </Box>
        </Box>

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
            panelWidth={panelWidth}
            selectedCategory={selectedCategory}
            searchKeyword={searchKeyword}
            onProductClick={setPreviewProduct}
          />
        </Box>
      </Box>

      <ProductDetailDialog
        open={!!previewProduct}
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onApply={handleApplyProduct}
      />
    </Box>
  );
};

export default SpaceEditorPage;

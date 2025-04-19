import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import RoomArea from "../components/RoomArea";
import FurnitureControls from "../components/FurnitureControls";
import ProductDetailDialog from "../components/ProductDetailDialog";
import { saveUserSpace } from "../spaceApi";
import { saveLastVisitedPage } from "../../../store/authSlice";
import { fetchSpaceDetail, setFurnitureList } from "../../../store/spaceSlice";

const SpaceEditorPage = () => {
  const { id: urlSpaceId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { currentSpace } = useSelector((state) => state.space);

  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [weather, setWeather] = useState("sunny");
  const [cameraMode, setCameraMode] = useState("third");
  const [wallpaper, setWallpaper] = useState(null);
  const [flooring, setFlooring] = useState(null);
  const [selectedType, setSelectedType] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [previewProduct, setPreviewProduct] = useState(null);
  const [panelWidth, setPanelWidth] = useState(500);

  const panelRef = useRef();

  useEffect(() => {
    if (urlSpaceId) {
      dispatch(fetchSpaceDetail(urlSpaceId));
    }
  }, [dispatch, urlSpaceId]); // ✅ 다른 의존성이 없도록 확인

  const handleSave = async () => {
    const pendingId = localStorage.getItem("pendingSpaceId");
    const finalId = pendingId || urlSpaceId;
    const finalName = currentSpace.name || "이름 없음";

    if (!isAuthenticated) {
      dispatch(saveLastVisitedPage(location.pathname + location.search));
      localStorage.setItem("pendingSpaceId", finalId);
      localStorage.setItem("pendingSpaceName", finalName);
      navigate("/login");
      return;
    }

    const payload = {
      spaceId: parseInt(finalId),
      name: finalName,
      furnitures: currentSpace.furnitures.map((f) => ({
        type: f.type,
        modelUrl: f.modelUrl || f.model || null,
        positionX: f.position?.[0] || 0,
        positionY: f.position?.[1] || 0,
        positionZ: f.position?.[2] || 0,
        rotationX: f.rotation?.[0] || 0,
        rotationY: f.rotation?.[1] || 0,
        rotationZ: f.rotation?.[2] || 0,
        color: f.color || "#ffffff",
      })),
    };

    try {
      await saveUserSpace(payload);
      alert("저장되었습니다!");
      localStorage.removeItem("pendingSpaceId");
      localStorage.removeItem("pendingSpaceName");
    } catch (err) {
      console.error("저장 실패", err);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  const handleAddFurniture = (furniture) => {
    const modelUrl = furniture.model || furniture.modelUrl;

    if (!modelUrl) {
      console.warn("🚫 modelUrl이 없습니다. 가구 추가 실패:", furniture);
      return;
    }

    const newFurniture = {
      ...furniture,
      modelUrl,
      uuid: Date.now(),
      position: [Math.random() * 4 - 2, 0.1, Math.random() * 4 - 2],
      rotation: [0, 0, 0],
      color: furniture.color || "#ffffff",
    };

    const updatedList = [...currentSpace.furnitures, newFurniture];
    dispatch(setFurnitureList(updatedList));
  };

  const handleDeleteFurniture = () => {
    if (selectedFurniture) {
      const updatedList = currentSpace.furnitures.filter(
        (item) => item.uuid !== selectedFurniture.uuid
      );
      dispatch(setFurnitureList(updatedList));
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
            furnitureList={currentSpace.furnitures}
            setFurnitureList={(list) => dispatch(setFurnitureList(list))}
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
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            searchKeyword={searchKeyword}
            onSearchChange={setSearchKeyword}
          />
          <ProductList
            panelWidth={panelWidth}
            selectedType={selectedType}
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

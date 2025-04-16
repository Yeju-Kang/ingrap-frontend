import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SpaceCard from "../components/SpaceCard";
import CreateSpaceCard from "../components/CreateSpaceCard";
import ModeSelectModal from "../components/ModeSelectModal";
import CreateSpaceNameModal from "../components/CreateSpaceNameModal";
import CreateSpaceQRModal from "../components/CreateSpaceQRModal";
import useTranslate from "../../../hooks/useTranslate";
import { fetchMySpaces } from "../../../store/spaceSlice";
import useCreateSpace from "../../../hooks/useCreateSpace";
import { createGuestSpace, createUploadLink } from "../spaceApi";

const CARD_WIDTH = 400;
const GAP = 24;
const MAX_CARDS = 4;

const SpacePage = () => {
  const { translate } = useTranslate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createSpace = useCreateSpace();

  const { mySpaces, loading } = useSelector((state) => state.space);

  const [showModeSelect, setShowModeSelect] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [mode, setMode] = useState("empty");
  const [uploadUrl, setUploadUrl] = useState("");

  useEffect(() => {
    dispatch(fetchMySpaces());
  }, [dispatch]);

  const handleCreateSpace = async (spaceName) => {
    try {
      if (!spaceName) return;

      if (mode === "empty") {
        const spaceId = await createSpace(spaceName);
        if (spaceId) {
          localStorage.setItem("pendingSpaceId", spaceId);
          localStorage.setItem("pendingSpaceName", spaceName); // ✅ 이름도 저장
          setShowNameModal(false);
          navigate(`/space/${spaceId}`);
        }
      } else if (mode === "mine") {
        const spaceId = await createGuestSpace(spaceName);
        const url = await createUploadLink(spaceId);
        setUploadUrl(url);
        setShowNameModal(false);
        setShowQRModal(true);
      }
    } catch (err) {
      console.error("공간 생성 실패", err);
    }
  };

  const visibleSpaces = mySpaces.slice(0, MAX_CARDS);
  const remaining = MAX_CARDS - visibleSpaces.length;

  return (
    <Box sx={{ px: 4, py: 4, pt: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={4}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "var(--text-color)",
              fontSize: "1.3rem",
              letterSpacing: "0.05em",
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
            {translate("space.description")}
          </Typography>
          <Box
            sx={{
              height: "2px",
              width: "120%",
              backgroundColor: "var(--primary-color)",
              borderRadius: "2px",
              mt: "8px",
              mx: "auto",
            }}
          />
        </Box>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, ${CARD_WIDTH}px)`,
              gap: `${GAP}px`,
              justifyContent: "center",
              width: "100%",
              maxWidth: `calc(${CARD_WIDTH * 4 + GAP * 3}px)`
            }}
          >
            {visibleSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
            {Array.from({ length: remaining }).map((_, index) => (
              <CreateSpaceCard key={`create-${index}`} onClick={() => setShowModeSelect(true)} />
            ))}
          </Box>
        </Box>
      )}

      <ModeSelectModal
        open={showModeSelect}
        onClose={() => setShowModeSelect(false)}
        onSelect={(selectedMode) => {
          setShowModeSelect(false);
          setMode(selectedMode);
          setShowNameModal(true);
        }}
      />

      <CreateSpaceNameModal
        open={showNameModal}
        onClose={() => setShowNameModal(false)}
        onNext={handleCreateSpace}
      />

      <CreateSpaceQRModal
        open={showQRModal}
        onClose={() => setShowQRModal(false)}
        uploadUrl={uploadUrl}
      />
    </Box>
  );
};

export default SpacePage;

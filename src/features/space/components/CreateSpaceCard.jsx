import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateSpaceNameModal from "../components/CreateSpaceNameModal";
import CreateSpaceQRModal from "../components/CreateSpaceQRModal";
import axios from "axios";

const CreateSpaceCard = () => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [uploadUrl, setUploadUrl] = useState("");

  const handleStart = () => {
    setShowNameModal(true);
  };

  const handleCreateSpace = async (spaceName) => {
    try {
      // 1. 공간 생성 요청
      const spaceRes = await axios.post("/api/space", { name: spaceName });
      const spaceId = spaceRes.data.spaceId;

      // 2. QR 업로드 링크 생성 요청
      const qrRes = await axios.post("/api/uploadlink", { spaceId });
      const url = qrRes.data.uploadUrl;

      // 3. 모달 전환
      setUploadUrl(url);
      setShowNameModal(false);
      setShowQRModal(true);
    } catch (error) {
      console.error("공간 생성 또는 QR 생성 실패", error);
    }
  };

  return (
    <>
      <Card
        onClick={handleStart}
        sx={{
          width: "400px",
          height: "500px",
          backgroundColor: "#F9F8F6",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "var(--primary-color)",
            color: "var(--white-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            border: "1px solid #D0D0D0",
            mb: 2,
          }}
        >
          <AddIcon fontSize="inherit" />
        </Box>
      </Card>

      {/* 공간 이름 입력 모달 */}
      <CreateSpaceNameModal
        open={showNameModal}
        onClose={() => setShowNameModal(false)}
        onNext={handleCreateSpace}
      />

      {/* QR 안내 모달 */}
      <CreateSpaceQRModal
        open={showQRModal}
        onClose={() => setShowQRModal(false)}
        uploadUrl={uploadUrl}
      />
    </>
  );
};

export default CreateSpaceCard;

import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import useTranslate from "../../../hooks/useTranslate";

const CreateSpaceModal = ({ open, onClose }) => {
      const {translate} = useTranslate();
  return (
    <Modal open={open} onClose={onClose}>
      <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            textAlign: "center",
          }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          {translate("space.modal.createPromptTitle")}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
        {translate("space.modal.createPromptDescription")}
        </Typography>
          {/* ✅ QR 이미지 영역 */}
          <Box sx={{ mb: 3 }}>
          <img
            src="/assets/images/qr.png" // QR 코드 경로 (원하는 경로로 바꿔도 돼!)
            alt="QR 코드"
            style={{ width: 120, height: 120 }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "var(--primary-color)" }}
          onClick={onClose}
        >
         {translate("common.close")}
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateSpaceModal;

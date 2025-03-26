import React from "react";
import { Typography, Button, Box } from "@mui/material";
import ModalTemplate from "../../../components/Modal/ModalTemplate";
import useTranslate from "../../../hooks/useTranslate";

const CreateSpaceQRModal = ({ open, onClose, uploadUrl }) => {
  const { translate } = useTranslate();

  return (
    <ModalTemplate open={open} onClose={onClose}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {translate("space.modal.createPromptTitle")}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        {translate("space.modal.createPromptDescription")}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <img
          src={uploadUrl || "/assets/images/qr.png"}
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
    </ModalTemplate>
  );
};

export default CreateSpaceQRModal;

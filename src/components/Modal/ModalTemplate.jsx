import React from "react";
import { Modal, Box } from "@mui/material";

const ModalTemplate = ({ open, onClose, children }) => {
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
        {children}
      </Box>
    </Modal>
  );
};

export default ModalTemplate;

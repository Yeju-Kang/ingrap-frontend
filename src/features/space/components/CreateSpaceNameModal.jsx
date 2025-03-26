import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import ModalTemplate from "../../../components/Modal/ModalTemplate";

const CreateSpaceNameModal = ({ open, onClose, onNext }) => {
  const [spaceName, setSpaceName] = useState("");

  const handleNext = () => {
    if (!spaceName.trim()) return;
    onNext(spaceName);
  };

  return (
    <ModalTemplate open={open} onClose={onClose}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        공간 이름을 입력해주세요
      </Typography>

      <TextField
        label="공간 이름"
        value={spaceName}
        onChange={(e) => setSpaceName(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        sx={{ backgroundColor: "var(--primary-color)", mr: 1 }}
        onClick={handleNext}
        disabled={!spaceName.trim()}
      >
        다음
      </Button>
      <Button variant="text" onClick={onClose}>
        닫기
      </Button>
    </ModalTemplate>
  );
};

export default CreateSpaceNameModal;

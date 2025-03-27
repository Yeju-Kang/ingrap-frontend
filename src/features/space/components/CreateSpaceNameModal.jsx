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
      <Typography variant="h6" fontWeight="bold" mb={1.5}>
  새로운 공간의 이름을 정해주세요
</Typography>
<Typography variant="body2" color="text.secondary" mb={2}>
당신의 영상이 이곳에서 3D 공간으로 피어납니다.
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

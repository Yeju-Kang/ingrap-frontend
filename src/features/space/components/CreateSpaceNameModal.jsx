import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import ModalTemplate from "../../../components/Modal/ModalTemplate";
import ValidatableTextField from "../../../components/TextField/ValidatableTextField";
import { isValidName } from "../../../utils/validation/name";
import useTranslate from "../../../hooks/useTranslate";

const CreateSpaceNameModal = ({ open, onClose, onNext }) => {
  const [spaceName, setSpaceName] = useState("");
  const [hasError, setHasError] = useState(true); // 에러 있으면 true
  const { translate } = useTranslate();

  const handleNext = () => {
    if (!spaceName.trim() || hasError) return;
    onNext(spaceName);
  };

  return (
    <ModalTemplate open={open} onClose={onClose}>
      <Typography variant="h6" fontWeight="bold" mb={1.5}>
      {translate("space.modal.createNameTitle")}
</Typography>
<Typography variant="body2" color="text.secondary" mb={2}>
{translate("space.modal.createNameDescription")}
</Typography>
<ValidatableTextField
  label="공간 이름"
  value={spaceName}
  onChange={setSpaceName}
  validator={isValidName}
  onErrorChange={setHasError}
/>

<Button
  variant="contained"
  sx={{ backgroundColor: "var(--primary-color)", mr: 1 }}
  onClick={handleNext}
  disabled={!spaceName.trim() || hasError} // ✅ 에러까지 고려!
>
  다음
</Button>
      <Button
  variant="text"
  onClick={onClose}
  sx={{
    backgroundColor: 'var(--white-color)',
    color: 'var(--text-color)',
    border: '1px solid var(--primary-color)',
    '&:hover': {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--white-color)', // hover 시 텍스트 흰색으로 바꿔주면 더 잘 보여
    },
    }
  }
>
  닫기
</Button>
    </ModalTemplate>
  );
};

export default CreateSpaceNameModal;

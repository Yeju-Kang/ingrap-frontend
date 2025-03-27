import React, { useState } from "react";
import { TextField } from "@mui/material";

const ValidatableTextField = ({
  label,
  value,
  onChange,
  validator,
  maxLength = 10,
  fullWidth = true,
  required = false,
  ...props
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue.trim() === "") {
      setErrorMsg(`${label}을(를) 입력해주세요.`);
    } else if (newValue.length > maxLength) {
      setErrorMsg(`${label}은(는) ${maxLength}자 이내로 입력해주세요.`);
    } else if (validator && !validator(newValue)) {
      setErrorMsg("사용할 수 없는 문자가 포함되어 있어요.");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={Boolean(errorMsg)}
      helperText={errorMsg || " "}
      fullWidth={fullWidth}
      required={required}
      margin="normal" // ← spacing은 이걸로도 가능
      {...props}
    />
  );
};

export default ValidatableTextField;

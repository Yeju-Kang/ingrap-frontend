import React, { useState } from "react";
import { TextField } from "@mui/material";

const ValidatableTextField = ({
    label,
    value,
    onChange,
    validator,
    maxLength = 10,
    onErrorChange, // ✅ 외부로 에러 전달
    ...props
  }) => {
    const [errorMsg, setErrorMsg] = useState("");
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      onChange(newValue);
  
      let msg = "";
      if (newValue.trim() === "") {
        msg = `${label}을(를) 입력해주세요.`;
      } else if (newValue.length > maxLength) {
        msg = `${label}은(는) ${maxLength}자 이내로 입력해주세요.`;
      } else if (validator && !validator(newValue)) {
        msg = "사용할 수 없는 문자가 포함되어 있어요.";
      }
  
      setErrorMsg(msg);
      onErrorChange?.(!!msg); // true = 에러 있음
    };
  
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        error={Boolean(errorMsg)}
        helperText={errorMsg || " "}
        fullWidth
        margin="normal"
        {...props}
      />
    );
  };
  

export default ValidatableTextField;
